import express from 'express';
import {city} from './city.js';
import {data} from './data.js';
import {emoji} from './emoji.js';
import {user} from './user.js';

const app = express();

const port = process.env.PORT || 8000;



app.get('/', (req, res) =>{
    res.send('welcome to json-play-ground');
})

app.get('/city', (req, res) =>{
    res.json(city)
})

app.get('/data', (req, res) =>{
    res.json(data)
})

app.get('/emoji', (req, res) =>{
    res.json(emoji)
})

app.get('/user', (req, res) =>{
    res.json(user)
})

app.listen(port,()=>{console.log(`app lisition on port ${port}`)});