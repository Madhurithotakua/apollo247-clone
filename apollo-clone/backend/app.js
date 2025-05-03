const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const doctorRoutes = require('./routes/doctorRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // make sure config/db.js exists and connects properly

app.use('/api', doctorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
