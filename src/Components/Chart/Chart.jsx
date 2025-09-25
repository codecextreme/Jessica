import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import explore from "../../assets/Media/Icons/explore.png";
import up from "../../assets/Media/Icons/arrowup.png";
import down from "../../assets/Media/Icons/arrowdown.png";

export default function BloodPressureChart({ data }) {
  const [bpData, setBpData] = useState([]);

  useEffect(() => {
    if (data?.length > 0) {
      const transformed = data.map((item) => ({
        month: `${item.month.slice(0, 3)}, ${item.year}`,
        systolic: item.blood_pressure?.systolic?.value,
        diastolic: item.blood_pressure?.diastolic?.value,
      }));
      setBpData(transformed);
    }
  }, [data]);

  const latestRaw = data?.[data.length - 1] || {};

  // Helper for arrow selection
  const getArrow = (level) => {
    if (!level) return null;
    if (level.includes("Higher")) return up;
    if (level.includes("Lower")) return down;
    return null;
  };

  return (
    <div
      style={{
        background: "#F4F0FE",
        padding: "1.25rem",
        borderRadius: "12px",
        width: "100%",
        height: "23vw",
        margin: "auto",
        fontFamily: "Manrope, sans-serif",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontSize: "0.75rem",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ margin: 0, fontSize: "1rem", color: "#072635" }}>
          Blood Pressure
        </h3>
        <div
          style={{
            marginRight: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "0.75rem", color: "#555" }}>
            Last 6 months
          </span>
          <img src={explore} alt="explore" style={{ width: "0.75rem", cursor: "pointer" }} />
        </div>
      </div>

      {/* Chart + Readings */}
      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          marginTop: "0.75rem",
          color: "#072635",
          gap: "1.5rem",
        }}
      >
        {/* Chart */}
        <div style={{ flex: 3 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={bpData} margin={{ right: 10 }}>
              <CartesianGrid vertical={false} stroke="#dcdcdc" strokeWidth={1} />
              <XAxis
                dataKey="month"
                stroke="#999"
                tickMargin={10}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#072635", fontSize: "0.75rem" }}
              />
              <YAxis
                stroke="#999"
                domain={["dataMin - 10", "dataMax + 10"]}
                tickMargin={20}
                axisLine={{ stroke: "#dcdcdc", strokeWidth: 1 }}
                tickLine={{ stroke: "#dcdcdc", strokeWidth: 1 }}
                tick={{ fill: "#072635", fontSize: "0.75rem" }}
              />
              <Tooltip
                formatter={(value, name) => [
                  `${value} mmHg`,
                  name === "systolic" ? "Systolic" : "Diastolic",
                ]}
              />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#E66FD2"
                strokeWidth={2.5}
                dot={{ r: 6, fill: "#E66FD2", stroke: "white", strokeWidth: 1 }}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#9B7FE8"
                strokeWidth={2.5}
                dot={{ r: 6, fill: "#9B7FE8", stroke: "white", strokeWidth: 1 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Readings */}
        <div
          style={{
            flex: 1,
            minWidth: "140px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Systolic */}
          <div>
            <div
              style={{
                color: "#072635",
                fontWeight: "bold",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "0.6rem",
                  height: "0.6rem",
                  backgroundColor: "#E66FD2",
                  borderRadius: "50%",
                  marginRight: "0.4rem",
                }}
              ></div>
              Systolic
            </div>
            <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {latestRaw?.blood_pressure?.systolic?.value || "--"}
            </div>
            <div style={{ color: "#072635", fontSize: "0.75rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "0.5rem",
                  gap: "0.3rem",
                }}
              >
                {getArrow(latestRaw?.blood_pressure?.systolic?.levels) && (
                  <img
                    src={getArrow(latestRaw?.blood_pressure?.systolic?.levels)}
                    alt="trend"
                    style={{ width: "0.7rem" }}
                  />
                )}
                <p style={{ margin: 0 }}>
                  {latestRaw?.blood_pressure?.systolic?.levels || "—"}
                </p>
              </div>
            </div>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "1rem 0",
            }}
          />

          {/* Diastolic */}
          <div>
            <div
              style={{
                color: "#072635",
                fontWeight: "bold",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "0.6rem",
                  height: "0.6rem",
                  backgroundColor: "#8C6FE6",
                  borderRadius: "50%",
                  marginRight: "0.4rem",
                }}
              ></div>
              Diastolic
            </div>
            <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {latestRaw?.blood_pressure?.diastolic?.value || "--"}
            </div>
            <div style={{ color: "#072635", fontSize: "0.75rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "0.5rem",
                  gap: "0.3rem",
                }}
              >
                {getArrow(latestRaw?.blood_pressure?.diastolic?.levels) && (
                  <img
                    src={getArrow(latestRaw?.blood_pressure?.diastolic?.levels)}
                    alt="trend"
                    style={{ width: "0.7rem" }}
                  />
                )}
                <p style={{ margin: 0 }}>
                  {latestRaw?.blood_pressure?.diastolic?.levels || "—"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
