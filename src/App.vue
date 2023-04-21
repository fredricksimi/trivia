<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
html,body{
  font-family:'Nunito' sans-serif !important;
  cursor: url('../src/assets/images/pizzacursor.png'), pointer;
  font-size:17px;
}

button:not(disabled){
  cursor: url('../src/assets/images/pizzacursor.png'), pointer !important;
}
video{
  cursor: url('../src/assets/images/pizzacursor.png'), pointer !important;
}
</style>
