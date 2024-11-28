const User = require('../models/User'); // Import User model

// Register Controller
const register = async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user with the provided data (no password hashing)
    const newUser = new User({
      name, // Name from the request body
      email,
      password, // Directly storing the password (not hashed)
      phone,
      address,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the stored password
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // If login is successful, return user details
    res.status(200).json({ message: 'Login successful', user: { email: user.email, name: user.name, phone: user.phone, address: user.address } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register, login };
