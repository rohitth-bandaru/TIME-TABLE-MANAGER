<template>
  <div class="m-4">
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

      <div v-show="emailVerified">
        <span>{{ VerificationMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  sendRequest,
  verifyEmail,
  getAllData,
  acceptUser,
  rejectUser,
} from "@/timetable.js";

export default {
  data() {
    return {
      emailaddress: null,
      error: null,
      VerificationMessage: "initial",
      emailVerified: false,
      requestsData: [],
    };
  },
  computed: {
    ...mapGetters(["getUserData"]),
  },
  methods: {
    async Submit() {
      this.emailaddress = this.emailaddress.toLowerCase();
      verifyEmail(this.emailaddress).then((response) => {
        if (response) {
          const requestObj = {
            sender: this.getUserData.email,
            receiver: this.emailaddress,
          };
          this.emailVerified = true;
          this.VerificationMessage =
            "request succesfully sent to " + this.emailaddress;
          sendRequest(requestObj);
        } else {
          this.emailVerified = true;
          this.VerificationMessage = "this email is not verified";
        }
      });
    },
    accept(payload) {
      acceptUser({
        sender: payload,
        receiver: this.getUserData.email,
      });
    },
    reject(payload) {
      rejectUser({
        sender: payload,
        receiver: this.getUserData.email,
      });
    },
  },
  mounted() {
    getAllData(this.getUserData.uid).then((response) => {
      this.$store.dispatch("updateFriends", response.friendsinfo);
      this.requestsData = response.friendsinfo.friends;
      console.log(response);
    });
  },
};
</script>
