"use client";

import { useState } from "react";

export default function RegisterDevice() {
  const [deviceId, setDeviceId] = useState("");
  const [deviceSecret, setDeviceSecret] = useState("");
  const [message, setMessage] = useState("");

  const registerDevice = async () => {
    const res = await fetch("http://127.0.0.1:8000/onboard/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        device_id: deviceId,
        device_secret: deviceSecret,
      }),
    });

    const data = await res.json();
    setMessage(data.message || "Error");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-indigo-700">
          Register Device
        </h1>

        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Device ID"
          value={deviceId}
          onChange={(e) => setDeviceId(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Device Secret"
          value={deviceSecret}
          onChange={(e) => setDeviceSecret(e.target.value)}
        />

        <button
          onClick={registerDevice}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Register
        </button>

        {message && (
          <p className="mt-4 text-green-600 font-medium">{message}</p>
        )}
      </div>
    </main>
  );
}
