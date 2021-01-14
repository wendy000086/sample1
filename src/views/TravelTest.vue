<template>
  <div class="travel">
    <div class="header">
      <h1>高雄旅遊資訊網</h1>
      <v-select class="selectBox" placeholder="請選擇區域" :options="zoneArrs" v-model="title" @input="getData()"></v-select>
    </div>
    <div class="container">
      <hr>
      <!-- 內容 -->
      <article>
        <h3 class="district-title">{{title}}</h3>
          <div id="containCards" class="contain-cards">
            <div class="model-card" v-for="place in travelPlace.slice(pageStart, pageStart + countOfPage)" :key="place.id">
              <model-box :items="place" ></model-box>
            </div>
        </div>
      </article>

      <!-- 分頁 -->
      <div class="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-bind:class="{'disabled': (currPage === 1)}" @click.prevent="setPage(currPage-1)" ><a href="" class="page-link">&laquo;</a></li>
          <li class="page-item" v-for="n in totalPage" v-bind:class="{'active': (currPage === (n))}"  @click.prevent="setPage(n)" :key="n.id"><a href="" class="page-link">{{n}}</a></li>
          <li class="page-item" v-bind:class="{'disabled': (currPage === totalPage)}" @click.prevent="setPage(currPage+1)"><a href="" class="page-link">&raquo;</a></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
  @import "vue-select/src/scss/vue-select.scss";
</style>


<script>
  import '../../css/travel.css';

  import modelBox from '../components/TravelTest/modelBox'

  import Vue from "vue";
  import axios from 'axios';
  Vue.prototype.$axios = axios           


  // 畫面元件： vue選擇器
  import vSelect from "vue-select";

  // 註冊vue選擇器
  Vue.component("v-select", vSelect);


  export default {
    components: {
      modelBox,
    },

    data: function () {
      return {
        title:'高雄旅遊地',
        zoneArrs: [],
        travelPlace:[],
        filterSelect:[],
        countOfPage: 6,
        currPage: 1,
        
      }
    },

     watch:{
        title:function getData(){
        },

    },

    computed: {
      pageStart: function(){
          return (this.currPage - 1) * this.countOfPage;
        },

      //總頁數
      totalPage: function(){
        return Math.ceil(this.travelPlace.length / this.countOfPage);
      }
    },

    
    methods: {
      getData() {
        // console.log(this.title)
        axios.get('https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json').then(res => {
          let datas = res.data
         
          var zoneOptions = []
          for (var i = 0; i < datas.result.records.length; i++) {
            zoneOptions.push(datas.result.records[i].Zone);
          }

          //過濾重複地區
          var zoneArr = zoneOptions.filter(function (element, index, arr) {
            return arr.indexOf(element) === index;
          })
          this.zoneArrs = zoneArr
          
         this.travelPlace = datas.result.records
         
          if(this.title == "高雄旅遊地"){
              this.travelPlace = datas.result.records
          }else{
              //有select時 過濾出select的地區 
              var filterZone = this.travelPlace
              var select = this.title

              this.filterSelect = filterZone.filter(function(val){
                 return val.Zone === select;
               })
              this.travelPlace = this.filterSelect 
              console.log(this.filterSelect.length )
              
             
          }
        }, function (error) {
          console.log(error.statusText);
        })

        //頁面重置到第一頁
        this.currPage = 1 
        
      },

      //所選頁面
      setPage: function(idx){
        if( idx <= 0 || idx > this.totalPage ){
          return;
        }
        this.currPage = idx;
      },


    },
    mounted() {
      this.getData()

      
    }

  }
</script>