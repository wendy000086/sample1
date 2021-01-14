<template>
  <div class="navbar">
    <div class="container ">
      <div>
        <a class="navbar-brand" href="#">Project name</a>
      </div>
      <div>
        <form class="navbar-form navbar-right form-inline">
          <div class="form-group">
            <input type="text" placeholder="Email" class="form-control">
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" class="form-control">
          </div>
          <button type="submit" class="btn btn-success">Sign in</button>
        </form>
      </div>
      <!--/.navbar-collapse -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navbar{
    background-color: #222;
    border-color: #080808;
    a{
      color: white;
    }
  }
</style>