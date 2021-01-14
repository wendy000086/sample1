<template>
  <div class="test">
    <navbar></navbar>
    <jumbotron></jumbotron>
    <container></container>
  </div>
</template>

<style lang="scss">

</style>

<script>
import navbar from '../components/test/navbar'

import jumbotron from '../components/test/jumbotron'

import container from '../components/test/container'

import '../../static/bootstrap.css'


export default {
  components:{
    navbar,
    jumbotron,
    container
  }
}
</script>