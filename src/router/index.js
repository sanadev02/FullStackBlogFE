import { createRouter, createWebHistory } from 'vue-router';

import Home from "../views/pages/Home.vue"
import Login from "../views/pages/Login.vue"
import Article from "../views/pages/Article.vue"
import Comment from "../views/pages/Article.vue"

const routes = [
     { path: "/", component: Home},
     { path: "/login", component: Login },
     { path: "/article/:id", comments: Article },
     { path: "/comments/:id", component: Comment }
]

const router = createRouter({ 
    history: createWebHistory(),
    routes,
})

export default router;