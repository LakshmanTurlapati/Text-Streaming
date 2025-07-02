const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static(__dirname));

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// In-memory storage for current text content
let currentText = {
    textbox1: '',
    textbox2: ''
};

// Handle WebSocket connections
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    
    // Send current text content to newly connected user
    socket.emit('initialize', currentText);
    
    // Handle text updates from textbox1
    socket.on('textbox1-update', (data) => {
        console.log('Received textbox1 update:', data.text);
        currentText.textbox1 = data.text;
        // Broadcast to all clients (including sender) - this enables single-tab testing
        io.emit('textbox2-changed', { text: data.text });
        console.log('Broadcasted to textbox2 for all clients');
    });
    
    // Handle text updates from textbox2
    socket.on('textbox2-update', (data) => {
        console.log('Received textbox2 update:', data.text);
        currentText.textbox2 = data.text;
        // Broadcast to all clients (including sender) - this enables single-tab testing
        io.emit('textbox1-changed', { text: data.text });
        console.log('Broadcasted to textbox1 for all clients');
    });
    
    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 