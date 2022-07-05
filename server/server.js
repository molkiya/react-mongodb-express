const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config')
const app = express();
const port = 3000;

const Post = require('./model/model.js')

// app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(
    process.env.DB_CONNECTION,
    () => console.log('Connected to MongoDB')
)

app.get('/api', (req, res) => {
    res.send({ message: "Hello World" })
    console.log('GET QUERY /API')
})

app.post('/post', (req, res) => {

    console.log(req)

    const post = new Post({
        cardNumber: req.body.card,
        expirationDate: req.body.date,
        cvv: req.body.cvv,
        amount: req.body.amount
    })

    post.save((err, result) => {
        if (err) {
            response = { 
                err: true,
                message: err
            }
        } else {
            response = {
                id: result._id,
                amount: result.amount
            }
        }
        res.json(response)
    })

    res.redirect('/');
})

app.listen(port, (err) => {
    console.log(`Server is running on port ${port}`)
})