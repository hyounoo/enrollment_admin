<template>
  <li class="tree-node" >
    <span class="toggle-icon" :class="{ 'empty-toggle': !isFolder }" :key="open">
      <i v-if="isFolder" :class="{'fas fa-caret-down' : this.open, 'fas fa-caret-right' : !this.open}" ></i>
    </span>    
    <span class="tree-icon" :class="{ 'empty-toggle': !icon }" :key="icon">
      <i v-if="icon" class="far" :class="icon" ></i>
    </span>
    <input type="radio" name="rad" v-model="checked" :id="model.id" :value="model.id">
    <label class="tree-text" :for="model.id" @click="toggle" @contextmenu.prevent="showContextMenu">{{model.text}}</label>
    <div class="tree-children">
      <ul v-show="open" v-if="isFolder">
        <v-treeItem class="v-treeItem" v-for="(child, index) in model.children" :key="index" 
        :model="child" :treeTypes="treeTypes" @selected="selected" @contextCall="contextCall">
        </v-treeItem>      
      </ul>
    </div>
  </li>
</template>

<script>

export default {
  name: "v-treeItem",
  props: ["model", "treeTypes"],
  data: function() {
    return {
      open: false,
      checked: null
    };
  },
  computed: {
    typeRule() {
      var typeRule = this.treeTypes.filter(t => t.type == this.model.type);
      return typeRule.length > 0 ? typeRule[0] : null;
    },
    isFolder() {
      return this.model.children && this.model.children.length;
    },
    icon() {
      return this.typeRule.icon;
    }
  },
  methods: {
    selected(node) {
      this.checked = null;
      this.checked = this.model.id;
      this.$emit('selected', node);
    },
    contextCall(e){
      this.$emit('contextCall', e);
    },
    showContextMenu(e){
      this.open = true;
      this.selected(this.model);
      this.contextCall(e);
    },
    toggle() {
      if (this.isFolder) {
        this.open = open ? true : !this.open;
      }       
      this.selected(this.model);
    },
    addChild() {
      this.model.children.push({
        name: "new stuff"
      });
    }
  }
};
</script>

<style scoped>
ul {
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
}
ul .tree-node {
  display: block;
  padding-left: 15px;
}
.empty-toggle {
  margin-right: 5px;
}
ul .tree-node :hover:before {
  background: rgba(190, 235, 255, 0.3);
}

ul .tree-node input[type='radio'] {
  display: none;
}
ul .tree-node input[type='radio']:checked + label:before {
  background: rgba(83, 215, 220, 0.3);
}

ul label {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
ul label:before {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  content: "";
  height: 21px;
  left: 0;
  position: absolute;
  right: 0;
}
</style>
