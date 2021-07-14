import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueToasted from 'vue-toasted'

VueToasted.use(VueToasted,{
    iconPack: 'fontawesome'
});

createApp(App).use(router).mount('#app')