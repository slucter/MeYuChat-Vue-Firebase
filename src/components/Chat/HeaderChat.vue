<template>
    <div class="header-chat">
        <div class="profile-chat">
            <img src="../../assets/img/avatar-penguin.png" alt="avatar">
        </div>
        <div class="status-profile">
            <a href="#">Muhamad Yusuf</a>
            <p>Online</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderChat',
};
</script>

<style scoped>
.header-chat{
    width: 100%;
    height: 10%;
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 1px 30px 5px rgba(0,0,0,.3);
    display: flex;
    margin-bottom: 1%;
}
.profile-chat{
    width: 20%;
    height: 100%;
    /* background-color: tomato; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.profile-chat img{
    width: 60%;
    height: 75%;
    border-radius: 50%;
}
.status-profile{
    width: 80%;
    height: 100%;
    /* background-color: rgb(218, 196, 193); */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.status-profile a{
    font-size: 25px;
    font-weight: 500;
    text-decoration: none;
    color: rgb(56, 56, 56);
}
.status-profile p{
    font-size: 16px;
    font-weight: 400;
    color: #00d10a;
}
</style>
