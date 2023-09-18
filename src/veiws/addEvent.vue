<template>
  <div class="container m-2">
    <input
      class="w-80 border rounded-md border-2 pl-3 pt-0.5 pb-0.5 mr-6 mb-2"
      placeholder="enter email id"
      v-model="userEmail"
    />
    <button
      @click="submitUser"
      class="bg-sky-500 pt-0.5 pb-0.5 pl-2 pr-2 rounded-full"
    >
      add user
    </button>
    <div v-for="user in attendees" :key="user" class="m-2">{{ user }}</div>
    <div class="w-64">
      <Datepicker
        lang="en"
        v-model="selectedDate"
        show-clear-button
      ></Datepicker>
    </div>
    <div>
      {{ attendees }}
    </div>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { getAllData } from "@/timetable.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedDate: new Date(),
      userEmail: null,
      attendees: [],
      meetDetails: {},
      totalData: {},
      letters: new Set(),
    };
  },
  computed: {
    ...mapGetters(["getUserData", "getData"]),
  },
  components: {
    Datepicker: VueDatePicker,
  },
  methods: {
    submitUser() {
      const friends = this.totalData.friendsinfo.friends;
      for (let friend of friends) {
        if (friend.user == this.userEmail && friend.status == "friends") {
          var before = this.letters.size;
          this.letters.add(friend.user);
          if (before != this.letters.size) {
            this.attendees.push(friend.user);
          }
        }
      }
    },
    fetchalldata() {
      getAllData(this.getUserData.uid).then((response) => {
        this.totalData = response;
      });
    },
  },
  mounted() {
    this.fetchalldata();
  },
};
</script>
