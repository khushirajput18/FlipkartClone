// controller/usercontroller.js
import bcrypt from 'bcrypt';
import User from '../model/user-Schema.js';  // Ensure this path is correct
// import { request } from 'express';

// User Signup Controller
export const userSignup = async (req, res) => {
  try {
    const { firstname, lastname,username, email, password, phone } = req.body;

    if (!firstname || !lastname || !username || !email || !password || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      phone,
    });

    await newUser.save();
    return res.status(201).json({ message: 'User created successfully', user: newUser });

  } catch (err) {
    console.error('Error during signup:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// User Login Controller


// Login function
export const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });
    console.log(username);
    console.log("User found:", user);
    
    if (!user) {
      return res.status(401).json({ error: "Invalid login credentials" });
    }

    // Compare password with hashed version
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
   
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid login credentials" });
    }

    // If everything is fine
    return res.status(200).json({ message: "Login successful", data: user });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
