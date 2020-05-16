<template>
    <div>
        <div class="wrapper-page">
            <div class="container-app">
                <ProfileCover />

            <div class="details-section">
                <h1>^ _ ^</h1>
                <h3>Coming soon details</h3>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileCover from '../components/Home/ProfilCover.vue';

export default {
  name: 'Profile',
  components: {
    ProfileCover,
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

.details-section{
    width: 96%;
    height: 300px;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}
</style>
