const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LNf2AInLwluiTeLxtT6wrNhgdpOg7nSrIUwA7rPhUiyFVXVQ4f1GMuuDvyvnSqzFW3MQuxVH7KH5TMY3PkPweEt00yiYjHyM4');

// API 

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request received', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-53496/us-central1/api
// to start the API server, type firebase emulators:start in the cmd