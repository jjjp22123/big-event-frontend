// import './assets/main.scss'

// import { createApp } from 'vue'
// import App from './App.vue'

// //1.npm install element-plus --save
// //导入element-plus以及样式并且使用
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// //导入路由
// import router from './router'

// //导入pinia 为了不同的.vue能够使用token
// import {createPinia} from 'pinia'

// //pinia持久化persist
// import {createPersistedState} from 'pinia-persistedstate-plugin'

// import locale from 'element-plus/dist/locale/zh-cn.js'

// //使用
// const app = createApp(App);
// const pinia = createPinia();
// const persist = createPersistedState();
// app.use(persist);
// app.use(pinia);
// app.use(router);
// app.use(ElementPlus,{locale});
// app.mount('#app')



// // createApp(App).mount('#app')

// //2.npm install axios
// //3.npm install sass -D
// //4.删除components的内容 新建api utils views
// //5.粘贴request.js到utils
// //6.删除assets 然后粘贴准备好的资源
// //7.删除App.vue中的内容 改main.scss

import './assets/main.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import App from './App.vue'
import {createPinia} from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'
import locale from 'element-plus/dist/locale/zh-cn.js'

const app = createApp(App);
const pinia = createPinia();
const persist = createPersistedState();
pinia.use(persist)
app.use(pinia)
app.use(router)
app.use(ElementPlus,{locale});
app.mount('#app')
