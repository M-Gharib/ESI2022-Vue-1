import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Plants from "../views/Plants.vue";
import AllPlants from "../views/AllPlants.vue";
import APlant from "../views/APlant.vue";
import AddPlant from "../views/AddPlant.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/plants",
        name: "Plants",
        component: Plants,
    },
    {
        path: "/allplants",
        name: "AllPlants",
        component: AllPlants,
    },
    {
        path: "/aplant/:id",
        name: "APlant",
        component: APlant,
    },
    {
        path: "/addplant",
        name: "AddPlant",
        component: AddPlant,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;