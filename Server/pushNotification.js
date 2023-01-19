const admin = require('firebase-admin');

const sendPushNotification = (token, title, body) => {
    // Initialize the Firebase app
    admin.initializeApp({
        credential: admin.credential.cert(require('./pushnotify-cbd7c-firebase-adminsdk-5kztc-69bee60c14.json')),
        databaseURL: "https://pushnotify-cbd7c-default-rtdb.firebaseio.com/"
    });

    // Create the message
    const message = {
        notification: {
            title: title,
            body: body,
            // sound: 'default'
        },
        token: token
    };

    // Send the message
    admin.messaging().send(message)
        .then((response) => {
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
};

sendPushNotification(
    'cV8gL8zLRzqGLY8uPcvERK:APA91bGOMmEW3mAbmYUDDd429lsmjAop41s6_U4lAX3nRafu9cUR_M9d6-4dWt58r_WVN_kq8Wva4UMQvwFOqGWR2PPRPqFx0dpC6uft497uwTDc6vWKwO-87ni0j3QIJ_9MLTOAMiv3', 
    'Push Notification', 'Notification from RNNServer');
