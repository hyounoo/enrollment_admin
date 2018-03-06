<template>
  <v-form v-model="valid" ref="form" lazy-validation >    
      <v-layout row wrap justify-center class="my-5" elevation-9 ml-3 mr-3 pa-3>
        <v-flex xs12 sm3 pl-2 pr-2>
          <ClientAutoComplete label="ClientName" v-model="client"></ClientAutoComplete>
        </v-flex>        
        <v-flex xs12 sm3 pl-2 pr-2>
          <v-select label="Select Year" v-model="year" :items="yearList" clearable></v-select>
        </v-flex>
        <v-flex xs12 sm6 pt-2>
          <v-btn @click="submit" :disabled="!valid" >Search</v-btn>          
          <v-btn @click="create" :to="'/survey/0'" class="right">Create</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
</template>

<script>
import ClientAutoComplete from './ClientAutoComplete';

export default {
  name: 'surveys-search-form',
  data: () => ({
    valid: true,
    client: null,
    year: null,
    checkbox: false
  }),
  computed: {
    yearList() {
      return this.$store.state.yearsModule.years;
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        let searchVM = {
          ClientId: this.client? this.client.Key: null,
          Year: this.year
        };

        this.$store.dispatch('setLoadingStatus', true);
        this.$store
          .dispatch('surveysModule/fetchSurveys', searchVM)
          .then(() => this.$store.dispatch('setLoadingStatus', false));
      }
    },
    create() {}
  },
  components: { ClientAutoComplete }
};
</script>

<style>

</style>
