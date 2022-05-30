import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-o_rtbPmH_6z6qK77Er48mNxS92A3G2k",
  authDomain: "shopping-react-app-deecf.firebaseapp.com",
  databaseURL: "https://shopping-react-app-deecf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shopping-react-app-deecf",
  storageBucket: "shopping-react-app-deecf.appspot.com",
  messagingSenderId: "59008935241",
  appId: "1:59008935241:web:12c8e671043308f1062698"
};


  const app = firebase.initializeApp(firebaseConfig);

  export const db = app.firestore();
  export const auth = firebase.auth();
