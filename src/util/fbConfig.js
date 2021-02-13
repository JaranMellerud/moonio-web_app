import firebase from "firebase/app";
import "firebase/auth";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyB7vxwY2yUtytggL9AkeA7ODqbMZym9sLQ",
  authDomain: "cryptocurrency-tracker-moonio.firebaseapp.com",
  databaseURL: "https://cryptocurrency-tracker-moonio.firebaseio.com",
  projectId: "cryptocurrency-tracker-moonio",
  storageBucket: "cryptocurrency-tracker-moonio.appspot.com",
  messagingSenderId: "42582541829",
  appId: "1:42582541829:web:8fb0f19b2ff371ef873e6c",
});
