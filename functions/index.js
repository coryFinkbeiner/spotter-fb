// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const functions = require("firebase-functions");

// Test function
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.json({ message: "Hello, World!" });
});
