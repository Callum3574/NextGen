// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBC73K58gUY0Muq2MAYuonS8M836Fxuikg",
  authDomain: "uploadingcv-25498.firebaseapp.com",
  projectId: "uploadingcv-25498",
  storageBucket: "uploadingcv-25498.appspot.com",
  messagingSenderId: "176608484245",
  appId: "1:176608484245:web:e10dd3fd37a77cb9b2f49c",
  measurementId: "G-P3LRQQMR7E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
