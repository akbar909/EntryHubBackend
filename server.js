const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const englishRoute = require('./routes/englishRoute');
const biologyRoute = require('./routes/biologyRoute');
const physicsRoute = require('./routes/physicsRoute');
const mathRoute = require('./routes/mathRoute');
const chemistryRoute = require('./routes/chemistryRoute');
dotenv.config();
const app = express();
const DB_URL = process.env.MONGO_DB_URL;

app.use(cors())
// origin: ['https://entry-hub-frontend.vercel.app/'],
// methods: ['GET', 'POST', 'PUT', 'DELETE'],
// credentials: true
// }))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/englishquestions', englishRoute);
app.use('/biologyquestions', biologyRoute);
app.use('/physicsquestions', physicsRoute);
app.use('/mathquestions', mathRoute);
app.use('/chemistryquestions', chemistryRoute);
app.use('/users', userRoute);

console.log("Server is starting...");

mongoose.connect(DB_URL)
   .then(() => {
      console.log('Connected to database');
   })
   .catch((error) => {
      console.log('Database connection error:', error);
   });

console.log("Server setup complete");

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
