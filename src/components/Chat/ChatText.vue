<template>
    <div class="chat-text">
        <input type="text" placeholder="Ketik Pesan..." v-model="chatTyping">
        <div class="group-button-chat">
            <button>
            <img @click="sendBtn"
            src="assets/img/icon/icons8-paper-plane-16.png" alt="send">
            </button>
            <button>
                <img src="assets/img/icon/icons8-paper-plane-16.png" alt="send">
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ChatText',
  data() {
    return {
      chatTyping: '',
    };
  },
  methods: {
    sendBtn() {
      const messages = {
        from: 'them',
        text: this.chatTyping,
        date: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };
      this.$store.dispatch('sendBtn', messages);
    },
  },
};
</script>

<style scoped>
.chat-text{
    width: 100%;
    height: 8%;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.chat-text input{
    width: 70%;
    height: 60px;
    background-color: #fff;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #000;
    outline: none;
    font-size: 20px;
}

.group-button-chat{
    width: 27%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.group-button-chat button{
    width: 40%;
    height: 80%;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    box-shadow: 1px 1px 30px 5px rgba(0,0,0,.3);
}
.group-button-chat button:active{
    box-shadow: 1px 1px 20px 5px rgba(0,0,0,.2);
}
.group-button-chat button img{
    width: 40%;
    height: 40%;
}
</style>
