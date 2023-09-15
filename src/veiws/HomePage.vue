<template>
  <br />
  <button @click="logout">logout</button>
  <div
    class="container max-w-full max-h-full grid grid-cols-2 justify-items-center"
  >
    <CardComponent
      label="Schedule meet"
      @selected="onSelectingScheduleMeet"
    ></CardComponent>
    <CardComponent label="My schedule"></CardComponent>
    <CardComponent
      label="Friend requests"
      @selected="onSelectingFriendsRequests"
    ></CardComponent>
    <CardComponent label="Manage Friends"></CardComponent>
  </div>
  <div>{{ getUserData }}</div>
</template>

<script>
import { mapGetters } from "vuex";
import CardComponent from "@/components/cardComponent.vue";

export default {
  data() {},
  computed: {
    ...mapGetters(["getUserData"]),
  },
  methods: {
    async logout() {
      localStorage.clear();
      this.$store.dispatch("clearUser");
      this.$router.push({ name: "loginpage" });
    },
    verifyUser() {
      console.log(this.getUserData.uid);
      if (this.getUserData.uid === undefined) {
        this.$router.push("/");
      }
    },
    onSelectingScheduleMeet() {
      console.log("selected schedule meet");
    },
    onSelectingFriendsRequests() {
      this.$router.push({ name: "friendspage" });
    },
  },
  mounted() {
    this.verifyUser();
  },
  components: {
    CardComponent,
  },
};
</script>
