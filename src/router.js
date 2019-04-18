import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import Overview from "./views/Overview.vue";
import Products from "./views/Products.vue";
import Content from "./sections/Content.vue";
import About from "./components/about.vue";
import Orders from "./views/Orders.vue";
import {fb} from './firebase'

Vue.use(Router);

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
        children:[
            {
                path: "Content",
                name: "Content",
                component: Content

            },
            {
                path: "/",
                name: "content",
                component: Content

            },
            {
                path: "about",
                name: "about",
                component: About

            },

        ]
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: { requiresAuth: true },
      children:[
        {
          path: "overview",
          name: "overview",
          component: Overview
        },
        {
          path: "products",
          name: "products",
          component: Products
        },
        {
          path: "orders",
          name: "orders",
          component: Orders
        }
      ]
    },
    // {
    //   path: "about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/carousel.vue")
    // }
  ]
});

router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router;