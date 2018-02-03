<template>
  <li>
    <div>
      <i class="tree-toggle"></i>
      <span v-if="isFolder" @click="toggle">[{{ open ? '-' : '+' }}]</span>
      <span @dblclick="toggle">
        {{ model.name }}
      </span>      
    </div>
    <ul v-show="open" v-if="isFolder">
      <v-treeItem class="v-treeItem" v-for="(model, index) in model.children" :key="index" :model="model"> </v-treeItem>      
    </ul>
  </li>
</template>

<script>
export default {
  name: "v-treeItem",
  props: {
    model: Object
  },
  data: function() {
    return {
      open: false
    };
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    addChild: function() {
      this.model.children.push({
        name: "new stuff"
      });
    }
  }
};
</script>

<style scoped>
.v-treeItem {
  cursor: pointer;
  list-style-type: none;
  list-style-image: none;
}

.tree-toggle{
  width: 24px;
  height: 24px;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
