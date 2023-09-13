<template>
  <div
    class="grid flex w-52 h-32 bg-gradient-to-r from-indigo-500 to-emerald-500 place-content-center m-4 rounded-lg shadow-2xl"
    @click="handleClick"
  >
    <div class="font-serif text-white text-2xl">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  },
  methods: {
    handleClick() {
      this.$emit("selected");
    },
  },
};
</script>
