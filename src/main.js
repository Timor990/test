// src/main.js
import { createApp } from 'vue'; // 确保从 'vue' 导入 createApp
import App from './App.vue'; // 导入根组件
import ElementPlus from 'element-plus'; // 导入 Element Plus
import 'element-plus/dist/index.css'; // 导入 Element Plus 的样式
import router from './router/index.js'
const app = createApp(App); // 创建 Vue 应用实例

app.use(ElementPlus); // 使用 Element Plus 插件
app.use(router);
app.mount('#app'); // 挂载应用