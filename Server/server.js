const express = require('express');
const { sendPushNotification } = require('./pushNotification');
const app = express();

app.get('/data', function (req, res) {
    // 'https://notifications-react-native.vercel.app/:token/:title/:body'
// code to be executed when the URL is called
// const { token, title, body } = req.params;
// sendPushNotification(token, title, body);
console.log("called")
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});