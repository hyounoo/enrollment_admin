<template>
  <div>
    <v-select :label="label" autocomplete :loading="loading" cache-items clearable return-object
      v-model="select" :rules="rules"
      :items="items" item-text="Value" item-value="Key" 
      :search-input.sync="search" @change="changed">
      <template slot="selection" slot-scope="data">
        {{ data.item.Value }}
      </template>
      <template slot="item" slot-scope="data">
        <v-list-tile-content>
          <v-list-tile-sub-title v-html="data.item.Value"></v-list-tile-sub-title>
        </v-list-tile-content>        
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  props: ['value', 'rules', 'label'],
  data() {
    return {
      loading: false,
      search: null,
      select: null
    };
  },
  computed: {
    items() {
      return this.$store.state.clientsModule.clients;
    }
  },
  watch: {
    search(val) {
      val && this.querySelections(val);
    }
  },
  mounted(){    
    if (this.value){
      var client = { Key : this.value.Key, Value : this.value.Value };
      this.$store
          .dispatch("clientsModule/setClient", client)
          .then(() => this.select = this.$store.state.clientsModule.clients.filter(c => c.Key == this.value.Key)[0])
    }
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.$store
          .dispatch("clientsModule/fetchClients", v)
          .then(() => this.loading = false);
      }, 500);
    },
    changed(e) {
      this.$emit("input", e);
    }
  }
};
</script>

<style scoped>
  .primary--text{
    color: #000 !important;
  }
</style>