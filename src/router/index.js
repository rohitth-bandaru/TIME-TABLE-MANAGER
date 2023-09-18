import { createWebHistory, createRouter } from "vue-router";
import loginPage from "@/veiws/loginPage.vue";
import HomePage from "@/veiws/HomePage.vue";
import AddEvent from "@/veiws/addEvent.vue";
import FriendsPage from "@/veiws/FriendsPage.vue";
import ManageFriends from "@/veiws/ManageFriendsPage.vue";
import scheduleMeet from "@/veiws/addEvent.vue";
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
    path: "/addEvent",
    name: "AddEvent",
    component: AddEvent,
  },
  {
    path: "/friendRequests",
    name: "friendspage",
    component: FriendsPage,
  },
  {
    path: "/manageFriends",
    name: "managefriendspage",
    component: ManageFriends,
  },
  {
    path: "/scheduleMeet",
    name: "scheduleMeet",
    component: scheduleMeet,
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
