import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyAJ4xetUTl90ivhmocoejk3qjIg_xDI6WY",
  authDomain: "carpeta-ciudadana-118a2.firebaseapp.com",
  projectId: "carpeta-ciudadana-118a2",
  storageBucket: "carpeta-ciudadana-118a2.appspot.com",
  messagingSenderId: "580576688995",
  appId: "1:580576688995:web:c17a16892be55fb1c63156",
  measurementId: "G-BSYW5GY9W3",
};
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);
export default storage;
