/////////////////////////////////////////////////////////////////

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const upload = require('./fileUploadMiddleware'); 

const app = express();
const port = 3003;

app.use(cors()); // For Enabling communication between frontend and backend

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// MySQL Connection Pool
const db = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'entirety'
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    process.exit(1); // Exit the application if unable to connect to the database
  }
  console.log('Connected to MySQL database');
  connection.release(); // Releasing the connection
});




// Register endpoint

app.post('/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Hashing password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error('Error hashing password: ', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email,
      password: hash
    };

    // Inserting new user into database
    console.log('Running query');
    db.query('INSERT INTO users SET ?', newUser, (err, result) => {
      if (err) {
        console.error('Error registering user: ', err);
        return res.status(500).json({ error: ' A user already registered with the same email' });
      }
      else{      res.status(200).json({ message: 'User registered successfully' });
    }
    });
  });
});









// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

 
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Check if user exists
  db.query('SELECT * FROM users WHERE email = ?', email, (err, results) => {
    if (err) {
      console.error('Error finding user: ', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the passwords from the database
    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords: ', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      if (!isMatch) {
        return res.status(401).json({ error: 'Incorrect password' });
      }
      // Passwords match, login successful
      res.status(200).json({ message: 'Login successful' });
    });
  });
});







// Add Property endpoint with image upload handling
app.post('/my-account', upload.single('image'), (req, res) => {
  const { title, description, price, address, country, city, amenities } = req.body;
  const imagePath = req.file.path; // Get the path to the uploaded image

  // Validate input and image upload
  if (!title || !description || !price || !address || !country || !city || !amenities || !imagePath) {
    return res.status(400).json({ error: 'All fields including image are required' });
  }

  const newProperty = {
    title,
    description,
    price,
    address,
    country,
    city,
    amenities,
    image_url: imagePath // Store the path to the image in the database
  };

  // Insert property into database
  db.query('INSERT INTO properties SET ?', newProperty, (err, result) => {
    if (err) {
      console.error('Error adding property: ', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(200).json({ message: 'Property added successfully' });
  });
});


// Fetch properties endpoint
app.get('/properties', (req, res) => {
  // Fetch properties from the database
  db.query('SELECT * FROM properties', (err, results) => {
    if (err) {
      console.error('Error fetching properties: ', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    // Return fetched properties as a response
    res.status(200).json(results);
  });
});




// Route handler for the root URL ("/")
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the backend server'); // Send a simple welcome message
});

// Catch-all route handler for non-existing routes
app.get('*', (req, res) => {
  res.redirect('/'); // Redirect to the root URL
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
