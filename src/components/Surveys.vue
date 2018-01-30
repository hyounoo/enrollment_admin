<template>
  <div>
    <v-form v-model="valid" ref="form" lazy-validation >
      <v-layout row wrap justify-center class="my-5" elevation-9 ml-3 mr-3 pa-4>
        <v-flex xs12 sm3 pl-2 pr-2>
          <ClientAutoComplete v-model="searchString" :rules="clientNameRules" required></ClientAutoComplete>
        </v-flex>
        <v-flex xs12 sm3 pl-2 pr-2>
          <v-text-field label="E-mail" v-model="email" :rules="emailRules" required ></v-text-field>
          </v-flex>
        <v-flex xs12 sm3 pl-2 pr-2>
          <v-select label="Item" v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" required ></v-select>
          </v-flex>
        <v-flex xs12 sm3>
          <v-btn @click="submit" :disabled="!valid" >Search</v-btn>        
          <v-btn @click="clear">clear</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
    <v-layout row wrap justify-center class="my-5" elevation-9 ml-3 mr-3>
       <SurveyList></SurveyList> 
    </v-layout>
  </div>
</template>

<script>
import ClientAutoComplete from './ClientAutoComplete'
import SurveyList from './SurveyList'

export default {
  name: 'surveys',
  data: () => ({    
    valid: true,
    clientId: '',
    clientName: '',
    searchString: '',
    clientNameRules: [
      (v) => !!v || 'Name is required',
      (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          name: this.name,
          select: this.select,
          checkbox: this.checkbox
        })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  },
  components: { ClientAutoComplete, SurveyList }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
