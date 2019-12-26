import Vue from "vue";
// @ts-ignore
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";

Vue.config.productionTip = false;
// @ts-ignore
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY");
  }
});

// @ts-ignore
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
