import Login from '../pages/login'
import Main from '../pages/main'
import React from "react";

export type Route = {
    name: string;
    key: string;
    path: string;
    component: React.ReactNode;
    children?: Route[];
}


const routes: Route[] = [
    {
        name: 'login',
        key: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'main',
        key: 'main',
        path: '/main',
        component: Main
    },

]

export default routes
