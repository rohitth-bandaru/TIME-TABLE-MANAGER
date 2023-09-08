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
  methods: {},
};
</script>
