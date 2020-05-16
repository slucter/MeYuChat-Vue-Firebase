<template>
    <div class="cover-header">
        <div class="profile-avatar">
            <img src="../../assets/img/avatar.jpg" alt="avatar">
        </div>
        <h3>Muhamad Irhashdianto</h3>
    </div>
</template>

<script>
export default {
  name: 'ProfilCover',
};
</script>

<style scoped>
.cover-header{
    width: 100%;
    height: 30%;
    background-image: url('../../assets/img/red-and-black-abstract-art-2011824.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
}
.cover-header::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
}
.profile-avatar{
    width: 180px;
    height: 180px;
    background-color: rgb(70, 113, 170);
    display: flex;
    position: relative;
    z-index: 10;
    border-radius: 50%;
}
.profile-avatar img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #fff;
}
.cover-header h3{
    font-size: 36px;
    color: #fff;
    position: relative;
    z-index: 10;
    font-weight: 500;
}
</style>
