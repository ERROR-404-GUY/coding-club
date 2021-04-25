import firebase from "@firebase/app"
import "@firebase/auth"
import "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD_gr3Zi6xRz3d33k9T5wl9MepVk8v1tqo",
  authDomain: "weibeau-code.firebaseapp.com",
  databaseURL: "https://weibeau-code.firebaseio.com",
  projectId: "weibeau-code",
  storageBucket: "weibeau-code.appspot.com",
  messagingSenderId: "807239741748",
  appId: "1:807239741748:web:affa4baf9eb27d8319b561",
  measurementId: "G-9MTYSKCVGJ"
};
firebase.default.initializeApp(firebaseConfig);
export const db = firebase.firestore();
