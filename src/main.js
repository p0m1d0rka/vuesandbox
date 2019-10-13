import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import ColorDirective from './color'
import List from './List.vue'
import router from './routes'
import App from './App.vue'
import VueResource from 'vue-resource'
import store from './store'

// Подключаем доп библиотеку(валидация)
Vue.use(Vuelidate)
// Подключаем роутер
Vue.use(VueRouter)
// import Car from './Car.vue'
Vue.use(VueResource)
Vue.http.options.root = "http://localhost:3000/"
Vue.http.interceptors.push(request => {
  request.headers.set('Auth', 'sometoken ' + Math.random())
})

// Глобальная регистрация компонента
// Vue.component('app-car', Car)

// создаем шину событий
export const eventEmitter = new Vue

// создаем свою директиву глобально
Vue.directive('colored', ColorDirective)

// создаем фильтр глобально
Vue.filter('uppercase', (value) => {
  return value.toUpperCase()
})

Vue.component('app-list', List)

Vue.mixin({
  beforeCreate() {
    console.log('before create')
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
})

