#Different Techniques used in
Server-to-Client Communication
 
#HTTP Long Polling:
This technique involves a client to make repeated HTTP requests to a server, with the server holding the connection open and responds to  a new data  when available. 
Server-Sent Events (SSE):
A simple, one-way protocol where a server can push data to a client over a single HTTP connection. 

#Short Polling:
The basic version where the client continuously sends requests at fixed intervals, regardless of whether new data is available or not. 
For Bidirectional Communication its indeed.

#WebSocket:
The standard for full-duplex, persistent, real-time communication between a client and a server over a single TCP connection. 
gRPC Streaming:
A high-performance framework that allows for bidirectional, long-lived streams of data, often used for microservices and inter-service communication. 

#WebTransport:
A newer, high-performance protocol designed for browser apps, providing low-latency and high-throughput bidirectional communication over HTTP/3. 
