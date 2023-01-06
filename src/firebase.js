import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCwtxs4ODLV0oZbLoODw9M4lmH22KZDZ9U",
  authDomain: "netflix-clone-30637.firebaseapp.com",
  projectId: "netflix-clone-30637",
  storageBucket: "netflix-clone-30637.appspot.com",
  messagingSenderId: "1012270302484",
  appId: "1:1012270302484:web:35c945d7eeab0ad974ee01"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export {auth} ;
export default db;