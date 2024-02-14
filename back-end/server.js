const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // db.js dosyanızın yolu

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/user', async (req, res) => {
    try {
        const { name, surname, date, time, email } = req.body;
        await db.none('INSERT INTO users(name, surname, date, time, email) VALUES($1, $2, $3, $4, $5)', [name, surname, date, time, email]);
        res.json({ success: true, message: 'User data saved successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
