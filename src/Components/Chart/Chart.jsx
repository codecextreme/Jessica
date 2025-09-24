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

  return (
    <div
      style={{
        background: "#F4F0FE",
        padding: "20px",
        borderRadius: "12px",
        width: "660px",
        height: "300px",
        margin: "auto",
        fontFamily: "Manrope",
        boxSizing: "border-box",
        display: "flex",
        fontSize: 12,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ margin: 0 }}>Blood Pressure</h3>
        <div
          style={{
            marginRight: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 12, color: "#555", marginRight: 10 }}>
            Last 6 months
          </span>
          <img src={explore} alt="" style={{ width: 10, cursor: "pointer" }} />
        </div>
      </div>

      {/* Chart + Readings */}
      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          marginTop: "10px",
          color: "#072635",
        }}
      >
        {/* Chart */}
        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={bpData} margin={{ right: 10 }}>
              <CartesianGrid
                vertical={false}
                stroke="#dcdcdc"
                strokeWidth={1}
              />
              <XAxis
                dataKey="month"
                stroke="#999"
                tickMargin={10}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#072635" }}
              />
              <YAxis
                stroke="#999"
                domain={[60, 180]}
                tickMargin={20}
                ticks={[60, 80, 100, 120, 140, 160, 180]}
                axisLine={{ stroke: "#dcdcdc", strokeWidth: 1 }}
                tickLine={{ stroke: "#dcdcdc", strokeWidth: 1 }}
                tick={{ fill: "#072635" }}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#e16bd2"
                strokeWidth={2.5}
                dot={{ r: 6, fill: "#e16bd2", stroke: "white", strokeWidth: 1 }}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#9b7fe8"
                strokeWidth={2.5}
                dot={{ r: 6, fill: "#9b7fe8", stroke: "white", strokeWidth: 1 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Readings */}
        <div
          style={{
            width: "130px",
            paddingLeft: "20px",
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
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#E66FD2",
                  borderRadius: 50,
                  marginRight: 5,
                }}
              ></div>{" "}
              Systolic
            </div>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              {latestRaw?.blood_pressure?.systolic?.value || "--"}
            </div>
            <div style={{ color: "#072635", fontSize: "12px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 6,
                }}
              >
                <img
                  src={
                    latestRaw?.blood_pressure?.systolic?.levels?.includes("Higher")
                      ? up
                      : down
                  }
                  alt=""
                  style={{ width: 10, marginRight: 5 }}
                />
                <p style={{ margin: 0 }}>
                  {latestRaw?.blood_pressure?.systolic?.levels}
                </p>
              </div>
            </div>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #ccc",
              marginTop: 20,
              marginBottom: 20,
            }}
          />

          {/* Diastolic */}
          <div>
            <div
              style={{
                color: "#072635",
                fontWeight: "bold",
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#8C6FE6",
                  borderRadius: 50,
                  marginRight: 5,
                }}
              ></div>{" "}
              Diastolic
            </div>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              {latestRaw?.blood_pressure?.diastolic?.value || "--"}
            </div>
            <div style={{ color: "#072635", fontSize: "12px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 6,
                }}
              >
                <img
                  src={
                    latestRaw?.blood_pressure?.diastolic?.levels?.includes("Higher")
                      ? up
                      : down
                  }
                  alt=""
                  style={{ width: 10, marginRight: 5 }}
                />
                <p style={{ margin: 0 }}>
                  {latestRaw?.blood_pressure?.diastolic?.levels}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
