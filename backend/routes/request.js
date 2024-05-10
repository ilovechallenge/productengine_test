const express = require('express');
const router = express.Router();

const env = require('dotenv');
env.config();

const { OAuth2Client } = require('google-auth-library');

const UserInfoController = require("../HttpControllers/UserInfoController");

router.post('/', async function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Referrer-Policy', 'no-referrer-when-downgrade');
    
    const redirectUrl = 'httP://127.0.0.1:9000/oauth';

    const oAuth2Client = new OAuth2Client(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        redirectUrl
    )

    const authorizeUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: 'https://www.googleapis.com/auth/userinfo.profile openid',
        prompt: 'consent'
    })

    res.json({url: authorizeUrl})
})

router.get("/get-users", isAuth, UserInfoController.getUsers);

module.exports = router;
