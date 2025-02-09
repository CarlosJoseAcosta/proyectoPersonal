import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import greatsword from './views/greatsword.vue';
import { createPinia } from 'pinia';
import hammer from './views/hammer.vue';
const routes = [
{ path: '/greatSword', component: greatsword },
{ path: '/hammer', component: hammer },
];
const router = createRouter({
history: createWebHistory(),
routes,
});
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');