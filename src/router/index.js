import { createWebHistory, createRouter } from "vue-router";
import loginPage from "@/veiws/loginPage.vue";
import SignUpPage from "@/veiws/SignUpPage.vue";
import HomePage from "@/veiws/HomePage.vue";
import AddEvent from "@/veiws/addEvent.vue";

const routes = [
  {
    path: "/",
    name: "redirectpage",
    component: loginPage,
  },
  {
    path: "/home",
    name: "homepage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "loginpage",
    component: loginPage,
  },
  {
    path: "/signup",
    name: "signuppage",
    component: SignUpPage,
  },
  {
    path: "/addEvent",
    name: "AddEvent",
    component: AddEvent,
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
