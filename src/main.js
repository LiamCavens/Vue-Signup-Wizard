import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import vSelect from "vue-select";
import VCalendar from "v-calendar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "vue-select/dist/vue-select.css";

library.add(fas);
library.add(far);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("v-select", vSelect);

Vue.config.productionTip = false;

Vue.use(VCalendar);

Vue.use(VueRouter);

const routes = [
    { path: "/", component: require("./components/UserEmail.vue").default },
    { path: "/name", component: require("./components/PetName.vue").default },
];
const router = new VueRouter({ routes });

new Vue({
    render: (h) => h(App),
    data: {},
    router,
}).$mount("#app");
