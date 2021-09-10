//import { createWebHistory, createRouter } from "vue-router";
import VueRouter from 'vue-router';

const routes = [
    {
        name:"home",
        path: '/',
        alias: "/note",
        component: () => import('./components/notes/NoteIndex.vue')
    },
    // { name:"note", path: '/note', component: () => import('./components/notes/NoteIndex.vue') },
    {
        name:"note-view",
        path: '/note-view/:id',
        component: () => import('./components/notes/NoteView.vue')
    },
    {
        name:"note-add",
        path: '/note-add',
        component: () => import('./components/notes/NoteAdd.vue')
    },
    {
        name:"note-update",
        path: '/note-update/:id',
        component: () => import('./components/notes/NoteUpdate.vue')
    },
    {
        name:"note-delete",
        path: '/note-delete/:id',
        component: () => import('./components/notes/NoteDelete.vue')
    },
  ]

  const router = new VueRouter({
    //history: createWebHistory(),
    mode: 'history',
    routes,
  });

export default router;