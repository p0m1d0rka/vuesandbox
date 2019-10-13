export default {
  data () {
    return {
      names: ['vlad', 'max', 'elena'],
      searchName: ''
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.indexOf(this.searchName) !== -1
      })
    }
  }    
}