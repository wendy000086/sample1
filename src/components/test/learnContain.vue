<template>
  <div class="card-item" >
    <h2>{{ items.title }}</h2>
    <p>{{ items.info }}</p>
    <p><a class="btn btn-warning" href="#" role="button">{{ items.btntext }}</a></p>
  </div>
</template>

<script>
export default {
   props: {
       items:{
           title:String,
            info:String,
            btntext:String
       }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
