<template>
  <div>
    <div class="wrapper-page">
        <div class="container-app">
          <ProfileCover />
          <NavMenu />
          <HeadingSection />
          <ListingUser />
        </div>
    </div>
  </div>
</template>

<script>
import ProfileCover from '../components/Home/ProfilCover.vue';
import NavMenu from '../components/Home/NavMenu.vue';
import HeadingSection from '../components/Home/HeadingSection.vue';
import ListingUser from '../components/Home/ListingUsers.vue';

export default {
  name: 'Home',
  components: {
    ProfileCover,
    NavMenu,
    HeadingSection,
    ListingUser,
  },
};
</script>

<style scoped>
.wrapper-page{
    background-image: url('../assets/img/silhouette-of-person-holding-glass-mason-jar-1274260.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    position: relative;
    display: flex;
}
.wrapper-page::after{
    content: '';
    background-color: rgba(0,0,0,.5);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
}

.container-app{
    width: 40vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    flex-direction: column;
    align-items: center;
}

</style>
