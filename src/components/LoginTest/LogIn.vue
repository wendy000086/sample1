<template>
    <div id="login" class="">
        <h1>{{title}}</h1>
        <form class="logIn_form" v-show="show">
            <div class="field-wrap">
                <input class="login_account" type="email" placeholder="Email Address" v-model="logBox.logEmail" />
            </div>

            <div class="field-wrap">
                <input class="login_password" type="password" placeholder="Password" v-model="logBox.logPassword" />
            </div>

            <button type="button" id="login_btn" class="button button-block" @click.prevent="logIn()">Log In</button>
        </form>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios';
    Vue.prototype.$axios = axios


    export default {
        data:function() {
            return {
                logBox:{
                    logEmail:'',
                    logPassword:''
                },
                title:'Welcome Back!',
                show:true,
            }
        },
        methods:{
            logIn(){
                var self = this
                var logAccount = {
                      email:self.logBox.logEmail,
                    password:self.logBox.logPassword
                  };

                  axios
                .post('https://hexschool-tutorial.herokuapp.com/api/signin',logAccount)
                .then(response => {
                        console.log(response) ;
                    self.loginAlert(response);
                    if (response.data.message == "登入成功"){
                        self.title='登入成功！！';
                        self.show=false
                    }
                    },
                    
                )
                return
            },
             loginAlert:function(response){
                    if(this.logBox.logEmail==''||this.logBox.logPassword==""){
                            alert('請輸入帳號或密碼')
                        }else if (response.data.message == "登入成功"){
                            alert('帳號登入成功！！');
                        }else{
                            alert("帳號登入失敗！");
                        }
                                console.log(response) ;
                }
        }
    }
</script>