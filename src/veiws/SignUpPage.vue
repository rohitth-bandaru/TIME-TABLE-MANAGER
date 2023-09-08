<template>
  <div>
    <div>please enter</div>
    <input placeholder="enter email id" v-model="emailInput" />
    <br />
    <button @click="submitInput">Submit</button>
  </div>
</template>

<script>
import "../index.js";
export default {
  data() {
    return {
      inputObject: {
        placeHolder: "Please enter email id",
      },
      emailInput: "",
    };
  },
  components: {},
  methods: {
    submitInput() {
      const obj = {
        id: this.emailInput,
      };
      this.$store.dispatch("addEmailId", obj);
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
