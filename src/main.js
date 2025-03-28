import { createApp } from 'vue';
import './main.css'; // Import the main.css file
import App from './App.vue';
import router from './router/index.js'; // Import the router from the correct path
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'

const app = createApp(App)

app.use(router);
app.use(Toast, {
  timeout: 3000,
  hideProgressBar: true,
  closeOnClick: false
})
app.mount('#app');

