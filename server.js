import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import User from './model/user-Schema.js';  // Ensure the path is correct
import Routes from './routes/route.js'; // Import your routes file
import Connection from './database/db.js';

dotenv.config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@ac-fa0femz.9ajpbf6.mongodb.net/Project0?retryWrites=true&w=majority&appName=ecommerce-web`;
  Connection(URL) ;
  if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"))
  }
// Middleware
app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from frontend at this URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());  // Middleware to parse JSON bodies

// Use routes correctly
app.use('/', Routes); // This should be app.use() instead of app()

// MongoDB Connection

const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-fa0femz-shard-00-00.9ajpbf6.mongodb.net:27017,ac-fa0femz-shard-00-01.9ajpbf6.mongodb.net:27017,ac-fa0femz-shard-00-02.9ajpbf6.mongodb.net:27017/Project0?ssl=true&replicaSet=atlas-pb4eyy-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce-web`;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

// Sample signup route
app.post('/signup', async (req, res) => {
  console.log('Request Body:', req.body); // Debug log to check incoming data

  try {
    const { firstname, lastname, username, email, password, phone } = req.body;

    // Validation
    if (!firstname || !lastname || !username || !email || !password || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ error: 'Username already in use' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      phone,
    });

    // Save user to the database
    await newUser.save();

    // Return a proper response
    return res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    console.error('Error during signup:', err); // Log the error
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// 404 route for unmatched paths
app.use((req, res) => {
  res.status(404).send('Route not found: ' + req.originalUrl);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
