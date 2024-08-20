require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const englishRoute = require('./routes/englishRoute');
const biologyRoute = require('./routes/biologyRoute');
const physicsRoute = require('./routes/physicsRoute');
const mathRoute = require('./routes/mathRoute');
const chemistryRoute = require('./routes/chemistryRoute');
const app = express();

const DB_URL = process.env.MONGO_DB_URL;

app.use(express.json());

app.use(cors({
    origin: ['https://entry-hub-frontend.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/englishquestions', englishRoute);
app.use('/biologyquestions', biologyRoute);
app.use('/physicsquestions', physicsRoute);
app.use('/mathquestions', mathRoute);
app.use('/chemistryquestions', chemistryRoute);
app.use('/users', userRoute);

mongoose.connect(DB_URL).then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.log(error);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
