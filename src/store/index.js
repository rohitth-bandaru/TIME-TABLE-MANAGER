import { createStore } from "vuex";
import VuexPersist from "vuex-persist";
const initialState = {
  user: {},
  friends: {},
  schedule: {},
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
    UPDATE_USER_DETAILS(state, payload) {
      state.user = payload;
    },
    UPDATE_FRIENDS_DETAILS(state, payload) {
      state.friends = payload;
    },
    UPDATE_STATE(state, payload) {
      state = payload;
      console.log(state);
    },
  },
  actions: {
    updateUser(context, payload) {
      context.commit("UPDATE_USER_DETAILS", payload);
    },

    clearUser(context) {
      context.commit("UPDATE_USER_DETAILS", {});
    },

    updateFriends(context, payload) {
      context.commit("UPDATE_FRIENDS_DETAILS", payload);
    },
    updateState(context, payload) {
      context.commit("UPDATE_STATE", payload);
    },
  },
  getters: {
    getData: (state) => {
      return JSON.stringify(state.friends);
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
