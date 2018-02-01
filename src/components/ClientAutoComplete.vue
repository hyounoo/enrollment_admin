<template>
  <div>
    <v-select label="Client name" autocomplete :loading="loading" cache-items clearable return-object
      :items="items" item-text="Value" item-value="Key" :search-input.sync="search" @change="changed">
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
  props: ["value"],
  data() {
    return {
      loading: false,
      search: null
    };
  },
  computed: {
    items() {
      return this.$store.state.surveysModule.clients;
    }
  },
  watch: {
    search(val) {
      val && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.$store
          .dispatch("surveysModule/fetchClients", v)
          .then(() => (this.loading = false));
      }, 500);
    },
    changed(e) {
      this.$emit("input", e);
    }
  }
};
</script>