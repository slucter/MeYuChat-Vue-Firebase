<template>
    <div>
        <input type="text" v-model="movie" @keyup.enter="addMovie" placeholder="Add Movie">
        <h2>Saya mencari : {{movie}}</h2>
        <ul>
            <li v-for="movieName in movies" :key="movieName">{{movieName}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Todos',
  data() {
    return {
      movie: null,
      movies: [],
    };
  },

  methods: {
    addMovie() {
      this.$db.collection('movie').add({
        name: this.movie,
      });
    },
  },

  created() {
    this.$db.collection('movie').orderBy('name', 'desc').onSnapshot((e) => {
      // eslint-disable-next-line no-console
      const datas = [];
      e.forEach((data) => {
        datas.push(data.data().name);
      });
      this.movies = datas;
    });
  },
};
</script>

<style scoped>
input{
    font-size: 20px;
    padding: 15px 10px 15px 10px;
    width: 450px;
    outline: none
}

ul li{
    font-weight: bold;
    font-size: 30px;
    background-color: brown;
    color: teal;
    border-bottom: 2px solid #fff;
    padding: 10px;
}
</style>
