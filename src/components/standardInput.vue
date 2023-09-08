<template>
  <div>
    <input
      type="text"
      :placeholder="inputObject.placeHolder"
      v-model="emailInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputObject: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
