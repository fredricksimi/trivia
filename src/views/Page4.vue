<script setup>
import { ref } from 'vue'
const resp = ref('')
const response = ref(resp)
const banner = ref(false)
const successBanner = ref(banner)
function submitResponse(){
    if(response.value === "Weeh hebu tuendelee😹😹"){
        console.log(response.value)
        successBanner.value = true
    }
}
</script>
<template>
<div class="container d-flex align-items-center justify-content-center" style="height:80vh">
    <div>
        <h3 class="text-center">Beyond this point you should proceed in private. <br>Are you sure you are alone wherever you are?</h3>
        <form method="POST" class="mt-5">
            <div class="row">
                <div class="col-6 mx-auto d-flex justify-content-center">
                    <div style="width:100%;height:70px;background-color: #eee;border-radius: 20px;padding: 20px;" aria-checked="false" aria-disabled="false" role="radio" tabindex="0">
                        <input type="radio" v-model="response" value="Weeh hebu tuendelee😹😹"> <label>Weeh hebu tuendelee😹😹</label>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center pt-4">
                <button class="btn btn-lg btn-success" :disabled="response.length === 0" @click.prevent="submitResponse">Submit</button>
            </div>
        </form>
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
                                <router-link :to="{name: 'page5'}">
                                    <button class="btn btn-lg btn-danger">
                                        <span class="text-white" style="font-weight:bold">Haiya basi, don't say I didn't warn you 😂</span>
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