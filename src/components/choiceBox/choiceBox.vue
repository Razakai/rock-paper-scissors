<template>
  <div class="iconContainer">
    <img v-if="isRock" src="../../assets/rock.svg" >
    <img v-else-if="isPaper" src="../../assets/paper.svg" >
    <img v-else-if="isScissors" src="../../assets/scissors.svg" >
  </div>
</template>
<script src="./choiceBox.js"></script>
<style src="./choiceBox.scss" lang="scss"></style>
