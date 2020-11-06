<template>
  <div class="gameContainer">
    <div class="gameChoiceContainer">
    <article v-for="item in getItems" :key="item.id">
      <choice-box @click="incrementScore(item.id)" :choice-id="item.id"></choice-box>
    </article>
    </div>
    <h2 class="h2Container" v-if="latestResult != ''">
      <div v-if="getWinner == ''">
      Match Result:
      <em>{{ latestResult }}</em>
      <p>You: {{ playerChoice }} Computer: {{ computerChoice }}</p>
      </div>
      <div v-else>
        Winner: {{ getWinner }}
      </div>
    </h2>
    <section class="gameScoreContainer">
      <div class="score">
        <em> Human Score:</em>
          {{ getHumanScore }}
      </div>
      <div class="score">
        <em>Computer Score:</em>
        {{ getComputerScore }}
      </div>
    </section>
    <div
      class="reset"
      @click="resetGame">
      <em>Reset</em>
    </div>
  </div>
</template>
<script src="./game.js"></script>
<style src="./game.scss" lang="scss"></style>
