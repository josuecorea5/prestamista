import Vue from "vue";
import Router from "vue-router";
import Main from "@/views/Main";
import edit from "@/views/EditarRegistro"

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "Main",
            component: Main,
        },
        {
            path: "/:id",
            name: "EditarR",
            component: edit
        }
    ],
});