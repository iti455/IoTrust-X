"use client";
import { useState } from "react";

export default function Register() {
  const [deviceId, setDeviceId] = useState("");
  const [secret, setSecret] = useState("");
  const [message, setMessage] = useState("");

  async function registerDevice() {
    try {
      const res = await fetch("http://127.0.0.1:8000/onboard/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          device_id: deviceId,
          device_secret: secret,
        }),
      });

      const data = await res.json();
      setMessage(JSON.stringify(data));
    } catch (err) {
      setMessage("Error connecting to backend");
    }
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Register Device</h2>

      <input
        placeholder="Device ID"
        value={deviceId}
        onChange={(e) => setDeviceId(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Device Secret"
        type="password"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
      />
      <br /><br />

      <button onClick={registerDevice}>Register</button>

      <p>{message}</p>
    </main>
  );
}
