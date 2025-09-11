#Different Technices used 
For Server-to-Client Communication
Server-to-client communication is a core concept in computing where a client (like a web browser) requests a service or data from a server, and the server responds by providing that information
 
#HTTP Long Polling:
This technique involves a client making repeated HTTP requests to a server, with the server holding the connection open and responding only when new data is available. 
Server-Sent Events (SSE):
A simple, one-way protocol where a server can push data to a client over a single HTTP connection. 
Server-Sent Events (SSE) is a server-push technology that allows a server to send real-time updates to a client over a persistent, unidirectional HTTP connection

#Short Polling:
The basic version where the client continuously sends requests at fixed intervals, regardless of whether new data is available. 
For Bidirectional Communication

#WebSocket:
The standard for full-duplex, persistent, real-time communication between a client and a server over a single TCP connection. 
gRPC Streaming:
A high-performance framework that allows for bidirectional, long-lived streams of data, often used for microservices and inter-service communication. 
WebSocket is a communication protocol that enables persistent, full-duplex, bidirectional communication channels over a single TCP connection, allowing both client and server to send data at any time without a request-response cycle

#WebTransport:
A newer, high-performance protocol designed for browser apps, providing low-latency and high-throughput bidirectional communication over HTTP/3. 
