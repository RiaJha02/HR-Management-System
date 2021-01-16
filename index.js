const express = require('express');
const ConnectDB = require('./config/db');

const app = express();

//Connecting Database
ConnectDB();

//Init Middleware
app.use(express.json({ extended : false }));

app.get('/', (req, res) => res.send('API Running'));

//Defining Routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/employee', require('./routes/api/employee'));

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`Servert started running on port ${PORT}`));
