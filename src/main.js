import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = null;

// wait for firebaes auth to init before creating the app
firebase.auth().onAuthStateChanged(() => {
  // init app if not alreaady created
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});
