const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt')

// login function
const login = async (req, res) => {
  try {
    // find user by id
    const user = await User.findOne({ where: { user_id: req.body.user_id } });

    //invalid username
    if (!user) {
      return res.status(401).json({ message: 'Invalid user ID or password' })
    }
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        // generate a JWT token
        const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET_KEY)

        // return the token to the client
        return res.status(200).json({ message: "You have been logged in!", token: token })
      }
    }
    catch (error){
      return res.status(401).json({ message: 'Invalid password' })
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error' })
  }
};

//get user data to display while logged in (not currently used)
const getUser = async (req, res) => {
  try {

    const user = await User.findOne({ where: { user_id: req.params.id } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).send(user.user_id);
  } catch (error) {
    console.error('Error retrieving user:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const signUp = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    let info = {
      user_id: req.body.user_id,
      password: hashedPassword,
      admin: req.body.admin
    }
    const user = await User.create(info)
    res.status(200).send(user)
  }
  catch (error) {
    console.error('Error saving user:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}


module.exports = {
  login,
  getUser,
  signUp
};
