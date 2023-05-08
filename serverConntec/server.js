const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({ 
    host:'localhost', 
    user: 'root',
    password: '',
    database: ''
});

app.get('/', (req, res)=>{
    return res.json('index');
});

app.get('/noticias', (req, res)=>{
    return res.json('user');
});

app.get('/noticias/:id', (req, res)=>{
    return res.json('user');
}); 

app.listen(8080, ()=>{
    console.log('listing')
});