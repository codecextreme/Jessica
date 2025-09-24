import React from "react";
import "./Diagnostic.css";

export default function DiagnosticList({ data }) {
  return (
    <div className="diagnostic-container">
      <h2>Diagnostic List</h2>

      <div className="diagnostic-table-header">
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="diagnostic-table-wrapper">
        <table className="diagnostic-table">
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
