import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { createPinia } from 'pinia';
import login from './views/login.vue';
import greatsword from './views/greatsword.vue';
import hammer from './views/hammer.vue';
import bow from './views/bow.vue';
const routes = [
{ path: '/', component: login},
{ path: '/greatSword', component: greatsword },
{ path: '/hammer', component: hammer },
{ path: '/bow', component: bow}
];
const router = createRouter({
history: createWebHistory(),
routes,
});
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');