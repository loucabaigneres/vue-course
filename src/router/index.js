import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharactersView from "../views/CharactersView.vue";
import CounterView from "../views/CounterView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/characters",
            name: "characters",
            component: CharactersView,
        },
        {
            path: "/counter",
            name: "counter",
            component: CounterView,
        },
    ],
});

export default router;
