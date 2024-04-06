const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 8000;
const FreherSelectionSchema = require('./schema/FreherSelection');
const connectionURL = require('./config/db.cofig');

//middle wires
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


//connect to mongodb
const connectToDb = async () => {
    try {
        await mongoose.connect(connectionURL);
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database', error.message);
    }
}

connectToDb();


app.post('/v1/freshers/selection', (req, res) => {
    const { name, email, phone, college, year, department, cgpa } = req.body;
    const fresher = new FreherSelectionSchema({ name, email, phone, college, year, department, cgpa });
    console.log(fresher)
    fresher.save().then((data) => {
        res.json(data);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    });
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
