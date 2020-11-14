const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
// const stripe = require('stripe')('sk_test_51HmWtdL1qdDcN2vwbGj8zINcGs2rGh9nzTAUUFCdx0WUGKaTqMB1MAxKKjiZHGvt1ynET1x82nlLugiTxys7OkW100W1kO4sQ4');
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/' , (req,res) => {
    return res.status(200).send('hello world');
})

app.post('/payments/create' , async (req,res) => {
   const total =  req.query.total;
   console.log('Payment Request Received BOMM!! ' , total / 100);

    
   const client_secret = Math.floor(Math.random() * 7883787328)
    
   res.status(201).send({
       clientSecret: client_secret
   })
})

// - listen command
exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/clone-o101/us-central1/api