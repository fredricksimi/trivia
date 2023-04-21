<script setup>
import { ref } from 'vue'
import { getFirestore, collection, doc, setDoc, arrayUnion, FieldValue } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/firebase'
const app = initializeApp(firebaseConfig);
const mydb = getFirestore(app)
const theOptions = ref([])
const checkedOptions = ref(theOptions)
const sform = ref(true)
const showform = ref(sform)
const banner = ref(false)
const successBanner = ref(banner)
const img = ref(false)
const showImg = ref(img)
const pageSevenRef = collection(mydb, 'page-seven')
async function submitResponse(){
    console.log(checkedOptions.value)
    await setDoc(doc(pageSevenRef, 'latestspicyhits'),{
        response: arrayUnion(...checkedOptions.value)
    }).then(function(){
        console.log(checkedOptions)
        showform.value = false
        showImg.value = true
        successBanner.value = true
    })
}

</script>
<template>
    <div class="container">
        <h2 class="text-center pt-1" style="font-weight:bold"><span style="color:#bfbfbf!important;">👉Sugar...Spice...</span>and everything nice 🥵</h2>
        <div class="d-flex justify-content-center">
            <img v-if="showform" src="../assets/images/powerpuff-girls-sugar.gif" class="img-fluid" style="width:230px;height:auto">
        </div>
        <h3 class="text-center pt-4" v-if="showform" style="font-weight:bolder">🕺💃Playing the latest hits. Top 10 spicy ones just for you🫵</h3>
        <h2 class="text-center pt-2" v-if="showform">🗹 Yay! ....or.... ☐ Naaah!</h2>
        <h3 class="text-center pt-2" v-if="showform">‼️Read All Green first, followed by all of grey, then purple‼️</h3>
        <div class="container pt-2">
            <form method="POST" v-if="showform">
                <div class="row">
                    <div class="col-md-4">
                        <div class="my-3" style="width:100%;height:fit-content;background-color: rgb(169, 255, 121);border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="Tabasamu😊 ya kuchanganya mimi pamoja na jogoo za Bungoma🐓"
                            > <label>Tabasamu😊 ya kuchanganya mimi pamoja na jogoo za Bungoma🐓</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: rgb(169, 255, 121);border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="Leta rent💰, you've been living in my head for free."
                            > <label>Leta rent💰, you've been living in my head for free.</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: rgb(169, 255, 121);border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="I know a few languages, lingual🗣️ and programming💻. But there is one I understand quite well. Your body is calling me, that's your body language."
                            > <label>I know a few languages, lingual🗣️ and programming💻. But there is one I understand quite well. Your body is calling me, that's your <span class="text-small">body language.</span></label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: rgb(169, 255, 121);border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="You are tiny💯, but I love your big sweet heart🫀"
                            > <label>You are tiny💯, but I love your big sweet heart🫀</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: rgb(169, 255, 121);border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="Speaking of sweet, I'd love to lick👅 honey off of your thick juicy thighs🍗"
                            > <label>Speaking of sweet, I'd love to lick👅 honey off of your thick juicy thighs🍗</label>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="my-3" style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="Najua wewe ni cybersecurity analyst👩‍💻 and I want you to do some penetration testing👨‍💻 with me"
                            > <label>Najua wewe ni cybersecurity analyst👩‍💻 and I want you to do some penetration testing👨‍💻 with me</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="🎶Sura yako muzuri mamaaaa aaah muzuri mamaaaa aaah🎶"
                            > <label>🎶Sura yako muzuri mamaaaa aaah muzuri mamaaaa aaah🎶</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="Your short height won't matter when you're on all fours 📐📏"
                            > <label>Your short height won't matter when you're on all fours 📐📏</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="Wassuuuup Big Butt Betty Gyaaaaaal 👋😄"
                            > <label>Wassuuuup Big Butt Betty Gyaaaaaal 👋😄</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="Ni kama mvua imeisha kwenu, come I make you wetter 💦"
                            > <label>Ni kama mvua imeisha kwenu, come I make you wetter 💦</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="I'm not Harry Potter but I can show you magic with my wand 🪄"
                            > <label>I'm not Harry Potter but I can show you magic with my wand 🪄</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="my-3" style="width:100%;height:fit-content;background-color: rgb(140, 53, 244);border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="Roses🌹 are red, violets are blue🔵. You can spell your name, when I am under you 🫡"
                            > <label class="text-white">Roses🌹 are red, violets are blue🔵. You can spell your name, when I am under you 🫡</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: rgb(140, 53, 244);border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="Call me your teacher👨‍🏫 and I'll give bring the whips, call me your preacher✝️ and I'll give you holy water, call me your vampire🧛 and I'll suck you dry"
                            > <label class="text-white">Call me your teacher👨‍🏫 and I'll give bring the whips, call me your preacher✝️ and I'll give you holy water, call me your vampire🧛 and I'll suck you dry</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: rgb(140, 53, 244);border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="I know you hate breakfast🥱, but you'll love my sausage, eggs and milk 👨‍🍳"
                            > <label class="text-white">I know you hate breakfast🥱, but you'll love my sausage, eggs and milk 👨‍🍳</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: rgb(140, 53, 244);border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="You're my sugar🍦, I'm your spice🌶️. Together we're everything nice 🤗"
                            > <label class="text-white">You're my sugar🍦, I'm your spice🌶️. Together we're everything nice 🤗</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: rgb(140, 53, 244);border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="My brain🧠 has stopped braining😵"
                            > <label class="text-white">My brain🧠 has stopped braining😵</label>
                        </div>
                        <div class="my-3" style="width:100%;height:fit-content;background-color: rgb(140, 53, 244);border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                            <input type="checkbox" v-model="checkedOptions"
                            value="Kumbe zimefika sixteen, ni vile unanichanganyisha btw 😵‍💫"
                            > <label class="text-white">Kumbe zimefika sixteen, ni vile unanichanganyisha btw 😵‍💫</label>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-lg btn-success" @click.prevent="submitResponse">
                        Submit
                    </button>
                </div>
            </form>
            <div class="d-flex justify-content-center pb-5">
                <img v-if="showImg" src="../assets/images/girl-alyssa-milano.gif" class="img-fluid">
            </div>
        </div>
    </div>
    <div v-if="successBanner" style="bottom:0; position:relative;background-color: #d7ffb8;">
    <br><br>
    <div style="postion:absolute">
        <div class="container">
            <div class="col-10 mx-auto">
                <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-3">
                        <div class="">
                            <div class="d-flex align-items-center justify-content-between">
                                <div style="background-color: #fff; border-radius: 50%; width: 80px;height:80px;" class="d-flex justify-content-center align-items-center">
                                    <img src="../assets/images/done3.png" class="img-fluid" style="width:41px;height:auto">
                                </div>
                                <div class="d-flex align-items-center pl-5">
                                    <h4 class="" style="color: #58cc02;font-weight:bold">Nicely done!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="d-flex justify-content-end">
                            <div class="d-flex align-items-center">
                                <router-link :to="{name: 'page8'}">
                                    <button class="btn btn-lg btn-light">
                                        <span style="font-weight:bold">Hallelujaaaaaah 💥</span>
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br><br>
</div>
</template>