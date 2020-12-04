import firebase from 'firebase';
import {API_KEY, PROJECT_NAME} from '@env';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: `${PROJECT_NAME}.firebaseapp.com`,
  databaseURL: `https://${PROJECT_NAME}.firebaseio.com/`,
  storageBucket: `gs://${PROJECT_NAME}.appspot.com`,
  projectId: PROJECT_NAME,
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default Firebase;
