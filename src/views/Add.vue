<template>
    <div>
        <div class="wrapper-page">
            <div class="container-app">
                <HeadingSection />
                <Neangan />
                <ListAdd />
            </div>
        </div>
    </div>
</template>

<script>
import HeadingSection from '../components/Home/HeadingSection.vue';
import Neangan from '../components/Add/Neangan.vue';
import ListAdd from '../components/Add/ListAdd.vue';

export default {
  name: 'Add',
  components: {
    HeadingSection,
    Neangan,
    ListAdd,
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
