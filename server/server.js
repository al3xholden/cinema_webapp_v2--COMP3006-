// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Set up your MongoDB connection

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});