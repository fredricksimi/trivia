<script setup>
import { ref } from 'vue'
const ans = ref('')
const answer = ref(ans)
const possb = ['oya oya', 'oyaoya', 'oya oya!', 'oyaoya!']
const showb = ref(false)
const showbutton = ref(showb)
function checkans(){
  if (possb.includes(answer.value.toLowerCase())) {
    console.log('Yes')
    showbutton.value = true
  } else{
    alert('Try Again!')
    answer.value =''
  }
}
function submitResponse() {
  
}
</script>
<template>
  <div class="container py-4">
    <div class="row d-flex justify-content-center">
      <h2 class="text-center">Dafuck who you are??</h2>
      <div class="col-md-8 mx-auto">
        <img src="../assets/images/dafuck.png" class="img-fluid py-3">
        <form method="POST">
          <label class="pt-5 pb-3">How do you answer my phonecalls?</label>
          <input type="text" class="form-control" v-model.trim="answer">
          <div class="d-flex justify-content-center pt-3">
            <button class="btn btn-primary" :disabled="answer.length === 0" @click.prevent="checkans">Verify...</button>
          </div>
        </form>
        <div class="py-5 d-flex justify-content-center">
          <router-link :to="{name: 'page1'}">
            <button v-if="showbutton" class="btn btn-success">Proceed 😊</button>
          </router-link>
        </div>
      </div>
      
    </div>
  </div>
</template>