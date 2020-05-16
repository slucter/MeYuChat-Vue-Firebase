import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Chat from '../views/Chat.vue';
import Add from '../views/Add.vue';
import Todos from '../views/Todos.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);
// eslint-disable-next-line no-console
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  console.log(firebase.auth().currentUser);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser) {
      next({
        path: '/home',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
