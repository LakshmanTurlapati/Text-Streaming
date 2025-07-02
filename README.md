# Text Streaming

Just a quick demo showing off what Node.js can do with real-time communication. Pretty neat stuff!

## What it does

Two text boxes that sync with each other in real-time. Type in one box and watch it appear instantly in the other. It's like magic, but it's actually WebSockets doing the heavy lifting.

## The tech stack

- **Node.js** with Express for the server
- **Socket.IO** for real-time WebSocket communication
- Plain HTML/CSS/JS for the frontend
- In-memory storage (so don't expect your text to survive a server restart)

## How to run this thing

1. Make sure you have Node.js installed
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open your browser to `http://localhost:3000`
5. Start typing in either text box and watch the magic happen

## What's cool about it

- Real-time bidirectional sync between text boxes
- Works across multiple browser tabs/windows
- Shows connection status
- Has those little sync indicators that pulse when text updates
- Responsive design that works on mobile too

## Testing it out

Open multiple browser tabs to really see it in action. Type in one tab and watch it appear in all the others instantly. It's a simple but effective demo of real-time web communication.

That's pretty much it. Sometimes the simplest demos are the most satisfying to play with.