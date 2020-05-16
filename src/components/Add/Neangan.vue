<template>
    <div class="search-section">
        <input type="text" placeholder="Neangan batur geura!">
        <button>cari</button>
    </div>
</template>

<script>
export default {
  name: 'Neangan',
};
</script>

<style scoped>
.search-section{
    width: 96%;
    height: 80px;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 1px 1px 30px 5px rgba(0,0,0,.2);
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.search-section input{
    width: 70%;
    outline: none;
    background-color: #fff;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #000;
    font-size: 20px;
    padding: 10px 10px 10px 5px;
}

.search-section button{
    width: 25%;
    height: 60%;
    background-color: #fff;
    box-shadow: 1px 1px 20px 5px rgba(0,0,0,.2);
    transition: .3s;
    outline: none;
    border: none;
    border-radius: 20px;
    font-size: 20px;
}
.search-section button:active{
    box-shadow: 1px 1px 30px 5px rgba(0,0,0,.1);
}

</style>
