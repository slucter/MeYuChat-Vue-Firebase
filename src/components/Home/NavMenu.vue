<template>
   <div class="section-menu">
        <div class="box-menu">
            <img src="../../assets/img/icon/icons8-settings.svg" alt="setting">
            <a href="#">Setting</a>
        </div>
        <div class="box-menu">
            <img src="../../assets/img/icon/icons8-add-user-group-man-man-64.png" alt="add">
            <router-link to="/add">Add Friends</router-link>
        </div>
        <div class="box-menu">
            <img src="../../assets/img/icon/icons8-location-64.png" alt="Location">
            <a href="#">Change Location</a>
        </div>
        <div class="box-menu">
            <img src="../../assets/img/icon/icons8-logout-rounded-down-64.png" alt="Logout">
            <a @click="logout_user" href="#">Logout</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
    };
  },

  methods: {
    logout_user(e) {
      e.preventDefault();
      this.$mf.auth().signOut().then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>

<style scoped>
.section-menu{
    width: 100%;
    height: 130px;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: space-around;
    padding: 10px;
}
.box-menu{
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 15px;
    box-shadow: 1px 1px 30px 5px rgba(0,0,0,.2);
    padding: 20px;
}
.box-menu a{
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
    color: rgba(0,0,0,.9);
}
.box-menu img{
    width: 30px;
    height: 30px;
    margin: 10px;
}
</style>
