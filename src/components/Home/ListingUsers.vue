<template>
<div class="section-list-friends">

    <div class="li-fbox" v-for="users in listUser" :key="users.id">
        <div class="f-avatar">
            <img src="../../assets/img/avatar-penguin.png" alt="avatar-f">
        </div>
        <div class="f-name">
            <a href="#">{{users.name}}</a>
            <p>{{ users.online ? 'Online' : 'Offline' }}</p>
        </div>
        <div class="f-action">
            <div class="f-profile">
                <router-link to="/profile">
                    <img src="../../assets/img/icon/icons8-user-male-64.png" alt="f-profile">
                </router-link>
            </div>
            <div class="f-chat">
                <router-link to="/chat">
                    <img src="../../assets/img/icon/icons8-chat-room-64.png" alt="f-chat">
                </router-link>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
  name: 'ListingUSer',
  data() {
    return {
      listUser: [
        {
          id: 0,
          name: 'Muhamad Fattah',
          online: true,
        },
        {
          id: 1,
          name: 'Jhon Lenon',
          online: false,
        },
        {
          id: 2,
          name: 'George Harrison',
          online: true,
        },
        {
          id: 3,
          name: 'Kurt Cobain',
          online: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.li-fbox{
    width: 100%;
    height: 80px;
    background-color: #fff;
    box-shadow: 1px 1px 30px 5px rgba(0,0,0,.1);
    border-radius: 10px;
    display: flex;
    margin-bottom: 10px;
}
.f-avatar{
    flex: .8;
    height: 100%;
    /* background-color: saddlebrown; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.f-avatar img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.f-name{
    flex: 3;
    height: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
}
.f-name a{
    text-decoration: none;
    color: rgba(0,0,0,.9);
    font-size: 25px;
    font-weight: 500;
}
.f-name p{
    text-decoration: none;
    color: rgba(0,0,0,.7);
    font-size: 14px;
    font-weight: 400;
}
.f-action{
    flex: 1;
    height: 100%;
    background-color: seagreen;
    display: flex;
}
.f-profile{
    width: 50%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
}
.f-profile a img{
    width: 50px;
    height: 50px;
}
.f-chat{
    width: 50%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
}
.f-chat a img{
    width: 45px;
    height: 45px;
}
.section-list-friends{
    width: 96%;
    /* background-color: #fff;
    box-shadow: 1px 1px 30px 5px rgba(0,0,0,.1); */
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
