<template>
  <v-app>
    <v-navigation-drawer temporary v-model="drawer" fixed app >
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
              <v-list-tile-title class="text-xs-center">Navigation</v-list-tile-title>            
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="item in items" :key="item.url" :to="item.url">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              <v-list-tile-title  v-text="item.title"></v-list-tile-title>            
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="fixed">      
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-link :to="'/home'">
        <img :src="require('@/assets/android-icon-36x36.png')" alt="Marsh">
      </router-link>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-badge class="ml-5">
        <span slot="badge">6</span>
        <v-icon large color="grey lighten-1">account_box</v-icon>
      </v-badge>

      <v-badge color="red" class="ml-5">
        <span slot="badge">!</span>
        <v-icon large color="grey">mail</v-icon>
      </v-badge>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>    
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mockup: [
        {
          text: "Same but with checkboxes",
          children: [
            {
              text: "initially selected",
              selected: true
            },
            {
              text: "custom icon",
              icon: "fa fa-warning icon-state-danger"
            },
            {
              text: "initially open",
              icon: "fa fa-folder icon-state-default",
              opened: true,
              children: [
                {
                  text: "Another node"
                }
              ]
            },
            {
              text: "custom icon",
              icon: "fa fa-warning icon-state-warning"
            },
            {
              text: "disabled node",
              icon: "fa fa-check icon-state-success",
              disabled: true
            }
          ]
        },
        {
          text: "Same but with checkboxes",
          opened: true,
          children: [
            {
              text: "initially selected",
              selected: true
            },
            {
              text: "custom icon",
              icon: "fa fa-warning icon-state-danger"
            },
            {
              text: "initially open",
              icon: "fa fa-folder icon-state-default",
              opened: true,
              children: [
                {
                  text: "Another node"
                }
              ]
            },
            {
              text: "custom icon",
              icon: "fa fa-warning icon-state-warning"
            },
            {
              text: "disabled node",
              icon: "fa fa-check icon-state-success",
              disabled: true
            }
          ]
        },
        {
          text: "And wholerow selection"
        }
      ],
      drawer: false,
      fixed: true,
      items: [
        {
          icon: "home",
          title: "Home",
          url: "/home"
        },
        {
          icon: "description",
          title: "Surveys",
          url: "/surveys"
        },
        {
          icon: "assessment",
          title: "Reports",
          url: "/reports"
        }
      ],
      title: "Enrollment Service"
    };
  }
};
</script>
<style scoped>

</style>