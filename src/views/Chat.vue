<template>
    <div>
        <div class="wrapper-page">
            <div class="container-app">
                <HeaderChat />
                <Body />
                <ChatText/>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderChat from '../components/Chat/HeaderChat.vue';
import Body from '../components/Chat/Body.vue';
import ChatText from '../components/Chat/ChatText.vue';

export default {
  name: 'Chat',
  components: {
    HeaderChat,
    Body,
    ChatText,
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
