<template class="border">
  <button @click="register" class="btn btn-primary">submit</button>
  <button @click="check">check</button>
  <div>{{ ERROR }}</div>
  <br />
</template>

<script>
import { mapGetters } from "vuex";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "@/firebase/index.js";
import { ref, set, getDatabase } from "firebase/database";

export default {
  data() {
    return {
      Text: "",
      anotherVal: "",
      submitstate: "btn btn-primary",
      token: "",
      ERROR: "",
    };
  },
  computed: {
    ...mapGetters({ emaildata: "getData" }),
  },
  methods: {
    async register() {
      let provider = new GoogleAuthProvider();
      let auth = getAuth();
      const db = getDatabase();

      const loginStatus = new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
          .then((result) => {
            //let token = result.credential.accessToken;
            let user = result.user;
            //console.log(token); // Token
            console.log(user); // User that was authenticated
            const userDetails = ref(db, "users/" + user.uid);
            this.anotherVal = {
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
              emailVerified: user.emailVerified,
              photoURL: user.photoURL,
            };
            set(userDetails, this.anotherVal);
            resolve("success");
          })
          .catch((err) => {
            console.log(err); // This will give you all the information needed to further debug any errors
            reject();
          });
      });
      loginStatus
        .then((status) => {
          if (status === "success") {
            this.$store.dispatch("updateUser", this.anotherVal);

            this.$router.push("/home");
          }
        })
        .catch(() => {
          console.log("something wrong has happened please try again");
          this.ERROR = "something wrong has happened please try again";
        });
    },
    check() {
      fetch("http:localhost:3000/api/slots")
        .then((response) => {
          if (response.ok) {
            return response.json(); // Parse the response data as JSON
          } else {
            throw new Error("API request failed");
          }
        })
        .then((data) => {
          // Process the response data here
          console.log(data); // Example: Logging the data to the console
        })
        .catch((error) => {
          // Handle any errors here
          console.error(error); // Example: Logging the error to the console
        });
    },
  },
};
</script>
