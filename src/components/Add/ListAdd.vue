<template>
    <div class="section-list-friends">
        <div class="li-fbox">
            <div class="f-avatar">
                <img src="../../assets/img/avatar-penguin.png" alt="avatar-f">
            </div>
            <div class="f-name">
                <a href="#">Muhamad Yusuf</a>
                 <p>Online</p>
            </div>
            <div class="f-action">
                <div class="f-profile">
                    <a href="#">
                        <img src="../../assets/img/icon/icons8-user-male-64.png"
                        alt="f-profile"></a>
                </div>
                <div class="f-chat">
                    <a href="#"><img src="../../assets/img/icon/add.png" alt="f-chat"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ListAdd',
};
</script>

<style scoped>
.section-list-friends{
    width: 96%;
    /* background-color: #fff; */
    /* box-shadow: 1px 1px 30px 5px rgba(0,0,0,.1); */
    display: flex;
    flex-direction: column;
    align-items: center;
}
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
    background-color: rgb(255, 255, 255);
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
</style>
