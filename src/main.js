import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { createPinia } from 'pinia';
import login from './views/login.vue';
import greatsword from './views/greatsword.vue';
import hammer from './views/hammer.vue';
import bow from './views/bow.vue';
import chargeBlade from './views/chargeBlade.vue';
import dualblade from './views/dualblade.vue';
import gunlance from './views/gunlance.vue';
import heavybowgun from './views/heavybowgun.vue';
import lightbowgun from './views/lightbowgun.vue';
import lance from './views/lance.vue';
import longsword from './views/longsword.vue';
import switchaxe from './views/switchaxe.vue';
import swordandshield from './views/swordandshield.vue';



const routes = [
{ path: '/', component: login},
{ path: '/greatSword', component: greatsword },
{ path: '/hammer', component: hammer },
{ path: '/bow', component: bow},
{ path: '/chargeBlade', component: chargeBlade},
{ path: '/dualblade', component: dualblade},
{ path: '/gunlance', component: gunlance},
{ path: '/heavybowgun', component: heavybowgun},
{ path: '/lightbowgun', component: lightbowgun},
{ path: '/lance', component: lance},
{ path: '/longsword', component: longsword},
{ path: '/switchaxe', component: switchaxe},
{ path: '/swordandshield', component: swordandshield},


];
const router = createRouter({
history: createWebHistory(),
routes,
});
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');