import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';

import store from './store';

import App from './App.vue';
import TimeEntryDashboard from './components/TimeEntryDashboard.vue';
import ResizeSandbox from './components/ResizeSandbox.vue';
import Calendar from './components/Calendar.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
    { path: '/calendar', component: Calendar },
    { path: '/resize', component: ResizeSandbox },
    { path: '/', component: TimeEntryDashboard},
];

const router = new VueRouter({
    routes
});

new Vue({
    router,
    store,
	render: h => h(App)
}).$mount('#app');
