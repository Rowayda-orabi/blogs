import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import singlePlog from "../views/singlePlog.vue";
//import bootstrap from "../views/bootstrap.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/blog/:id",
        name: "singlePlog",
        component: singlePlog
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
