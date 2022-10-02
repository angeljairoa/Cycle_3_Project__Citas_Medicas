import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import VHome from "./components/VHome";
import AssignD from "./components/AssignD";

const routes = [
    {
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/login',
        name: 'login',
        component: LogIn
    },
    {
        path: '/user/signUp',
        name: 'signUp',
        component: SignUp
    },
    {
        path: '/user/home',
        name: 'home',
        component: VHome
    },
    {
        path: '/user/assign',
        name: 'assign',
        component: AssignD
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;