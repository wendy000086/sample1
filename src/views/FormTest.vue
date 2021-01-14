<template>
    <form class="formTest">
      <li>
        <label for="">What's ur name?</label>
        <input v-model="name" type="text" placeholder="input your name">
        <p>My name is: {{ name }}</p>
      </li><br>
      <li >
        <div class="form-check">
          <input type="checkbox" id="walle" value="瓦力" v-model="checkedNames" class="form-check-input">
          <label for="walle" class="form-check-label">瓦力</label>
        </div>
        <div class="form-check">
          <input type="checkbox" id="eve" value="伊芙" v-model="checkedNames" class="form-check-input">
          <label for="eve" class="form-check-label">伊芙</label>
        </div>
        <div class="form-check">
           <input type="checkbox" id="mike" value="大眼仔" v-model="checkedNames" class="form-check-input">
          <label for="mike" class="form-check-label">大眼仔</label>
        </div>
        <span>我喜歡的皮克斯角色: {{ checkedNames }}</span>
      </li><br>
      <li>
          <div class="form-check">
            <input type="radio" id="male" value="male" v-model="gender" class="form-check-input">
            <label for="male" class="form-check-label">Male</label>
          </div>
          <div class="form-check">
            <input type="radio" id="female" value="female" v-model="gender" class="form-check-input">
            <label for="female" class="form-check-label">Female</label>
          </div>
          <span>Gender: {{ gender }}</span>
      </li><br>
      <li> 
        <span>Selected: {{ selected }}</span><br>
        <select v-model="selected">
          <option disabled value="">请选择</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </li><br>
      <li>
        <span>Selected (for渲染option) : {{ selected2 }}</span><br>
        <select v-model="selected2">
          <option v-for="(option1,index) in options" :key="index"  :value="option1.value">
            {{ option1.text }}
          </option>
        </select>
      </li><br>
      <li>
        <label for="">自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：</label>
        <input  v-model.trim="msg">
         <p>輸入: {{ msg }}</p>
      </li><br>
      <li>
        <label for="">讓此輸入框的類型維持在數字，必須要使用 .number 修飾符</label><br>
        <!-- 類型為number -->
        {{typeof number}}
        <input v-model.number="number" type="number">
        <!-- 類型為string -->
        {{typeof number2}}
        <input v-model="number2" type="number">
      </li><br>
      <li>
        <label for="">加上 .lazy 修飾符後，更新的時間點會被延到 change 事件時</label><br>
        {{lazy}}
        <input placeholder="lazy" v-model.lazy="lazy">
        {{lazy2}}
        <input placeholder="normal" v-model="lazy2" class="mt10">
      </li>
    </form>
</template>

<style lang="scss">
.formTest{
  border-radius: 8px;
  border: 1px solid brown;
  margin: 0 auto;
  width: 1200px;
  padding: 30px;
  input, textarea {
    color: black;
  }
  input[type=checkbox], input[type=radio]{
    width: auto;
    height: auto;
  }
  .mt10{
    margin-top: 10px;
  }
}
  
</style>



<script>
import '../../static/bootstrap.css'


export default {
  data: function () {
    return{
      name:'',
      checkedNames:[],
      gender:'',
      selected: '',
      selected2: '',
      options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
     ],
     lazy:'',
     lazy2:'',
     msg:'',
     number:'',
     number2:'',
    }
  }
}
</script>