import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Welcome from "../components/Welcome.vue";
import Search from "../components/function/Search.vue";
import Create from "../components/function/Create.vue";
import Document from "../components/function/Document.vue";
import ChainlinkOp from "../components/function/ChainlinkOp.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" }, //如果访问/，则重定义到/login
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
    redirect: "/welcome",
    children: [
      { path: "/welcome", component: Welcome },
      { path: "/search", component: Search },
      { path: "/create", component: Create },
      { path: "/document", component: Document },
      { path: "/chainlinkop", component: ChainlinkOp },
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
