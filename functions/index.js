// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });




// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")("sk_test_51L3HT9FAatdIn9qmDxR1QwnFWw9oFOa4gLRz8JrxE2g3FyBebUCbQEw4RGcNSn913JetXkQkP19JGFEZcMbipjqD00Z4f3zj8N");


const server = express();

//Middlewares
server.use(cors({origin: true}));
server.use(express.json());

//API routes
server.get('/', (req, res) => res.status(200).send('it is a shopping-app'));
server.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('received payment and total: ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //smallest currency unit, a zero-decimal currency.
        currency:'aud',
    });

    res.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })

});

//server listen command
exports.api = functions.https.onRequest(server);

//http://localhost:5001/shopping-react-app-deecf/us-central1/api