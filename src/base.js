import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4Nh0FglZgI9HMUxE8J1AJodiEyEOWI24",
  authDomain: "cotd-guus.firebaseapp.com",
  databaseURL:
    "https://cotd-guus-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base