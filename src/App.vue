<template>
  <div id="app">
    <h1>Vue FCM</h1>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/messaging";
import { useToast } from "vue-toastification";
export default {
  name: "App",
  setup() {
    // Get toast interface
    const toast = useToast();
    return {
      toast,
    };
  },
  created() {
    try {
      firebase
        .messaging()
        .requestPermission()
        .then(() => {
          console.log("Notification permission granted");
          firebase
            .messaging()
            .getToken()
            .then((token) => {
              window.console.log("token ", token);
              this.receiveMessage();
            });
        })
        .catch((err) => {
          console.log("Unable to get token ", err);
        });
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    receiveMessage() {
      try {
        firebase.messaging().onMessage((payload) => {
          console.log("payload ", payload);
          this.toast.info(payload.data.title, payload.data.body);
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>