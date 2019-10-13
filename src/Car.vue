<template>
  <div class="car">
    <slot name="i1"></slot>
    <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
    <p>Year: {{ carYear }}</p>
    <button @click="changeName">Change name</button>
    <button @click="changeFun">Change from parent</button>
    <button @click="updateCounter">Update counter</button>
    <slot name="i2"></slot>
  </div>
</template>

<script>
import {eventEmitter} from "./main.js"
export default {
  // props: ['carName', 'carYear'],
  // Валдация типа входного параметра

  // props: {
  //   'carName': String,
  //   'carYear': Number
  // },
  props: {
    carName: {
      type: String,
      // required: true,
      default: 'Default name'
    },
    carYear: Number,
    changeFun: Function
    // counter: Number
  },
  methods: {
    changeName() {
      // this.carName = "Mazde",
      // Уведомляем компоненты, экспортируем события
      this.$emit('nameChanged', "Mazda")
    },
    updateCounter(){
      // this.$emit('counterUpdated', this.counter + 1)
      eventEmitter.$emit("counterUpdated", 3)
    }
  },
  computed: {
    reverseName() {
      return this.carName.split('').reverse().join('')
    }
  }
  // data() {
  //   return {
  //   }
  // }
}
</script>

<style scoped>
  .car {
    border: 1px solid black;
  }
  .car h3 {
    margin-bottom: 5px;
  }
</style>