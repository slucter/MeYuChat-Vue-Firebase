<template>
    <div class="chat-body">

        <div :class="msg.from == 'me' ? 'my-buble' : 'friend-buble'"
        v-for="msg in this.$store.state.theMessages" :key="msg">
            <h3>{{msg.text}}</h3>
            <p>{{msg.date}}</p>
        </div>

    </div>
</template>

<script>
export default {
  name: 'BodyChat',
  data() {
    return {
      messages: [
        {
          from: 'me',
          text: 'Halo Apakabar?',
          date: `${new Date().getHours()}:${new Date().getMinutes()}`,
        },
        {
          from: 'them',
          text: 'Iyaa baik',
          date: `${new Date().getHours()}:${new Date().getMinutes()}`,
        },
        {
          from: 'me',
          text: 'Ohh Yaudah...',
          date: `${new Date().getHours()}:${new Date().getMinutes()}`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.chat-body{
    width: 100%;
    height: 82%;
    /* background-color: rgb(255, 255, 255); */
    background-image: url('../../assets/img/computer-3163437_1280.png');
    display: block;
}
.friend-buble{
    background-color: rgb(248, 224, 248);
    padding: 10px;
    box-shadow: 1px 1px 30px 5px rgba(0,0,0,.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    margin-bottom: 10px;
}
.friend-buble p{
    color: #6b6b6b;
    margin-top: 5px;
}
.friend-buble h3{
    font-weight: 400;
}
.my-buble{
    background-color: rgb(255, 255, 255);
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 1px 1px 30px 5px rgba(0,0,0,.3);
}
.my-buble p{
    margin-top: 5px;
    color: #6b6b6b;
}
.my-buble h3{
    font-weight: 400;
}
</style>
