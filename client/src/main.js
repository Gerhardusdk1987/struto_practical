import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentContainer from './components/ui/ContentContainer.vue';

const app = createApp(App);

app.use(router);

app.component('content-container', ContentContainer);

app.mount("#app");