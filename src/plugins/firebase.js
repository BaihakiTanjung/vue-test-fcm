// Initialize Firebase
import firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyBxU-yk8c6HDRcYDDz4vELGFCsZvTpmvVw",
  authDomain: "testing-laravel-fcm.firebaseapp.com",
  projectId: "testing-laravel-fcm",
  storageBucket: "testing-laravel-fcm.appspot.com",
  messagingSenderId: "255954161399",
  appId: "1:255954161399:web:f32de7268222b787338df2",
  measurementId: "G-Z25Q9KVV6M",
});

navigator.serviceWorker
  .register("firebase-messaging-sw.js")
  .then((registration) => {
    const messaging = firebase.messaging();
    messaging.useServiceworker(registration);
  })
  .catch((err) => {
    console.log(err);
  });
// fiebase configs end
