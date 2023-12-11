// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const functions = require("firebase-functions");
const SpotifyWebApi = require('spotify-web-api-node');

const clientId = functions.config().spotify.clientid;
const clientSecret = functions.config().spotify.clientsecret;
const redirectUri = functions.config().spotify.redirecturi;

const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId,
  clientSecret: clientSecret,
});

// Test function
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.json({ message: "Hello, World!" });
});

exports.refreshToken = functions.https.onRequest(async (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;
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
