# Server-to-Client Communication Techniques

This document outlines different techniques used for communication between a server and a client, including both one-way and bidirectional methods.

---

## 1. One-Way Communication (Server → Client)

- **Short Polling**  
  The client repeatedly sends requests to the server at fixed intervals, regardless of whether new data is available.  
  *Pros:* Simple to implement  
  *Cons:* Inefficient due to unnecessary requests  

- **HTTP Long Polling**  
  The client sends a request, and the server holds the connection open until new data is available. Once the server responds, the client immediately sends a new request.  
  *Pros:* Reduces unnecessary requests compared to short polling  
  *Cons:* Slightly more complex to implement  

- **Server-Sent Events (SSE)**  
  A one-way protocol where the server can push updates to the client over a single HTTP connection.  
  *Pros:* Lightweight and efficient for real-time updates  
  *Cons:* Supports only server-to-client communication  

---

## 2. Bidirectional Communication (Client ↔ Server)

- **WebSocket**  
  Provides persistent, full-duplex communication over a single TCP connection.  
  *Use Cases:* Chat applications, live games, real-time dashboards  

- **gRPC Streaming**  
  A high-performance RPC framework supporting client, server, and bidirectional streaming.  
  *Use Cases:* Microservices, backend-to-backend communication  

- **WebTransport**  
  A modern protocol built on HTTP/3 and QUIC, offering low-latency, high-throughput, bidirectional communication.  
  *Use Cases:* Gaming, video conferencing, real-time streaming applications  

---

