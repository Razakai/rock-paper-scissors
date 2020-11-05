<template>
  <div class="gameContainer">
    <div class="gameChoiceContainer">
    <article v-for="item in getItems" :key="item.id">
      <choice-box @click="incrementScore(item.id)" :choice-id="item.id"></choice-box>
    </article>
    </div>
    <h2 v-if="latestResult != ''">
      Match Result:
      <em>{{ latestResult }}</em>
    </h2>
    <div class="gameScoreContainer">
      <div class="score">
        <em> Human Score:</em>
          {{ getHumanScore }}
      </div>
      <div class="score">
        <em>Computer Score:</em>
        {{ getComputerScore }}
      </div>
    </div>
    <div
      class="reset"
      @click="resetGame">
      <em>Reset</em>
    </div>
  </div>
</template>
<script src="./game.js"></script>
<style src="./game.scss" lang="scss"></style>
