"use client";

import { useEffect, useState } from "react";

const DEMO_TOKEN = "027b457b7433e0276ee45a79209b49ccd047fd6dd8113ea62d29d689a1a2e2a6";

export default function Devices() {
  const [devices, setDevices] = useState([]);   // MUST be array
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/devices/all", {
        headers: {
          Authorization: `Bearer ${DEMO_TOKEN}`,
        },
      });

      const data = await res.json();

      // ✅ SAFETY CHECK
      if (Array.isArray(data)) {
        setDevices(data);
      } else {
        setDevices([]);
        setError("Invalid response from server");
        console.error("Expected array, got:", data);
      }
    } catch (err) {
      setError("Failed to load devices");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 px-10 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Device Management
        </h1>

        {error && (
          <p className="text-red-600 mb-4">{error}</p>
        )}

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="text-left px-6 py-3">Device ID</th>
                <th className="text-left px-6 py-3">Firmware</th>
                <th className="text-left px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {devices.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-500">
                    No devices found
                  </td>
                </tr>
              ) : (
                devices.map((d) => (
                  <tr key={d.id} className="border-b">
                    <td className="px-6 py-4 font-medium">
                      {d.device_id}
                    </td>
                    <td className="px-6 py-4">
                      {d.firmware_version}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          d.status === "approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}
