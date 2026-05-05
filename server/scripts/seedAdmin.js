const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const path = require('path');
const dotenv = require('dotenv');

// Load env vars from server/.env
dotenv.config({ path: path.join(__dirname, '../.env') });

const User = require('../models/User');

const seedAdmin = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.error('MONGO_URI is not defined in .env');
            process.exit(1);
        }

        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Connected...');

        const email = 'admin@digitaltwin.com';
        const password = 'AdminPassword123!';

        // Check if exists
        let user = await User.findOne({ email });
        if (user) {
            console.log('Admin user already exists. Updating password and admin status...');
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            user.isAdmin = true;
            user.role = 'Professional';
            await user.save();
        } else {
            user = new User({
                name: 'System Admin',
                email: email,
                password: password,
                role: 'Professional',
                isAdmin: true,
                gender: 'Male'
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            console.log('Admin User Created Successfully!');
        }

        console.log('Email:', email);
        console.log('Password:', password);

        process.exit();
    } catch (err) {
        console.error('SEED ERROR:', err.message);
        process.exit(1);
    }
};

seedAdmin();
