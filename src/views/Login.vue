<template>
    <div>
        <div class="wrapper-page">
            <div class="container-app">
                <h3>Login MeYu!</h3>
                <FormLogin />
            </div>
        </div>
    </div>
</template>

<script>
import FormLogin from '../components/Login/FormLogin.vue';

export default {
  name: 'Login',
  components: {
    FormLogin,
  },

};
</script>

<style scoped>
.wrapper-page{
    background-image: url('../assets/img/abstract-art-blaze-bonfire-266526.jpg');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size:cover;
    background-position: cover;
    position: relative;
    display: flex;
}
.wrapper-page::after{
    content: '';
    background-color: rgba(0,0,0,.9);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
}

.container-app{
    width: 40vw;
    height: 100vh;
    background-image: url('../assets/img/silhouette-of-trees-under-blue-sky-1367179.jpg');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size:cover;
    background-position: cover;
    display: flex;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 200px;
}
.container-app::after{
    content: '';
    background-color: rgba(215, 250, 255, 0.3);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
}
.container-app h3{
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 500;
}
</style>
