<template>
  <div>Friends page</div>
  <div>
    <input
      class="rounded-lg border-2 border-black"
      placeholder="enter email address"
      v-model="emailaddress"
    />
    <button class="rounded-lg bg-sky-500 w-24 ml-3" @click="Submit">
      Submit
    </button>
    <div>{{ error }}</div>
    <div :disabled="emailVerified">
      <span>{{ VerificationMessage }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { verifyEmail } from "@/timetable.js";
import FRComponent from "@/components/FriendRequestComponent.vue";
export default {
  data() {
    return {
      emailaddress: null,
      error: null,
      VerificationMessage: "initial",
      emailVerified: true,
    };
  },
  computed: {
    ...mapGetters(["getUserData"]),
  },
  methods: {},
  components: {
    FRComponent,
  },
};
</script>
