<script setup>
import { ref } from 'vue';
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/firebase'
const app = initializeApp(firebaseConfig);
const mydb = getFirestore(app)
const whatsnext = ref('')
const message = ref(whatsnext)
const testareastyle = {
    "background-color":"#eee"
}
const banner = ref(false)
const successBanner = ref(banner)
const readd = ref(false)
const readOnly = ref(readd)
const pageTwoRef = collection(mydb, 'page-two')
async function submitResponse(){
    await setDoc(doc(pageTwoRef, 'whatyouthinkingnext'),{
        response: whatsnext.value
    }).then(function(){
        console.log(whatsnext.value)
        message.value = ''
        successBanner.value = true
        readOnly.value = true
    })
}
</script>

<template>
    <div>
        <div class="container">
            <br><br><br><br><br>
            <div class="row">
                <div class="col-3 d-flex justify-content-center align-items-center">
                    <img src="../assets/images/wink1.gif" class="img-fluid">
                </div>
                <div class="col-6 d-flex justify-content-center align-items-center">
                    <div>
                        <h4 class="pb-5 text-center"><b>Now that you're free, what are you thinking of doing next? 🤪🤪🤪</b></h4>
                        <form method="POST">
                            <textarea class="form-control" rows="10" 
                            :style="testareastyle" 
                            placeholder="Go crazy and let out your wild imagination..." 
                            v-model="message" :readonly="readOnly"></textarea>
                            <div class="d-flex justify-content-center pt-4">
                                <button class="btn btn-lg btn-success" @click.prevent="submitResponse" :disabled="message.length === 0">Submit 🚀</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center">
                    <img src="../assets/images/wink2.gif" class="img-fluid">
                </div>
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
                                        <router-link :to="{name: 'page3'}">
                                            <button class="btn btn-lg btn-primary" style="border:none; background-color:#58cc02!important">
                                                <span class="text-white" style="font-weight:bold">On to the Next 🏃‍♀️</span>
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
    </div>

</template>

<style scoped>
</style>