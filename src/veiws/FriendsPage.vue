<template>
  <div>Friends page</div>
  <input
    class="rounded-lg border-2 border-black"
    placeholder="enter email address"
    v-model="emailaddress"
  />
  <button class="rounded-lg bg-sky-500 w-24 ml-3" @click="Submit">
    Submit
  </button>
  <div>{{ error }}</div>
</template>

<script>
import { mapGetters } from "vuex";
import { verifyEmail } from "@/timetable.js";
export default {
  data() {
    return {
      emailaddress: null,
      error: null,
    };
  },
  computed: {
    ...mapGetters(["getUserData"]),
  },
  methods: {
    async Submit() {
      verifyEmail(this.emailaddress).then((response) => console.log(response));
    },
  },
};
</script>
