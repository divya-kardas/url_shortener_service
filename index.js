const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect to database
connectDB();

app.use(express.json());

// Allow CORS
app.use(cors());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

// Serve frontend
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
