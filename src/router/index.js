import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Home Page',
      },
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta:{
        title:'About'
      }
    },

    

    {
      path: '/helps',
      name: 'helps',
      component: () => import('@/views/HelpsView.vue'),
      meta:{
        title:'Helps'
      }
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Contact Page',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: {
        title: 'Login Page',
      },
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
      meta:{
        title:'Register'
      }
    },
  ],
})


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;  next();
})

export default router