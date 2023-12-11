// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const functions = require("firebase-functions");
const SpotifyWebApi = require('spotify-web-api-node');

// Test function
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.json({ message: "Hello, World!" });
});

exports.refreshToken = functions.https.onRequest(async (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken,
    });

    const data = await spotifyApi.refreshAccessToken();
    res.json({
      accessToken: data.body.accessToken,
      expiresIn: data.body.expiresIn,
    });
  } catch (error) {
    console.error('Error refreshing token:', error);
    res.sendStatus(400);
  }
});

exports.login = functions.https.onRequest(async (req, res) => {
  try {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });

    const data = await spotifyApi.authorizationCodeGrant(code);
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.sendStatus(400);
  }
});