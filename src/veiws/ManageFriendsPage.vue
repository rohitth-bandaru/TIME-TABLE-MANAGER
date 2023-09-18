<template>
  <div class="m-4">
    <div>Friends page</div>
    <div>
      <input
        class="rounded-lg border-2 border-black"
        placeholder="enter email address HS"
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
    <div v-for="request in requestsData" :key="request._id">
      <Friends
        :user="request.user"
        v-if="request.status === `friends`"
        @remove="remove"
      ></Friends>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Friends from "@/components/FriendsCard.vue";
import { getAllData } from "@/timetable";
export default {
  data() {
    return {
      requestsData: [],
    };
  },
  computed: {
    ...mapGetters(["getUserData"]),
  },
  methods: {
    async Submit() {},
  },
  components: {
    Friends,
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
