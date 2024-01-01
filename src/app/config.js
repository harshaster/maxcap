import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCWmwCjJa0zUgD3wCBBuegRhAr4AjAZu8M",
  authDomain: "maxcap-7d334.firebaseapp.com",
  projectId: "maxcap-7d334",
  storageBucket: "maxcap-7d334.appspot.com",
  messagingSenderId: "611851874711",
  appId: "1:611851874711:web:01299e33231c5b578594d2"
};

const app = initializeApp(firebaseConfig);

export {app}