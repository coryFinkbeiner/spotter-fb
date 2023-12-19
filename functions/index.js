// const clientId = functions.config().spotify.clientid;
// const clientSecret = functions.config().spotify.clientsecret;
// const redirectUri = functions.config().spotify.redirecturi;

const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  redirectUri: "http://localhost:5173",
  clientId: "3037946b4a254a64886fff31551a05cf",
  clientSecret: "c554932f43e34836a364f73aa45d97af",
});

// const functions = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");

const cors = require('cors')({ origin: true });

exports.testBody = onRequest((req, res) => {
  res.json( req )
});

exports.helloWorld = onRequest((req, res) => {
  res.json({ message: "Hello, World!" });
});

exports.refreshToken = onRequest(async (req, res) => {
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

exports.login = onRequest(async (req, res) => {
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


