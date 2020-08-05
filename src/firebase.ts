// src/firebase.ts

import * as firebase from 'firebase/app'

import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCVfEMJkqmUrLpirydDfOBHAfwGL1Dhk80',
  authDomain: 'book-library-90f81.firebaseapp.com',
  databaseURL: 'https://book-library-90f81.firebaseio.com',
  projectId: 'book-library-90f81',
  storageBucket: 'book-library-90f81.appspot.com',
  messagingSenderId: '433213035803',
  appId: '1:433213035803:web:e73976b1fecb68c91aefbe',
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp
