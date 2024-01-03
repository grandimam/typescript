import net from "net"

const PORT = "8000"

const server = net.createServer((socket) => {
    console.log("Client connected")
    
    // Handle incoming data from clients
    socket.on('data', (data) => {
        console.log(`Received data: ${data}`);
        // You can perform any processing or respond to the client here
    });

    // Handle client disconnection
    socket.on('end', () => {
        console.log('Client disconnected');
    });
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});