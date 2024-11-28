const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust path to User model

// Replace with your MongoDB URI
const mongoURI = 'mongodb://localhost:27017/quick';

const createTestUsers = async () => {
  try {
    // Wait for MongoDB connection
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully!');

    // Define the test users with plain passwords
    const testUser1 = {
      email: 'test@eexample.com',
      password: 'password123', // You can change the password here
    };

    const testUser2 = {
      email: 'tes4e@example.com',
      password: 'password1234', // You can change the password here
    };

    // Create new users with the provided email and password (no hashing)
    const newUser1 = new User({
      email: testUser1.email,
      password: testUser1.password, // Store the password directly
    });

    const newUser2 = new User({
      email: testUser2.email,
      password: testUser2.password, // Store the password directly
    });

    // Save the user to the database
    await newUser1.save();
    console.log(`User ${newUser1.email} created successfully`);

    await newUser2.save();
    console.log(`User ${newUser2.email} created successfully`);
    
  } catch (err) {
    console.error('Error creating user:', err);
  } finally {
    // Disconnect from MongoDB once all operations are done
    mongoose.disconnect();
    console.log('MongoDB disconnected');
  }
};

// Call the function to create users
createTestUsers();
