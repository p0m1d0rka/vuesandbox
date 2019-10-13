<template>
  <div>
    <h2>Counter {{ counter }}</h2>
    <h3>Counter {{ computedCounter }}</h3>
    <button class="btn" @click="addOne">Add</button>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter.counter
    },
    computedCounter() {
      return this.$store.getters.computedCounter
    }
  },
  methods: {
    addOne () {
      // this.$store.state.counter += 1
      // this.$store.commit('changeCounter', 1)
      this.$store.dispatch('asyncChangeCounter',1)
    }
  }
}
</script>

<style scoped>

</style>