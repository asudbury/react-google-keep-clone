import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCYWJrG6ih_b0zzE0L6940kO9dfghEJ76g",
  authDomain: "keep-react-clone.firebaseapp.com",
  databaseURL: "https://keep-react-clone.firebaseio.com",
  projectId: "keep-react-clone",
  storageBucket: "keep-react-clone.appspot.com",
  messagingSenderId: "452663224093",
  appId: "1:452663224093:web:6749405ca90b663600e3f4",
  measurementId: "G-LTV569ZHL9",
};

const firebaseConfigDev = {
  apiKey: "AIzaSyAivr386s_ik8BEhgjOYjPiXdk8DLa8w-U",
  authDomain: "react--keep-clone-5a6f6.firebaseapp.com",
  projectId: "react--keep-clone-5a6f6",
  storageBucket: "react--keep-clone-5a6f6.appspot.com",
  messagingSenderId: "613848069472",
  appId: "1:613848069472:web:5043befd5c7ec888409a05",
  measurementId: "G-3PC6FX1W77",
};

firebase.initializeApp(firebaseConfigDev);
firebase.analytics();
export default firebase;
