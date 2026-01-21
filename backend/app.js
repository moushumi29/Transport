const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
const builtyRoutes = require('./routes/builty.routes');
const vehicleRoutes = require('./routes/vehicle.routes');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRoutes);
app.use('/builty', builtyRoutes);
app.use('/vehicle', vehicleRoutes);


module.exports = app;