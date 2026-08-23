const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port =process.env.PORT || 3000;

// Allow the server to receive JSON
app.use(express.json());
app.use(express.static('public'));

// GET /
app.get('/', (reg, res)=> {
    res.send('My week 2 API!');
});

// POST /user
app.post('/user',(reg,res)=> {
    const{name, email}=reg.body;

// Check if name or email  is missing
    if (!name || !email){
        return res.status(400).json({
            error: 'name and email are required'
        });
    }

    res.json({
        message: `Hello, ${name}!`,
        email: email
    });
});

// GET /user/:id
app.get('/user/:id', (reg, res) => {
    const { id } = reg.params;

res.send(`user ${id} profile`);
});

// start the server
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});