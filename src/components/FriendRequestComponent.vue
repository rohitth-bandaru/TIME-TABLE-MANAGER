<template>
    <div>
        <div>
            {{ user }}
        </div>
        <button>
            accept
        </button>
        <button>
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
      handleClick() {
        this.$emit("selected");
      },
    },
  };
  </script>
  