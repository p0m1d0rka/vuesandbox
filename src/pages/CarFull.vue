<template>
  <div>
    <h4>Car name: {{ $route.query.name }}</h4>
    <h5>Car year: {{ year }}</h5>
    <div class="scroll"></div>
    <h5 id="scroll">bottom</h5>
  </div>
</template>

<script>
export default {
  computed: {
    year () {
      return this.$route.query.year
    }
  },
  beforeRouteEnter(to, fromR, next) {
    console.log('before route enter')
    next()
  }
}
</script>

<style scoped>
  .scroll {
    height: 1000px;
    background-color: aqua;
  }
</style>