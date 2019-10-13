import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Car from './pages/Car.vue'
import Sanbox from './Sanbox.vue'
import CarFull from './pages/CarFull.vue'
import ErrorCmp from './pages/Error.vue'
import ResourceCmp from './pages/Resource.vue'
import Countervuex from './pages/Countervuex.vue'
// Lazyloading
import Cars from './pages/Cars.vue'
// const Cars = resolve => {
//   require.ensure(['./pages/Cars.vue'], ()=> {
//     resolve(
//       require('./pages/Cars.vue')
//     )
//   })
// }

export default new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition){
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {selector: to.hash}
    }
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars
    },
    {
      path: '/sandbox',
      component: Sanbox
    },
    {
      path: '/car/:id',
      component: Car,
      // вложенные роуты
      children: [
        {
          path: "full", // car/1/full
          component: CarFull,
          name: 'carFull',
          beforeEnter(to, from, next) {
            console.log('before enter')
            if(true){
              next(true)
            } else {
              next(false)
            }
          }
        }
      ]
    },
    {
      path: '/resource',
      component: ResourceCmp
    },
    {
      path: '/countervuex',
      component: Countervuex
    },
    {
      path: '/none',
      redirect: '/cars'
    },
    {
      path: '*',
      component: ErrorCmp
    }
  ]
})