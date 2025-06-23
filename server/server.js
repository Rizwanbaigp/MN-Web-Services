const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
