const express = require('express');
const Stripe =require('stripe');
const PUBLISHABLE_KEY = process.env.stripPublicKey;

const SECRET_KEY = process.env.stripSecretKey;
const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

const route = express.Router();

route.post("/create-payment-intent", async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1099, //lowest denomination of particular currency
            currency: "inr",
            payment_method_types: ["card"], //by default
        });

        const clientSecret = paymentIntent.client_secret;

        res.json({
            clientSecret: clientSecret,
        });
    } catch (e) {
        console.log(e.message);
        res.json({ error: e.message });
    }
});

module.exports = route;