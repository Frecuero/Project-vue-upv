import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../domus/Domus.vue";
import Batman from "../batman/Batman.vue";
import Primus from "../simpsons/Primus.vue";
import Responsum from "../responsum/Responsum.vue";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Domus
        },
        {
            path: "/batman",
            name: "batman",
            component: Batman
        },
        {
            path: "/simpsons",
            name: "simpsons",
            component: Primus
        },
        {
            path: "/indecision",
            name: "indecision",
            component: Responsum
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ]
})