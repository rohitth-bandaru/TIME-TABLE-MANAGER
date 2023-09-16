<template>
  <div class="bg-slate-300 p-1 rounded-xl m-1 w-fit">
    <div class="inline container p-2">
      {{ user }}
    </div>
    <button
      class="container w-32 m-1 p-1 rounded-lg bg-green-600"
      @click="accepted"
    >
      accept
    </button>
    <button
      class="container w-32 m-1 p-1 rounded-lg bg-red-600"
      @click="rejected"
    >
      reject
    </button>
  </div>
</template>

<script>
export default {
  props: {
    user: String,
  },
  methods: {
    accepted() {
      this.$emit("accept", this.user);
    },
    rejected() {
      this.$emit("reject", this.user);
    },
  },
};
</script>
