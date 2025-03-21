import { createApp } from 'vue';
import './main.css'; // Import the main.css file
import App from './App.vue';
import router from './router/index.js'; // Import the router from the correct path

const app = createApp(App);
app.use(router);
app.mount('#app');
