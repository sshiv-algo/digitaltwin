const mongoose = require('mongoose');

const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        console.error('FATAL: MONGO_URI environment variable is not set.');
        // Don't exit — let the server start so health checks pass;
        // DB-dependent routes will return 500 until the env var is fixed.
        return;
    }

    const options = {
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS: 45000,
    };

    // Retry loop — Atlas free tier can take >30s to wake up on cold start
    const MAX_RETRIES = 5;
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            await mongoose.connect(uri, options);
            console.log(`MongoDB Connected (attempt ${attempt})`);
            return;
        } catch (err) {
            console.error(`MongoDB connection attempt ${attempt}/${MAX_RETRIES} failed: ${err.message}`);
            if (attempt === MAX_RETRIES) {
                // Log but DO NOT call process.exit() — Render would mark the deploy failed.
                // The server will keep running; Mongoose will buffer and retry queries.
                console.error('MongoDB failed after all retries. Server continues running.');
            } else {
                // Wait 5s before next attempt
                await new Promise(resolve => setTimeout(resolve, 5000));
            }
        }
    }
};

module.exports = connectDB;

