import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Meta from 'vue-meta';

import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

Vue.prototype.$http = axios;
Vue.use(Meta);

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
