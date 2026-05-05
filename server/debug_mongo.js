const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;
console.log('Connecting to:', uri.replace(/:([^@]+)@/, ':****@'));

mongoose.connect(uri, {
    serverSelectionTimeoutMS: 30000
})
.then(() => {
    console.log('✅ SUCCESS: CONNECTED TO MONGO ATLAS');
    process.exit(0);
})
.catch(err => {
    console.error('❌ FAILURE:', err.message);
    process.exit(1);
});
