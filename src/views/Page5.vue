<script setup>
import { ref } from 'vue'
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/firebase'
const app = initializeApp(firebaseConfig);
const mydb = getFirestore(app)
const responses = ref([])
const resp1 = ref('')
const resp2 = ref('')
const response1 = ref(resp1)
const response2 = ref(resp2)
const showButton = ref(true)
const showB = ref(showButton)
const banner = ref(false)
const successBanner = ref(banner)
const pageFiveRef = collection(mydb, 'page-five')
async function submitResponse(){
    await setDoc(doc(pageFiveRef, 'chocolate'),{
        response: response1.value
    });
    await setDoc(doc(pageFiveRef, 'honey'),{
        response: response2.value
    }).then(function(){
        console.log(response1.value)
        console.log(response2.value)
        successBanner.value = true
        showB.value = false
    })
    // .then(function(){
    //     console.log(whatsnext.value)
    //     message.value = ''
    //     successBanner.value = true
    //     readOnly.value = true
    // })
    // console.log(response1.value)
    // responses.value.push(response1.value)
    // responses.value.push(response2.value)
    // console.log(responses.value)
    // successBanner.value = true
    // showB.value = false
}
</script>
<template>
<div class="container pt-3">
    <h1 class="text-center py-3" style="font-weight:bold">👉Sugar... 🍯</h1>
    <div class="d-flex justify-content-center">
        <img src="../assets/images/73VV.gif" class="img-fluid text-center" style="width:200px;height:auto">
    </div>
    <br><br>
    <form method="POST">
        <div class="pt-2">
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <h3 class="pb-2">1. Do you like chocolate? 🍫</h3>
                        <div class="col-12 mx-auto d-flex justify-content-center">
                            <div style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                                <input type="radio" v-model="response1" value="Nijipate 🙄"> <label>Nijipate 🙄</label>
                            </div>
                        </div>
                        <div class="col-12 pt-3 mx-auto d-flex justify-content-center">
                            <div style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                                <input type="radio" v-model="response1" value="Of course! I am a tall glass of hot chocolate 🤭"> <label>Of course! I am a tall glass of hot chocolate 🤭</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <h3 class="pb-2">2. Do you like honey? 🍯</h3>
                        <div class="col-12 mx-auto d-flex justify-content-center">
                            <div style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                                <input type="radio" v-model="response2" value="Oh baby, I taste like honey myself 🤤"> <label>Oh baby, I taste like honey myself 🤤</label>
                            </div>
                        </div>
                        <div class="col-12 pt-3 mx-auto d-flex justify-content-center">
                            <div style="width:100%;height:fit-content;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                                <input type="radio" v-model="response2" value="Ukiniangalia nakaa nyuki? 😫"> <label>Ukiniangalia nakaa nyuki? 😫</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="d-flex justify-content-center pt-4">
            <button class="btn btn-lg btn-success" :disabled="response1.length === 0 && response2.length === 0" @click.prevent="submitResponse">Submit</button>
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
                                <router-link :to="{name: 'page6'}">
                                    <button class="btn btn-lg btn-warning">
                                        <span style="font-weight:bold">Things are getting hot 🔥</span>
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