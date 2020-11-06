<template>
    <h1>Rock Paper Scissors</h1>
  <router-view/>
</template>

<style>

body, html{
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*background-image: url("./assets/chess.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;*/
  min-height: 100vh;
  width: 100%;
  //position: fixed;
  margin: 0;
}

h1 {
  padding: 30px;
}
</style>
