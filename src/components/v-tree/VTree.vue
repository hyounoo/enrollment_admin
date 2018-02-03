<template>
  <ul>
    <v-treeItem class="v-treeItem" :model="treeData">
    </v-treeItem>
    </ul>
</template>

<script>

import VTreeItem from './VTreeItem';

export default {
  name: "v-tree",
  data: function() {
    return {
      treeData: {
        name: "My Tree",
        icon: "fa fa-user-o",
        children: [
          { name: "hello", icon: "fas fa-hospital-o", },
          { name: "wat", icon: "fas fa-hospital-o", },
          {
            name: "child folder",
            icon: "fa fa-hospital-o",
            children: [
              {
                name: "child folder",
                icon: "fa-plus-square"
              },
              { name: "hello", icon: "fa-plus-square" },
              { name: "wat", icon: "fa-plus-square" }
            ]
          }
        ]
      }
    };
  },  
  components: {
      VTreeItem
  }
};
</script>

<style>

</style>

