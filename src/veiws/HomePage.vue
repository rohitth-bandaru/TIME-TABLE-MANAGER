<template>
  <div>{{ getUserData }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {},
  computed: {
    ...mapGetters(["getUserData"]),
  },
  methods: {
    verifyUser() {
      console.log(this.getUserData.uid);
      if (this.getUserData.uid === undefined) {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    this.verifyUser();
  },
};
</script>
