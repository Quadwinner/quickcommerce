const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust path to User model

// Replace with your MongoDB URI
const mongoURI = 'mongodb://localhost:27017/quick';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully!');
    
    const testUser = {
      email: 'test@example.com',
      password: 'password123', // Plain password here
    };

    // Hash the password
    bcrypt.hash(testUser.password, 10, async (err, hashedPassword) => {
      if (err) {
        console.error(err);
        return;
      }

      // Save the user with the hashed password
      const newUser = new User({
        email: testUser.email,
        password: hashedPassword,
      });

      try {
        await newUser.save();
        console.log('Test user created successfully');
        mongoose.disconnect(); // Disconnect after saving the user
      } catch (err) {
        console.error('Error creating test user', err);
        mongoose.disconnect();
      }
    });
  })
  .catch(err => console.error('Error connecting to MongoDB', err));
