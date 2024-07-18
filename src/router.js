import { createWebHistory, createRouter } from 'vue-router'
import AppHome from './components/views/AppHome.vue';
// projects
import AppProjects from './components/views/AppProjects.vue';
import SingleProject from './components/views/SingleProject.vue';
// end projects
import AppAbout from './components/views/AppAbout.vue';
import AppContacts from './components/views/AppContacts.vue';
import NotFound from './components/views/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        // projects
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/projects/:id',
            name: 'SingleProject',
            component: SingleProject
        },
        // end projects
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },

    ]
})

export default router;