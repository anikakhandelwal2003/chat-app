// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

console.log(process.env.API_KEY);
console.log(process.env.AUTH_DOMAIN);
console.log(process.env.PROJECT_ID);
console.log(process.env.STORAGE_BUCKET);
console.log(process.env.MESSAGING_SENDER_ID);
console.log(process.env.APP_ID);


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWxMJu1Q8AlAwFprov1aYZetPAMRd3Zxg",
  authDomain: "chat-app-anika-21d62.firebaseapp.com",
  projectId: "chat-app-anika-21d62",
  storageBucket: "chat-app-anika-21d62.appspot.com",
  messagingSenderId: "596674179813",
  appId: "1:596674179813:web:692606f068e6913e4dda0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.RECAPTCHA),
//   isTokenAutoRefreshEnabled: true,
// });

export { auth, db };