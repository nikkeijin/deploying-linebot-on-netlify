'use strict'

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import line from '@line/bot-sdk';
import serverless from 'serverless-http';

/* ########## 

Messaging API Settings.

########## */
const config = {
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
};

/* ########## 

Setting the Router.

########## */
const router = express.Router();

/* ########## 

Setting GET & POST.

########## */
router.get('/webhook', (req, res) => res.send('Hi there!'));

router.post('/webhook', line.middleware(config), (req, res) => {
    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
});

/* ########## 

Setting the Message Handler.
In this example the received message will be sent back to the user.

########## */
const client = new line.Client(config);
function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
      return Promise.resolve(null);
    }
    return client.replyMessage(event.replyToken,{
      type: 'text',
      text: event.message.text
    });
}

/* ########## 

Setting the Serverless Router for Netlify.

########## */
app.use('/.netlify/functions/server', router);
module.exports = app; //追加
module.exports.handler = serverless(app);
