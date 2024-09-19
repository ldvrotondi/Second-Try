require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'client/build')));


// API route to handle form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
  }

  let transporter = nodemailer.createTransport({
      service: 'gmail',  
      auth: {
          user: process.env.EMAIL_USER,  
          pass: process.env.EMAIL_PASS,
      },
  });
  let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, 
      subject: `Contact form submission from ${name}`,
      text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
      `,
  };
  try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
});

const router = require('./routes/routes.js')
app.use('/api', router)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//api test
app.get('/', (req, res) => {
    res.json({message: 'API connection successful'})
  })

  const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
  
  const PORT = process.env.PORT

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

