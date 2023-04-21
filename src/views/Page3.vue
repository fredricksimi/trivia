<script setup>
import { ref } from 'vue'
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/firebase'
const app = initializeApp(firebaseConfig);
const mydb = getFirestore(app)
const resp = ref('')
const response = ref(resp)
const banner = ref(false)
const successBanner = ref(banner)
const banner2 = ref(false)
const successBanner2 = ref(banner2)
const showButton = ref(true)
const showB = ref(showButton)
const pageThreeRef = collection(mydb, 'page-three')
async function submitResponse(){
    await setDoc(doc(pageThreeRef, 'flowersmell'),{
        response: response.value
    }).then(function(){
        console.log(response.value)
        if(response.value === "I think they smell amazing 🤗"){
            successBanner.value = true
            showB.value = false
        } else{
            successBanner2.value = true
            showB.value = false
        }
    })
}
</script>

<template>
<div class="container">
    <h3 class="text-center pt-5">Have some flowers🌹🌹 and kisses😘💋 </h3>
    <div class="row">
        <div class="col-9 mx-auto d-flex justify-content-center">
            <div>
                <img src="../assets/images/flowers-roses.gif" class="img-fluid">
                <img src="../assets/images/blow-kiss-petals.gif" class="img-fluid" style="width:300px;height:auto">
            </div>
        </div>
    </div>
    <form method="POST" v-if="showB">
        <div class="row">
            <div class="col-5 mx-auto d-flex justify-content-center">
                <div style="width:100%;height:70px;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                    <input type="radio" name="flowerselect" v-model="response" value="I think they smell amazing 🤗"> <label>I think they smell amazing 🤗</label>
                </div>
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-5 mx-auto d-flex justify-content-center">
                <div style="width:100%;height:70px;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                    <input type="radio" name="flowerselect" v-model="response" value="🤧 Naaaah they smell like Gorilla booty"> <label>🤧 Naaaah they smell like Gorilla booty</label>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center pt-4">
            <button class="btn btn-lg btn-success" :disabled="response.length === 0" @click.prevent="submitResponse">Submit</button>
        </div>
    </form>
    <div v-if="successBanner2" class="col-10 mx-auto d-flex justify-content-between align-items-center">
        <img src="../assets/images/tusareve-dog.gif" class="img-fluid" style="width:100px;height:auto">
        <h3 class="pl-5">Pole sana nimekosea. Ni kama mimi ni kipofu wa mapua pia...</h3>
    </div>
    <div v-if="successBanner" class="col-10 mx-auto d-flex justify-content-between align-items-center">
        <img src="../assets/images/tusareve-dog.gif" class="img-fluid" style="width:100px;height:auto">
        <h3 class="pl-5">Karibu nidhani nimekosea. Ningedhani mimi ni kipofu wa mapua pia...</h3>
    </div>
</div>
<div style="height:12px"></div>
<br><br>
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
                    <div class="col-md-3">
                        <div class="d-flex justify-content-end">
                            <div class="d-flex align-items-center">
                                <router-link :to="{name: 'page4'}">
                                    <button class="btn btn-lg btn-primary" style="border:none; background-color:#58cc02!important">
                                        <span class="text-white" style="font-weight:bold">Let's Goooo</span>
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
    <div style="height:12px"></div>
<br><br>
    <div style="postion:absolute">
        <div class="container">
            <div class="col-12 mx-auto">
                <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-5">
                        <div class="">
                            <div class="d-flex align-items-center justify-content-between">
                                <div style="background-color: #fff; border-radius: 50%;" class="d-flex justify-content-center align-items-center">
                                    <img src="../assets/images/dog-sea.gif" class="img-fluid" style="width:120px;height:auto;border-radius:40px">
                                </div>
                                <div class="d-flex align-items-center pl-5">
                                    <h4 class="" style="color: #ea2b2b;font-weight:bold">🎵 I wanna gooooo hooooooome 🎵</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="d-flex justify-content-end">
                            <div class="d-flex align-items-center">
                                <router-link :to="{name: 'page4'}">
                                    <button class="btn btn-lg btn-primary" style="border:none; background-color:#ea2b2b!important">
                                        <span class="text-white" style="font-weight:bold">Tuendeleee tu</span>
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

<style scoped>
</style>