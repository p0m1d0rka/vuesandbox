<template>
  <div>
    <h1 v-colored:background.font="'green'" v-if="visible">Parent: {{ carName }}</h1>
    <h1 v-colored:color.delay="'red'" v-if="visible">Parent: {{ carName }}</h1>
    <h2>With filer {{ carName | lowercase }} </h2>
    <h2>With filer {{ carName | uppercase }} </h2>
    <button @click="visible = !visible">Toogle</button>
    <app-counter></app-counter>
    <app-car 
      :carName="carName"
      :carYear="carYear"
      :changeFun="changeNameToAudi"
      @nameChanged="carName = $event"
      ><h1 slot="i1">inner1</h1><h2 slot="i2">inner2</h2></app-car>
      <input type="text" v-model="searchName">
    <ul>
      <li v-for="name in filteredNames">{{ name }}</li>
    </ul>
    <hr>
    <app-list></app-list>
    <hr>
    <hr>
    <h2>Form inputs</h2>
    <textarea v-model="textarea"></textarea>
    <p>{{ textarea }}</p>
    <div>
      <label>
        <input type="checkbox" value="one" v-model="checkboxes"> one
      </label>
      <label>
        <input type="checkbox" value="two" v-model="checkboxes"> two
      </label>
      <label>
        <input type="checkbox" value="three" v-model="checkboxes"> three
      </label>
      <hr>
      <ul>
        <li v-for="c in checkboxes">{{ c }}</li>
      </ul>
    </div>
    <div>
      <label>
        <input type="radio" value="one" v-model="radio"> one
      </label>
      <label>
        <input type="radio" value="two" v-model="radio"> two
      </label>
      <label>
        <input type="radio" value="three" v-model="radio"> three
      </label>
      <hr>
      <p>{{ radio }}</p>
    </div>    
    <div>
      <select v-model="select">
        <option 
          v-for="s in selects"
          >{{ s }}</option>
      </select>
      <p>{{ select }}</p>
    </div>
    <div>
      <input type="text" v-model.number="age">
      <p>{{ age }}</p>
    </div>
    <div>
      <app-onoff v-model="switched"></app-onoff>
      <h3 v-if="switched">Enabled</h3>
      <h3 v-else>disabled</h3>
    </div>
    <div class="container">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            class="form-control"
            :class="{'is-invalid': $v.email.$error}"
            v-model="email"
            @blur="$v.email.$touch()"
          >
          <div class="invalid-feedback" v-if="!$v.email.required">Это обязательное поле</div>
          <div class="invalid-feedback" v-if="!$v.email.email">Введите корректный email</div>          
          <div class="invalid-feedback" v-if="!$v.email.uniqEmail">Этот email уже существует</div>  
        </div>  
        <div class="form-group">
          <label for="password">password</label>
          <input 
            type="password" 
            id="password" 
            class="form-control"
            :class="{'is-invalid': $v.password.$error}"
            v-model="password"
            @blur="$v.password.$touch()"
          >
          <div class="invalid-feedback" v-if="!$v.password.minLength">Пароль должен быть больше 6 символов</div>          
        </div>     
        <div class="form-group">
          <label for="confirmPassword">confirm password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            class="form-control"
            :class="{'is-invalid': $v.confirmPassword.$error}"
            v-model="confirmPassword"
            @blur="$v.confirmPassword.$touch()"
          >
          <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Пароли не совпадают</div>          
        </div>        
        <button 
          class="btn btn-success" 
          type="submit"
          :disabled="$v.$invalid"
        >Отправить</button>       
        <pre>
          Объект валидации $v
          {{ $v }}
        </pre>  
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
// <!-- в $event приходит нужное событие и параметры -->
import Car from './Car.vue'
import Counter from './Counter.vue'
import ListMixin from './listMixin'
import OnOff from './Onoff.vue'
export default {
  name: 'app',
  mixins: [ListMixin],
  data () {
    return {
      carName: 'Ford',
      carYear: 2019,
      visible: true,
      textarea: 'init value for textarea',
      checkboxes: [],
      radio: '',
      defaultSelect: 'three',
      select: '',
      selects: ['one', 'two', 'three'],
      age: 20,
      switched: false,
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase()
    }
  },
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '40px'
      }
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    },
    onSubmit() {
      console.log('email', this.email)
      console.log('password', this.password)
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter,
    appOnoff: OnOff
  },
  watch: {
    age(value) {
      console.log(value)
    }
  },
  // из vuelidate
  validations: {
    email: {
      required,
      email,
      uniqEmail: function(newEmail) {
        if (newEmail == '') return true

        return new Promise((resolve, reject) => {
          setTimeout(()=>{
            const value = newEmail != 'test@mail.ru'
            resolve(value)
          },3000)
        })
      }
    },
    password: {
      minLength: minLength(6)
    },
    confirmPassword: {
      // sameAs: sameAs('password')
      sameAs: sameAs((vue) => {
        return vue.password
      })
    }
  }
}
</script>

<style>
textarea {
  height: 100px;
  width: 400px;
}
/* стиль что бы сохранять переносы строк, которые приходят из модели textarea */
p {
  white-space: pre;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
