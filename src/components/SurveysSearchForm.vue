<template>
  <v-form v-model="valid" ref="form" lazy-validation >
      <v-layout row wrap justify-center class="my-5" elevation-9 ml-3 mr-3 pa-2>
        <v-flex xs12 sm3 pl-2 pr-2>
          <!-- <ClientAutoComplete label="ClientName" v-model="clientName" :rules="clientNameRules" required></ClientAutoComplete> -->
          <v-text-field label="ClientName" v-model="clientName"></v-text-field>
        </v-flex>        
        <v-flex xs12 sm3 pl-2 pr-2>
          <v-select label="Select Year" v-model="year" :items="yearList"></v-select>
        </v-flex>
        <v-flex xs12 sm6>
          <v-btn @click="submit" :disabled="!valid" >Search</v-btn>
          <v-btn @click="clear">Clear</v-btn>
          <v-btn @click="create" class="right">Create</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
</template>

<script>
import ClientAutoComplete from "./ClientAutoComplete";

export default {
  name: "surveys-search-form",
  data: () => ({
    valid: true,
    clientId: "",
    clientName: "",
    searchString: "",
    // clientNameRules: [
    //   v => !!v || "ClientName is required"
    // ],
    year: null,
    yearList: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        let searchVM = {
          ClientName: this.clientName,
          Year: this.year
        };
        this.$store.dispatch('fetchSurveys', searchVM);
      }
    },
    clear() {
      this.$refs.form.reset();
    },
    create(){

    }
  },
  components: { ClientAutoComplete }
};
</script>

<style>

</style>
