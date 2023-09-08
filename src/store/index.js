import { createStore } from "vuex";
const initialState = {
  user: {},
};

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
});
