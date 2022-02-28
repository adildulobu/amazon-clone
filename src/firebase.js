import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7PhEUJqM-2uG-XJYYlA7aUB821gScHQA",
  authDomain: "clone-97a81.firebaseapp.com",
  projectId: "clone-97a81",
  storageBucket: "clone-97a81.appspot.com",
  messagingSenderId: "122712607198",
  appId: "1:122712607198:web:e012285a2f62dcf79f754f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}