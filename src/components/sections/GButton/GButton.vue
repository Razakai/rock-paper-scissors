<template>
  <button
    class="w-button"
    @click="onClick"
    :disabled="disabled">
    <slot/>
  </button>
</template>
<script src="./GButton.js"></script>
<style src="./GButton.scss" lang="scss"></style>
