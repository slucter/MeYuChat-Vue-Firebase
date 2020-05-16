import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

const firebaseConfig = {
  apiKey: 'AIzaSyB1JZzLW8y2RZI_8quY3UZqqjV9UbgtaXE',
  authDomain: 'meyu-chat.firebaseapp.com',
  databaseURL: 'https://meyu-chat.firebaseio.com',
  projectId: 'meyu-chat',
  storageBucket: 'meyu-chat.appspot.com',
  messagingSenderId: '278703350604',
  appId: '1:278703350604:web:fe4d22004a1b754ddc25e9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const myfirebase = firebase;
Vue.prototype.$mf = myfirebase;
Vue.prototype.$db = db;
Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
