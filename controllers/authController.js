
// login with Jwt
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }
    const payload = { id: user.id };
    const token = jwt.sign(payload, 'dali', {
        expiresIn: 360000 ,
    });
    return { token, user };
    }
// register with Jwt
const register = async ({ name, family_name, email, password }) => {
    try {
        // Check if the email is already registered
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          throw new Error('Email already exists');
        }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);


// Create a new user in the database
const newUser = await User.create({
    name,
    family_name,
    email,
    password: hashedPassword,
  });

  // Generate JWT token
  const token = jwt.sign(
    { userId: newUser.id, email: newUser.email },
    'your-secret-key',
    { expiresIn: '1h' } // Set the token expiration time
  );

  return { userId: newUser.id, token };
} catch (error) {
  throw error;
}
};
    module.exports = {

        login,
        register,
    };
