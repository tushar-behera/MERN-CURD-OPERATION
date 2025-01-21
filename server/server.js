const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');


const app = express();
app.use(bodyParser.json());
app.use('/api/employees', employeeRoutes); 
app.use(cors());

// Simplified Mongoose connection without deprecated options
mongoose.connect('mongodb://localhost:27017/employeeDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));




app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
