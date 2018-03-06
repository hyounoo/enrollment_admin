<template>    
  <div v-if="$store.state.loading">
    <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
  </div>
  <div v-else id="surveyPlan" class="flex xs12">
    <v-layout row wrap class="my-3" elevation-9 ml-3 mr-3 >      
        <v-flex xs12 sm3 pa-3 >
          <v-treeview v-model="treeData" :treeTypes="treeTypes" @selected="selected" :openAll="openAll" :contextItems="contextItems" @contextSelected="contextSelected"></v-treeview>
        </v-flex>
        <v-flex xs12 sm9 v-if="selectedNode && selectedNode.model.type == 'Top-up'" >
          <v-data-table :headers="headers" :items="premiums" rows-per-page-text="" :loading="loading">
            <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
            <template slot="items" slot-scope="props">
              <td class="text-xs-center sm3">{{ props.item.RowNumber }}</td>
              <td class="text-xs-center sm3">{{ props.item.PLTP_GENDERBASICCODE }}</td>
              <td class="text-xs-center sm3">{{ props.item.PLTP_AGE }}</td>
              <td class="text-xs-center sm3">{{ props.item.PLTP_PREMIUMAMOUNT }}</td>
            </template>  
          </v-data-table>
        </v-flex>
    </v-layout>
      <!-- <v-menu offset-y v-model="showMenu" absolute :position-x="x" :position-y="y">
        <v-list>
          <v-list-tile avatar v-for="item in items" v-bind:key="item.title" @click="nodeCommand(item.title)">
            <v-list-tile-action>
              <i v-if="item.icon" :class="item.icon" style="margin:0 auto;"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>            
          </v-list-tile>
        </v-list>
      </v-menu> -->
  </div>  
</template>

<script>
import VTreeview from "v-treeview";

export default {
  data() {
    return {
      surveyId: this.$route.params.id,
      loading: false,
      headers: [
        { text: "No.", value: "RowNumber", align: "center" },
        { text: "Sex", value: "PLTP_GENDERBASICCODE", align: "center" },
        { text: "Age", value: "PLTP_AGE", align: "center" },
        { text: "Premium", value: "PLTP_PREMIUMAMOUNT", align: "center" }
      ],
      valid: true,
      openAll: true,
      treeTypes: [
        {
          type: "#",
          max_children: 6,
          max_depth: 4,
          valid_children: [
            "FMM_EMPLOYEE",
            "FMM_SPOUSE",
            "FMM_CHILD",
            "FMM_SIBLING",
            "FMM_PARENT",
            "FMM_PARENT_IN_LAW"
          ]
        },
        {
          type: "FMM_EMPLOYEE",
          icon: "far fa-user",
          valid_children: ["Basic", "Top-up"]
        },
        {
          type: "FMM_SPOUSE",
          icon: "far fa-user",
          valid_children: ["Basic", "Top-up"]
        },
        {
          type: "FMM_CHILD",
          icon: "far fa-user",
          valid_children: ["Basic", "Top-up"]
        },
        {
          type: "FMM_SIBLING",
          icon: "far fa-user",
          valid_children: ["Basic", "Top-up"]
        },
        {
          type: "FMM_PARENT",
          icon: "far fa-user",
          valid_children: ["Basic", "Top-up"]
        },
        {
          type: "FMM_PARENT_IN_LAW",
          icon: "far fa-user",
          valid_children: ["Basic", "Top-up"]
        },
        {
          type: "Basic",
          icon: "far fa-hospital",
          valid_children: ["Top-up"]
        },
        {
          type: "Top-up",
          icon: "far fa-plus-square",
          valid_children: []
        }
      ],
      showMenu: false,
      x: 0,
      y: 0,
      treeData: [],
      selectedNode: null,
      contextItems: []
    };
  },
  computed: {
    premiums() {
      return this.$store.state.premiumsModule.premiums;
    }
  },
  methods: {
    getTypeRule(type) {
      var typeRule = this.treeTypes.filter(t => t.type == type)[0];
      return typeRule;
    },
    contextSelected(command) {
      switch (command) {
        case "Create Basic":
          var node = {
            text: "New Basic Plan",
            type: "Basic",
            children: []
          };
          this.selectedNode.addNode(node);
          break;
        case "Create Top-up":
          var node = {
            text: "New Top-up",
            type: "Top-up",
            children: []
          };
          this.selectedNode.addNode(node);
          break;
        case "Rename":
          this.selectedNode.editName();
          break;
        case "Remove":
          break;
      }
    },
    showContextMenu(e) {
      this.showMenu = false;
      this.x = 160;
      this.y = e.clientY;
      this.$nextTick(() => {
        this.showMenu = true;
      });
    },
    selected(node) {
      //console.log(node);
      this.selectedNode = node;
      this.contextItems = [];
      var typeRule = this.getTypeRule(this.selectedNode.model.type);
      typeRule.valid_children.map(function(type, key) {
        var childType = this.getTypeRule(type);
        var item = {
          title: "Create " + type,
          icon: childType.icon,
          type: childType
        };
        this.contextItems.push(item);
      }, this);

      this.contextItems.push({ title: "Rename", icon: "far fa-edit" });
      this.contextItems.push({ title: "Remove", icon: "far fa-trash-alt" });
      console.log('type: ' + this.selectedNode.model.type);
      console.log('id: ' + this.selectedNode.model.id);
      if (
        this.selectedNode.model.type == "Top-up" &&
        this.selectedNode.model.id
      ) {
        this.loading = true;
        this.$store
          .dispatch("premiumsModule/fetchPremiums", this.selectedNode.model.id)
          .then(() => (this.loading = false));
      } else {
        this.$store.dispatch("premiumsModule/clearPremiums");
      }
    }
  },
  mounted() {
    this.$el.addEventListener("contextCall", node => {
      this.treeNodeSelected(node);
    });

    this.$el.addEventListener("treeNodeSelected", node => {
      this.treeNodeSelected(node);
    });

    this.$store
      .dispatch("plansModule/fetchPlan", this.surveyId)
      .then(() => (this.treeData = this.$store.state.plansModule.plan.Plans));
  },
  components: {
    VTreeview
  }
};
</script>

<style>
#surveyPlan {
  margin: 0 auto;
}
.datatable .datatable__actions {
  justify-content: flex-start;
  /* padding-left: 10px; */
}

table.table thead th:not(:first-child) {
  padding: 0;
}
</style>
