<template>
    <form action="" class="box-login">
         <div class="input-login">
            <input type="text" placeholder="Email" v-model="dataLogin.email">
            <input type="password" placeholder="Password" v-model="dataLogin.password">
        </div>
        <div class="button-section">
            <button @click="Login">Login</button>
            <router-link to="/register">Register</router-link>
        </div>

        <div class="gmail-login">
            <button @click="signGoogle">With Google</button>
        </div>
    </form>
</template>

<script>
export default {
  name: 'FormLogin',
  data() {
    return {
      dataLogin: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    Login(e) {
      e.preventDefault();
      this.$mf.auth().signInWithEmailAndPassword(this.dataLogin.email, this.dataLogin.password)
        .then(() => {
          this.$router.replace('/home');
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        },
        (err) => {
          // eslint-disable-next-line no-alert
          alert(err.message);
        });
    },
    signGoogle(e) {
      e.preventDefault();
      this.$mf.auth().getRedirectResult().then((result) => {
        // eslint-disable-next-line no-console
        console.log(result);
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
    },
  },
};
</script>

<style scoped>
.box-login{
    padding:20px;
    /* height: 200px; */
    width: 70%;
    background-color: #fff;
    display: flex;
    border-radius: 50px;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
}
/* .box-login .input-login{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
} */
.box-login .input-login input{
    border: 1px solid #cacaca;
    background-color: #fff;
    outline: none;
    width: 100%;
    /* height: 80px; */
    border-radius: 20px;
    font-size: 20px;
    color: #888888;
    padding: 15px;
    box-sizing: border-box;
    margin-top: 5px;
}
.box-login .button-section {
    display: flex;
    width: 100%;
    margin-top: 20px;
    justify-content: space-between;
}
.box-login .button-section button{
    width: 65%;
    padding: 10px;
    background-color: #fff;
    border: 2px solid #cacaca;
    border-radius: 15px;
    color: #414141;
    font-size: 20px;
}
.box-login .button-section button:hover{
    background-color: #cacaca;
    transition: .4s;
    color: #ffff;
}
.box-login .button-section a{
    width: 30%;
    padding: 10px;
    background-color: #fff;
    border: 2px solid #cacaca;
    border-radius: 15px;
    text-decoration: none;
    font-size: 20px;
    text-align: center;
    color: #414141;
}
.box-login .button-section a:hover{
    background-color: #cacaca;
    transition: .4s;
    color: #ffff;
}
</style>
