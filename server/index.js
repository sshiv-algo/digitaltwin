const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://dtwinai.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (Postman, curl, etc.)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.options("*", cors());

app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    if (req.headers.authorization) {
        console.log('Auth Header found');
    } else {
        console.log('No Auth Header');
    }
    next();
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/routines', require('./routes/routines'));
app.use('/api/admin', require('./routes/admin'));

app.get('/ping', (req, res) => res.send('pong'));

const PORT = process.env.PORT || 5604;

app.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT} at 0.0.0.0`));
