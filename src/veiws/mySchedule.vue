<template>
  <div>{{ getShedules }}</div>
</template>

<script>
import { getAllData } from "@/timetable";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getShedules", "getUserData"]),
  },
  mounted() {
    getAllData(this.getUserData.uid).then((response) => {
      this.$store.dispatch("updateState", response);
    });
  },
};
</script>

<style></style>
