import Vue from "vue";
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
Vue.use(require("vue-moment"));

new Vue({
    render: (h) => h(App),
    data: {},
}).$mount("#app");
