<template>
  <section class="loginContainer">
    <TextInput class="inputItem" v-model="email" :placeholder="'Email'"></TextInput>
    <TextInput class="inputItem" v-model="password" :placeholder="'Password'"></TextInput>
  <div class="btnContainer">
    <g-button @click="login">Login</g-button>
    <g-button @click="register">Register</g-button>
  </div>
  </section>
</template>
<script src="./login.js"></script>
<style src="./login.scss" lang="scss"></style>
