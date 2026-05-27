const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');

const ConnectToDb = require('./db/db');
const indexroutes = require("./routes/index.routes");
const userroutes = require("./routes/user.routes");
const postroutes = require('./routes/post.routes');
const jobroutes = require('./routes/job.routes');
const mentorshiproutes = require('./routes/mentorship.routes');
const sessionroutes = require('./routes/session.routes');
const chatroutes = require('./routes/chat.routes');
const profileroutes = require("./routes/profile.routes")
const donationroutes = require("./routes/donation.routes")
const paymentroutes = require("./routes/payment.routes")
const adminroutes = require("./routes/admin.routes")
const eventroutes = require("./routes/event.routes");

const cookieparser = require('cookie-parser');
const cors = require('cors');

// 🔥 CRON (auto expiry)
require('./corn/session.corn');

// middlewares
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));

app.use(express.json());
app.use(cookieparser());

// DB connect
ConnectToDb();

// routes
app.use("/", indexroutes);
app.use("/user", userroutes);
app.use("/post", postroutes);
app.use("/job", jobroutes);
app.use("/mentorship", mentorshiproutes);
app.use("/session", sessionroutes);
app.use("/chat", chatroutes);
app.use("/profile",profileroutes)
app.use("/donation",donationroutes)
app.use("/payment",paymentroutes)
app.use("/admin",adminroutes)
app.use("/event",eventroutes)
// 🔥 HTTP SERVER + SOCKET.IO
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true
  }
});

// make io available in controllers
app.set('io', io);

// SOCKET LOGIC
io.on('connection', (socket) => {

  // join session room
  socket.on('join_session', (sessionId) => {
    socket.join(sessionId);
  });

  socket.on('disconnect', () => {
  });
});

// start server
server.listen(3000);