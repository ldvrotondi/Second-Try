const jwt = require('jsonwebtoken');
const User = require('../models/user'); 

// Login function
const login = async (req, res) => {
  const { user_id, password } = req.body;
  try {
    // Find the user by user_id
    const user = await User.findOne({ where: { user_id } });



    if (!user) {
      return res.status(401).json({ message: 'Invalid user ID or password' });
    }

    // Compare the input password with the stored password
    if (user.password != password){
      return res.status(401).json({ message: 'Invalid password' })
    }

    // Generate a JWT token
    const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET_KEY);

    // Return the token to the client
    return res.json({ message: "You have been logged in!", token: token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { user_id: req.user.user_id } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ user_id: user.user_id });
  } catch (error) {
    console.error('Error retrieving user:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {
  login,
  getUser,
};
