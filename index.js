require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(express.json());
// Enable all CORS requests
app.use(cors());

const corsOptions = {
    origin: 'http://localhost:3000', // Allow only requests from this domain
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use('/', require('./router/index'));

// Listen for connections to the WebSocket server
io.on('connection', (socket) => {
    console.log('A client connected!');
});

server.listen(port, (error) => {
    if (error) { console.log('Error starting the server:', error); return; }
    console.log('Server is running on port', port);
})
