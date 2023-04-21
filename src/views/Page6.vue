<script setup>
import { ref } from 'vue'
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/firebase'
const app = initializeApp(firebaseConfig);
const mydb = getFirestore(app)
const resp = ref('')
const response = ref(resp)
const showButton = ref(true)
const showB = ref(showButton)
const banner = ref(false)
const successBanner = ref(banner)
const banner2 = ref(false)
const successBanner2 = ref(banner2)
const pageSixRef = collection(mydb, 'page-six')
async function submitResponse(){
    await setDoc(doc(pageSixRef, 'whatdoyouwantbbg'),{
        response: response.value
    }).then(function(){
        console.log(response.value)
        if(response.value === "👎 Screw you! Screw this! Fuck you man 🖕"){
            successBanner2.value = true
            showB.value = false
        } else{
            successBanner.value = true
            showB.value = false
        }
    })
}
</script>
<template>
<div class="container">
    <h3 class="text-center py-3" style="font-weight:bold"><span class="text-muted" style="color:#bfbfbf!important;">👉Sugar...</span>Spice... 🌶️</h3>
    <div class="d-flex justify-content-center">
        <img src="../assets/images/salty-salt-bae.gif" class="img-fluid" style="height:160px;width:auto">
    </div>
    <form action="" method="POST">
        <div class="row py-2 d-flex align-items-center">
            <h4 class="text-center pt-4 pb-2" style="font-weight:bold">What do you want babygirl?</h4>
            <div class="col-4">
                <div style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                    <input type="radio" v-model="response" 
                    value="You come over and I cook for you delicious food of your choosing. Have you sit on the kitchen counter laughing at me when I try to multitask. Kiss you when you laugh too much and stare in your gleamy eyes and tell you how again how much you make me feel."> 
                    <label>
                        You come over and I cook for you delicious food of your choosing. Have you sit on the kitchen counter laughing at me when I try to multitask. Kiss you when you laugh too much and stare in your gleamy eyes and tell you how again how much you make me feel.
                    </label>
                </div>
            </div>
            <div class="col-4">
                <div style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                    <input type="radio" v-model="response" 
                    value="You cook for me your favorite food as I keep you company in the kitchen. Run my hands all over your body as I kiss you in the neck. Whisper how sexy and beautiful in your ear in the filthiest. Dirtiest. Nastiest ways. Taste the honey or chocolate off your lips. Squeeze that fat ass in that tight dress. Eat you out as we wait for food to be ready."> 
                    <label>
                        You cook for me your favorite food as I keep you company in the kitchen. Run my hands all over your body as I kiss you in the neck. Whisper how sexy and beautiful in your ear in the filthiest. Dirtiest. Nastiest ways. Taste the honey or chocolate off your lips. Squeeze that fat ass in that tight dress. Eat you out as we wait for food to be ready.
                    </label>
                </div>
            </div>
            <div class="col-4">
                <div style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                    <input type="radio" v-model="response" 
                    value="👎 Screw you! Screw this! Fuck you man 🖕"> 
                    <label>
                        👎 Screw you! Screw this! Fuck you man 🖕
                    </label>
                </div>
            </div>
        </div>
        <br>
        <div v-if="showB" class="d-flex justify-content-center pt-4">
            <button class="btn btn-lg btn-success" :disabled="response.length === 0" @click.prevent="submitResponse">Submit</button>
        </div><br><br>
    </form>
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
                                <router-link :to="{name: 'page7'}">
                                    <button class="btn btn-lg btn-light">
                                        <span style="font-weight:bold">Ni kumoto mazeee 🧨</span>
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
<div v-if="successBanner2" style="bottom:0; position:relative;background-color: #ffdfe0;">
    <br><br>
    <div style="postion:absolute">
        <div class="container">
            <div class="col-10 mx-auto">
                <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-3">
                        <div class="">
                            <div class="d-flex align-items-center justify-content-between">
                                <div style="background-color: #fff; border-radius: 50%; width: 80px;height:80px;" class="d-flex justify-content-center align-items-center">
                                    <img src="../assets/images/cryingcat.jpg" class="img-fluid" style="width:80px;height:80px;border-radius: 50%;">
                                </div>
                                <div class="d-flex align-items-center pl-5">
                                    <h4 class="" style="color: #ea2b2b;font-weight:bold">Machosssssss</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="d-flex justify-content-end">
                            <div class="d-flex align-items-center">
                                <router-link :to="{name: 'page7'}">
                                    <button class="btn btn-lg btn-danger" style="background-color:#ea2b2b">
                                        <span style="font-weight:bold;color:white;">Fadah Loooord. Saambari save me</span>
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