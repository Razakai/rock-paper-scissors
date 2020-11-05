<template>
  <label class="w-text-input">
    <input
      class="w-text-input__text-input"
      ref="input"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      @input="updateValue"/>
  </label>
</template>
<script src="./TextInput.js"></script>
<style src="./TextInput.scss" lang="scss"></style>
