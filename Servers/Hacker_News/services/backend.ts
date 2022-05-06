import { initializeApp, FirebaseApp, FirebaseOptions } from 'firebase/app';

const backendConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCp1Ipoj-wJ_6ZcuoEDUUIzqZCKWdOgnDU',
  authDomain: 'hackernews-newsapp.firebaseapp.com',
  databaseURL: 'https://hacker-news.firebaseio.com/',
  projectId: 'hackernews-newsapp',
  storageBucket: 'hackernews-newsapp.appspot.com',
  messagingSenderId: '783365310622',
  appId: '1:783365310622:web:4fce62d5450290bdbd538f',
  measurementId: 'G-D834R0JYMC',
};

const backendApp: FirebaseApp = initializeApp(backendConfig);

export { backendApp };
