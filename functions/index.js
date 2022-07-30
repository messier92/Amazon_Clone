const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51LNf2AInLwluiTeLxtT6wrNhgdpOg7nSrIUwA7rPhUiyFVXVQ4f1GMuuDvyvnSqzFW3MQuxVH7KH5TMY3PkPweEt00yiYjHyM4"
);

// API 
// App config
const app = express();
// Middleware
app.use(express.json());

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) // Use this after the variable declaration

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = parseInt(request.query.total);
  console.log("Payment Request Received >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-53496/us-central1/api
// to start the API server, type firebase emulators:start in the cmd