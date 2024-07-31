import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 注册全局指令
import lazyLoadDirective from './lazyLoad.directive.js';
const app = createApp(App);

app.directive('lazyLoad',lazyLoadDirective)

app.mount('#app')
