import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Search from "../components/function/Search.vue";
import Create from "../components/function/Create.vue";
import ChainlinkOp from "../components/function/ChainlinkOp.vue";
import Register from "../components/Register.vue";
import Check from "../components/function/Check.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" }, //如果访问/，则重定义到/login
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/home",
    component: Home,
    redirect: "/search",
    children: [
      // { path: "/welcome", component: Welcome },
      { path: "/search", component: Search },
      { path: "/create", component: Create },
      { path: "/chainlinkop", component: ChainlinkOp },
      { path: "/check", component: Check },
    ],
  },
  {
    path: "/Test",
    name: "Test",
    component: () => import("../components/form/Test.vue"),
  },
  {
    path: "/test2",
    name: "test2",
    component: () => import("../components/form/test2.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

//router.deforeEach((to, from, next) => {
//如果访问/login，直接放行
//if (to.path === "/login") return next();
//获取token
//const tokenStr = window.sessionStorage.egtItem('token')
//if (!tokenStr) return next ('/login')
//next()
//});

export default router;
