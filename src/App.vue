<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/cars" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>

          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/sandbox">Sandbox</router-link>
          </li> -->
          <router-link tag="li" class="nav-item" to="/sandbox" active-class="active">
            <a class="nav-link">Sandbox</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/resource" active-class="active">
            <a class="nav-link">Resource</a>
          </router-link>      
          <router-link tag="li" class="nav-item" to="/countervuex" active-class="active">
            <a class="nav-link">Countervuex</a>
          </router-link>                
        </ul>
      </div>
    </nav>    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>