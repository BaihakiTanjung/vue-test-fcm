/* eslint-disable no-undef */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

var config = {
  apiKey: "AIzaSyBxU-yk8c6HDRcYDDz4vELGFCsZvTpmvVw",
  authDomain: "testing-laravel-fcm.firebaseapp.com",
  projectId: "testing-laravel-fcm",
  storageBucket: "testing-laravel-fcm.appspot.com",
  messagingSenderId: "255954161399",
  appId: "1:255954161399:web:f32de7268222b787338df2",
  measurementId: "G-Z25Q9KVV6M",
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const title = "test fcm";
  const options = {
    body: payload.notification,
    icon: "https://file.sitama.co.id/storage/grosirmotor/thumbnail/grosirmotor.png",
  };
  return self.registration.showNotification(title, options);
});

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: "https://file.sitama.co.id/storage/grosirmotor/thumbnail/grosirmotor.png",
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
