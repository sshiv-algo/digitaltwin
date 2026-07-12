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
  "http://localhost:5673",
  "https://dtwinai.vercel.app"
];

// Allow all Vercel preview deployments (*.vercel.app)
// Team slugs can contain hyphens so a simple subdomain wildcard is safest
const vercelPreviewPattern = /^https:\/\/[a-zA-Z0-9][a-zA-Z0-9-]*\.vercel\.app$/;

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (Postman, curl, mobile apps, server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin) || vercelPreviewPattern.test(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS: Origin '${origin}' not allowed`));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers (IE11) choke on 204
};

// Apply CORS to all routes — OPTIONS preflight uses the same origin whitelist
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

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

// Global error handler — MUST be after all routes
// Ensures CORS headers are set even on 500 errors so the browser can read the error body
app.use((err, req, res, next) => {
    const origin = req.headers.origin;
    if (origin && (allowedOrigins.includes(origin) || vercelPreviewPattern.test(origin))) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Credentials', 'true');
    }
    console.error('Unhandled error:', err.message);
    res.status(500).json({ success: false, message: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 5604;

app.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT} at 0.0.0.0`));
