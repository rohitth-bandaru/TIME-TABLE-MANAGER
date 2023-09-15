import { createStore } from "vuex";
import VuexPersist from "vuex-persist";
const initialState = {
  user: {},
};

const vuexPersist = new VuexPersist({
  key: "user", // unique key for saving state properties in the browser storage
  storage: window.localStorage, // select the type of storage used (eg - localStorage, sessionStorage, etc)
  reducer: (state) => ({ ...state }), // select the state properties that you want persisted
});

export default createStore({
  state: {
    ...initialState,
  },
  mutations: {
    UPDATE_EMAIL_DATA(state, payload) {
      state.EmailData = payload;
    },
    UPDATE_USER_DETAILS(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    addEmailId(context, payload) {
      const data = context.state.EmailData;
      data.push(payload);
      console.log(data);
      context.commit("UPDATE_EMAIL_DATA", data);
    },
    updateUser(context, payload) {
      context.commit("UPDATE_USER_DETAILS", payload);
    },
    clearUser(context) {
      context.commit("UPDATE_USER_DETAILS", {});
      context.commit("UPDATE_EMAIL_DATA", null);
    },
  },
  getters: {
    getData: (state) => {
      return state.EmailData;
    },
    getVerified: (state, emailid) => {
      return state.EmailData.includes(emailid);
    },
    getUserData: (state) => {
      return state.user;
    },
  },
  plugins: [vuexPersist.plugin],
});
