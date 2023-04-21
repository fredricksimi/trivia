<script setup>
import backgroundGif from '../assets/images/celebrate1.webp'
import theVideo from '../assets/videos/Video.mp4'
const backstyles = {
  "background": `url(${backgroundGif})`,
  "background-attachment": "fixed",
  "background-repeat": "repeat",
  "height":"100vh"
}
// document.getElementsByTagName("video")[0].removeAttribute("autoplay");
</script>

<template>
  <div id="homecursor" :style="backstyles">
    <br><br><br><br><br><br><br><br>
    <div class="container">
      <h3 class="text-center pb-2" style="font-weight:bolder">Play the video</h3>
      <div class="row">
        <div class="col-3 d-flex justify-content-center align-items-center">
          <img src="../assets/images/happy2.gif" class="img-fluid">
        </div>
        <div class="col-6 d-flex justify-content-center align-items-center">
          <div class="ratio ratio-16x9">
            <iframe :src="theVideo" title="Congratulations!" allowfullscreen style="border-radius:15px;"></iframe>
          </div>
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center">
          <img src="../assets/images/celebrate2.gif" class="img-fluid" style="height:300px;width:auto">
        </div>
      </div>
    </div>
    <br><br>
    <div class="d-flex justify-content-center">
      <router-link :to="{name: 'page2'}">
        <button class="btn btn-lg btn-success">🤭 I'm done, what next?</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@import 'https://unpkg.com/video.js@7/dist/video-js.min.css';
</style>