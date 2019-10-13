<template>
  <div>
    <h1>Car id {{ id }}</h1>
    <button class="btn btn-sm btn-default" @click="goBackToCars">Back</button>
    <hr>
    <!-- <router-link 
      class="btn btn-info mt-2"
      tag="button"
      :to="'/car/' + id + '/full'"
    >Full info</router-link> -->
    <router-link 
      class="btn btn-info mt-2"
      tag="button"
      :to="{name: 'carFull', params: {id: id}, query: {name: 'mazda', year: 2000}, hash: '#scroll'}"
    >Full info</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$router.currentRoute.params['id']
    }
  },
  watch: {
    $route (toR, fromR) {
      this.id = toR.params['id']
    }
  },methods: {
    goBackToCars() {
      this.$router.push('/cars')
    }
  },
  beforeRouteLeave (to, fromR, next) {
    console.log('beforeRouterLeave')
    if (window.confirm("Вы точно хотите покинуть?")){
      next(true)
    } else {
      next(false)
    }
  }
}
</script>

<style scoped>

</style>