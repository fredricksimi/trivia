<script setup>
import {ref} from 'vue'
import back3 from '../assets/images/back3.gif'
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/firebase'
const app = initializeApp(firebaseConfig);
const mydb = getFirestore(app)
const msg = ref('')
const message = ref(msg)
const sform = ref(true)
const showForm = ref(sform)
const styles = {
    'height':'100vh'
}
const styles2 = {
    'height':'100vh',
    'background': `url(${back3})`,
    'background-repeat': 'repeat',
}
const pageEightRef = collection(mydb, 'page-eight')
async function submitResponse(){
    await setDoc(doc(pageEightRef, 'anyotherrequests'),{
        response: message.value
    }).then(function(){
        console.log(message)
        showForm.value = false
        message.value = ''
    })
}
</script>
<template>
    <div :style="showForm ? styles : styles2" class="d-flex justify-content-center align-items-center">
        <div class="container" v-if="showForm">
            <div class="row pt-3">
                <h3 class="text-center">Any other requests...</h3>
                <div class="col-md-8 mx-auto">
                    <h4 class="text-center pb-4">Tufungie na <del><b>maombi</b></del> maneno matamu matamu ya dhambi😋</h4>
                    <form action="" method="post">
                        <textarea class="form-control pt-3" rows="10" style="background-color: #eee;border-radius: 13px;"
                        v-model="message" 
                        placeholder="Type whatever you want to request or anything at all..."></textarea>
                        <div class="d-flex justify-content-center pt-4">
                            <button class="btn btn-lg btn-primary" :disabled="message.length === 0" @click.prevent="submitResponse">Ni hayo tu kwa sasa 🤭</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div>
            <img v-if="!showForm" src="../assets/images/happy.gif" class="img-fluid">
            <h4 v-if="!showForm" class="text-center pt-3" style="font-weight:bolder">You can close this window</h4>
        </div>
        
    </div>
    
</template>