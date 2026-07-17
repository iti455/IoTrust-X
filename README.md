# IoTrust-X
Edge-Based IoT Security Monitoring and Automated Incident Response Framework using MQTT, FastAPI, Python, and Streamlit for real-time anomaly detection and security monitoring.

Overview:
IoTrust-X is a lightweight edge-based IoT security framework that continuously monitors IoT device communication, detects anomalous behavior, and automatically responds to security threats in real time.
Unlike traditional IoT security systems that rely only on device authentication, IoTrust-X performs continuous monitoring using MQTT communication, rule-based anomaly detection, FastAPI-based device verification, and a centralized Streamlit dashboard for visualization.

Problem Statement:
Most IoT security solutions authenticate devices only during connection and do not monitor device behavior afterward. As a result, compromised devices can remain active without detection, leading to unauthorized access, network flooding, data manipulation, and service disruption.
IoTrust-X addresses this challenge by providing continuous monitoring, anomaly detection, and automated incident response at the edge.

Objectives:
- Monitor IoT devices continuously in real time.
- Detect suspicious device behavior using rule-based anomaly detection.
- Authenticate devices using FastAPI.
- Automatically block malicious devices.
- Generate real-time alerts and logs.
- Visualize security events through an interactive dashboard

 Features:
- MQTT Publisher & Subscriber Communication
- MATLAB IoT Device Integration
- Real-Time Device Monitoring
- FastAPI Device Authentication
- Rule-Based Anomaly Detection
- Automated Incident Response
- Automatic Device Blocking
- Live Security Dashboard
- Event Logging
- Device Filtering
- Real-Time Alerts

System Architecture:
IoT Device (MATLAB / Python)
            │
            ▼
     MQTT Publisher
            │
            ▼
    Mosquitto MQTT Broker
            │
            ▼
     MQTT Subscriber
            │
            ▼
    Monitoring Engine
            │
            ▼
 FastAPI Device Verification
            │
            ▼
 Rule-Based Anomaly Detection
            │
            ▼
 Automated Incident Response
            │
            ▼
 Streamlit Dashboard
 <img width="720" height="401" alt="SYSTEM ARCHITECTURE" src="https://github.com/user-attachments/assets/fdd827ca-4ced-4ac1-b63f-ca21e9deac9f" />

Project Workflow:
1. IoT devices generate sensor data.
2. MQTT Publisher sends messages to the Mosquitto Broker.
3. MQTT Subscriber receives incoming messages.
4. Monitoring Engine analyzes device communication.
5. FastAPI verifies device authenticity.
6. Rule-based engine detects suspicious activity.
7. Malicious devices are automatically blocked.
8. Alerts and logs are generated.
9. Streamlit dashboard visualizes the system status in real time.

Results:
- Successfully established MQTT Publisher–Subscriber communication.
- Integrated MATLAB IoT device with MQTT Broker.
- Captured all MQTT messages in real time.
- Implemented FastAPI-based device authentication.
- Detected abnormal device behavior using rule-based analysis.
- Automatically blocked suspicious devices.
- Displayed real-time alerts, logs, charts, and device statistics using Streamlit.

Screenshots:
MQTT Publisher-
<img width="988" height="194" alt="MQTT PUBLISHER" src="https://github.com/user-attachments/assets/32f102d8-b51a-4d87-a029-63fe35cce0e9" />
MQTT Subscriber-
<img width="1072" height="218" alt="MQTT SUBSCRIBER" src="https://github.com/user-attachments/assets/1b668b30-ad74-4114-a76e-bf8fb18d5bf8" />
Dashboard-
<img width="732" height="396" alt="Dashboard" src="https://github.com/user-attachments/assets/9c96982f-b171-4006-9eb7-47ccbe75c918" />
Alerts-
<img width="1123" height="226" alt="Alerts" src="https://github.com/user-attachments/assets/52e53864-54ac-4f2f-b034-fcfc210ba6e9" />
Logs-
<img width="1025" height="407" alt="Logs" src="https://github.com/user-attachments/assets/4de7c8cf-2218-4660-83d8-f17ebf3c32fc" />
Device Filter-
<img width="762" height="480" alt="Filter Section" src="https://github.com/user-attachments/assets/238ef525-2139-424d-add7-02b4c81d11d0" />

Future Scope:
- Machine Learning-based Anomaly Detection
- Wazuh SIEM Integration
- Raspberry Pi Deployment
- Cloud Deployment
- TLS Encryption
- Enterprise SIEM Integration


