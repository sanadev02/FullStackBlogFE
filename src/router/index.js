import { createRouter, createWebHistory } from 'vue-router';

import Home from "../views/pages/Home.vue"
import Login from "../views/pages/Login.vue"
import Article from "../views/pages/Article.vue"
import Comment from "../views/pages/Article.vue"
import Dashboard from "../views/pages/Dashboard.vue"
import NotFound from "../views/Components/NotFound.vue"

const routes = [
     { path: "/", component: Home},
     { path: "/login", component: Login },
     { path: "/article/:id", comments: Article },
     { path: "/comments/:id", component: Comment },
     { path: "/dashboard", component: Dashboard, beforeEnter: ifAuthenticated },
     { path: "/:pathMatch(.*)*", component: NotFound }
]

const router = createRouter({ 
    history: createWebHistory(),
    routes,
})

export default router;