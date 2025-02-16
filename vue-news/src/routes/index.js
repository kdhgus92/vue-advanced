import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
// import createListView from "../views/CreateListView";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", // url 주소에 # 제거
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
      // comonent: createListView("NewsView"),
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      // comonent: createListView("NewsView"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      // comonent: createListView("NewsView"),
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
