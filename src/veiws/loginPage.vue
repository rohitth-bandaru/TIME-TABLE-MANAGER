<template>
  <div class="">
    <div class="font-serif">
      for now we are using google to authenticate we will get back to you once
      we add other methods
    </div>
    <button @click="register" class="btn btn-primary">submit</button>
    <div>{{ ERROR }}</div>
    <br />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "@/firebase/index.js";
import { ref, set, getDatabase } from "firebase/database";
import { findUser, addUser } from "@/timetable";
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
    ...mapGetters(["getUserData"]),
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
            findUser(this.anotherVal.uid).then((res) => {
              if (!res) {
                addUser(this.anotherVal);
              }
              console.log(res);
            });
            this.$router.push("/home");
          }
        })
        .catch(() => {
          console.log("something wrong has happened please try again");
          this.ERROR = "something wrong has happened please try again";
        });
    },
    check() {
      findUser("aSFZlCl6NePQGVGFPYdDQ7VLcB").then((data) => {
        if (data === false) {
          addUser({
            uid: "aSFZlCl6NePQGVGFPYdDQ7VLcBY",
            displayName: "Rohitth Bandaru",
            email: "rohitthbandaru@gmail.com",
            emailVerified: true,
            photoURL:
              "https://lh3.googleusercontent.com/a/AAcHTteGEDDfuxH6atOWcH9eoRa2sRLMiChW9Xg_o3ITAhmiw7A=s96-c",
          }).then((data) => {
            console.log(data);
          });
        }
      });
    },
  },
  mounted() {
    if (this.getUserData.uid != undefined) {
      this.$router.push("/home");
    }
  },
  components: {},
};
</script>
