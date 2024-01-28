import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router';
import { createPinia } from 'pinia';

const _pinia = createPinia();

createApp(App)
  .use(_pinia)
  .use(router)
  .mount('#app')

