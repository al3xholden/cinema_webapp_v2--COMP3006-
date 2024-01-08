const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// MongoDB Connection URI (replace with your actual MongoDB connection string)
const mongoURI = 'mongodb+srv://<admin>:<123456asdf>@cluster0.onzn52w.mongodb.net/?retryWrites=true&w=majority';

app.post('/saveToMongoDB', async (req, res) => {
  try {
    const { selectedMovie, selectedTime, selectedSeats, email } = req.body;

    // Connect to MongoDB
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Access the database and collection
    const db = client.db('');
    const collection = db.collection('');

    // Insert data into MongoDB
    const result = await collection.insertOne({
      selectedMovie,
      selectedTime,
      selectedSeats,
      email,
    });

    console.log('Data saved to MongoDB:', result.ops);

    // Respond to the client
    res.status(200).json({ message: 'Data saved to MongoDB' });
  } catch (error) {
    console.error('Error saving to MongoDB:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});