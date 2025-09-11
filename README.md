# Server-to-Client Communication Techniques

This document outlines different techniques used for communication between a server and a client, including one-way and bidirectional methods.

---

## 1. One-Way Communication (Server → Client)

| Technique       | Description                                                                 | Pros                          | Cons                          |
|-----------------|----------------------------------------------------------------------------|-------------------------------|-------------------------------|
| Short Polling   | Client sends requests at fixed intervals regardless of new data.          | Simple to implement            | Inefficient, many useless requests |
| HTTP Long Polling | Client sends a request; server holds it until new data is available.     | Reduces unnecessary requests  | Slightly complex to implement |
| Server-Sent Events (SSE) | Server pushes updates over a single HTTP connection.               | Lightweight, efficient        | Only server-to-client, one-way |

---

## 2. Bidirectional Communication (Client ↔ Server)

| Technique         | Description                                                                 | Use Cases                               |
|-------------------|----------------------------------------------------------------------------|----------------------------------------|
| WebSocket         | Persistent, full-duplex communication over a TCP connection.              | Chat apps, live games, dashboards      |
| gRPC Streaming    | High-performance RPC framework supporting client, server, and bidirectional streaming. | Microservices, backend-to-backend communication |
| WebTransport      | Built on HTTP/3 and QUIC, low-latency, high-throughput bidirectional communication. | Gaming, video conferencing, real-time streaming |

---

## 3. Summary Table

| Technique       | Type          | Direction         | Latency  | Browser Support | Use Cases                          |
|-----------------|---------------|-----------------|---------|----------------|----------------------------------|
| Short Polling   | HTTP request  | Client → Server | High    | Universal      | Basic notifications, simple updates |
| Long Polling    | HTTP request  | Client ↔ Server | Medium  | Universal      | Chat apps, async updates           |
| SSE             | HTTP stream   | Server → Client | Low     | Good           | Live feeds, dashboards, stocks    |
| WebSocket       | TCP connection| Full-duplex     | Low     | Excellent      | Real-time apps, multiplayer games |
| gRPC Streaming  | HTTP/2 stream | Full-duplex     | Very Low| Limited        | Microservices, backend communication |
| WebTransport    | HTTP/3 + QUIC | Full-duplex     | Very Low| Modern browsers| Real-time web apps, gaming, streaming |

---

*This README provides a clear overview of modern communication techniques for web and backend development, suitable for both learning and contribution.*


