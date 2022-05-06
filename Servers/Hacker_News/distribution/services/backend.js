"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendApp = void 0;
const app_1 = require("firebase/app");
const backendConfig = {
    apiKey: 'AIzaSyCp1Ipoj-wJ_6ZcuoEDUUIzqZCKWdOgnDU',
    authDomain: 'hackernews-newsapp.firebaseapp.com',
    databaseURL: 'https://hacker-news.firebaseio.com/',
    projectId: 'hackernews-newsapp',
    storageBucket: 'hackernews-newsapp.appspot.com',
    messagingSenderId: '783365310622',
    appId: '1:783365310622:web:4fce62d5450290bdbd538f',
    measurementId: 'G-D834R0JYMC',
};
const backendApp = (0, app_1.initializeApp)(backendConfig);
exports.backendApp = backendApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZpY2VzL2JhY2tlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJFO0FBRTNFLE1BQU0sYUFBYSxHQUFvQjtJQUNyQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pELFVBQVUsRUFBRSxvQ0FBb0M7SUFDaEQsV0FBVyxFQUFFLHFDQUFxQztJQUNsRCxTQUFTLEVBQUUsb0JBQW9CO0lBQy9CLGFBQWEsRUFBRSxnQ0FBZ0M7SUFDL0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xELGFBQWEsRUFBRSxjQUFjO0NBQzlCLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBZ0IsSUFBQSxtQkFBYSxFQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXBELGdDQUFVIn0=