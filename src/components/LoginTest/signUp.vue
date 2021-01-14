<template>
    <div id="signup"  >
        <h1>Sign Up for Free</h1>
        <form @submit.prevent="signUp">
            <div class="field-wrap">
                <input class="sign_account" type="email" placeholder="Email Address" v-model='setBox.setEmail' />
            </div>

            <div class="field-wrap">
                <input class="sign_password" type="password" placeholder="Set A Password" v-model='setBox.setPassword' />
            </div>

            <button type="submit" id="signup_btn" class="button button-block">Get Started</button>

        </form>
    </div>
</template>




<script>
    import Vue from 'vue'
    import axios from 'axios';
    Vue.prototype.$axios = axios

    export default {
        data: function() {
            return {
                setBox:{
                    setEmail:'',
                    setPassword:''
                },
                ajax: undefined            };
        },

        methods: {
            
            signUp(){
                var self = this
                // var setPara = new FormData()
                // setPara.append('email',self.setBox.setEmail)
                // setPara.append('password',self.setBox.setPassword)
                  var signAccount = {
                      email:self.setBox.setEmail,
                    password:self.setBox.setPassword
                  };
                axios
                .post('https://hexschool-tutorial.herokuapp.com/api/signup',signAccount)
                .then(response => {

                    self.sweetAlert(response)

                        },
                    
                )
              
                return
            },
              sweetAlert:function(response){
                    if(this.setBox.setEmail==''||this.setBox.setPassword==""){
                            alert('請輸入帳號或密碼')
                        }else if (response.data.message == "帳號註冊成功"){
                            alert('帳號註冊成功！！');
                            this.setBox.setEmail = '' ;
                            this.setBox.setPassword = ''
                        }else if (response.data.message == "此帳號已被使用"){
                            alert("此帳號已被使用！");
                        }else{
                            alert("帳號註冊失敗！");
                        }
                                console.log(response) ;

                        
                }
        }

    }
</script>