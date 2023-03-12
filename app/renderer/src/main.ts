import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { registerMicroApps, start as qiankunStart } from "qiankun";
registerMicroApps([
  {
    name: "child-site", // app name registered//子应用的名字，最好和子应用的package.json的name保持一致，方便管理
    entry: "http://localhost:8081", //子应用的地址，这里要允许子应用跨域，不然会报跨域错误，后续会讲解
    container: "#yourContainer", //子系统要挂载到父页面的容器节点，类似iframe
    activeRule: "/child-site", //这里要注意的是qiankun没有自己的路由，如果你是react就要借助react-router,如果你是vue就要借助vue-router去实现匹配
  },
]);

qiankunStart();

createApp(App).use(store).use(router).mount("#app");
