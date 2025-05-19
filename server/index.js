require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware first
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));  // so /uploads/covers/fantasy1.jpg is accessible
// Routes after middleware
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

// Test route
app.get('/', (req, res) => {
  res.send('Novics backend running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
