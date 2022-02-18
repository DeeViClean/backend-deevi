import mongoose from 'mongoose';
const dotenv = require('dotenv').config();


mongoose.connect(process.env.mongo_db, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(db => console.log('Database conenct')).catch(err => console.log(err));