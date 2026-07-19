"use client";
import { useState } from "react";

export default function Authenticate() {
  const [deviceId, setDeviceId] = useState("");
  const [secret, setSecret] = useState("");
  const [message, setMessage] = useState("");

  async function authenticate() {
    try {
      const res = await fetch("http://127.0.0.1:8000/onboard/authenticate", {
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

      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        setMessage("Authenticated successfully. Token stored.");
      } else {
        setMessage(JSON.stringify(data));
      }
    } catch (err) {
      setMessage("Authentication failed");
    }
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Authenticate Device</h2>

      <input
        placeholder="Device ID"
        value={deviceId}
        onChange={(e) => setDeviceId(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Device Secret"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
      />
      <br /><br />

      <button onClick={authenticate}>Authenticate</button>

      <p>{message}</p>
    </main>
  );
}
