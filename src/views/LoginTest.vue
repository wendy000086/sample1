<template>
  <div class="LoginTest form">
    <div class="tab-group" >
      <li v-for="(tab,index) in tabs" :key="tab.id" v-bind:class="{active: current === index}" >
         <a href="" @click.prevent="change(index)">{{tab.txt}}</a>
      </li>
    </div>
    <div class="tab-content">
        <singUp v-show=" index == num"></singUp>
        <login v-show=" index !== num"></login>
    </div>
  </div>
</template>



<script>
import '../../css/login.css'

import singUp from '../components/LoginTest/signUp'
import Login from '../components/LoginTest/LogIn'


export default {
  components:{
    singUp,
    Login
  },
  data: function() {
  return {
      current: null,
      tabs:[
        {txt:'Sign Up'},
        {txt:'Log In'}
      ],
      index:0,
      num:0
    };
  },
  created() {
    this.current = 0
  },
  methods: {
    change:function(index){
        this.current = index;
        this.tabs.forEach(function(_t) {
        _t.active = _t === index;
        });
        this.num = index;
    }
  

  },
}
</script>