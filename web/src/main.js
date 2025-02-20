import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App.vue'
import router from './router'
import './frontend/assets/base.css'
import AdminLayout from "./admin/layout/AdminLayout.vue";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
