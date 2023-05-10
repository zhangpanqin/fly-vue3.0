import { createApp } from "vue";
import {
  createWebHistory,
  //   createWebHashHistory,
  createRouter,
} from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./view/Home.vue";
import Child from "./view/Child.vue";
import City from "./view/City.vue";

const app = createApp(App);

const routes = [
  { path: "/", component: Home },
  {
    path: "/city",
    component: City,
    children: [
      {
        path: "child",
        component: Child,
      },
    ],
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory("/mflyyou"),
  routes, // `routes: routes` 的缩写
});

//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router);

app.mount("#app");
