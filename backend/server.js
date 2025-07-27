const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/planpilot'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
