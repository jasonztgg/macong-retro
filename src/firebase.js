import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDcGodUby3zHXIY8sRfhyjOjtiAkE4TnOo',
  authDomain: 'ztgg-retro-board.firebaseapp.com',
  databaseURL: 'https://ztgg-retro-board.firebaseio.com',
  projectId: 'ztgg-retro-board',
  storageBucket: 'ztgg-retro-board.appspot.com',
  messagingSenderId: '1031474063216',
  appId: '1:1031474063216:web:fc071d79acc821978891b5',
  measurementId: 'G-R743CWPJZ0',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
