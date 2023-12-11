const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Import your Express app
const app = require('./api');

// Define Cloud Functions
exports.api = functions.https.onRequest(app);