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
              <v-list-tile-title v-text="item.title"></v-list-tile-title>            
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :fixed="fixed">
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-items><img :src="require('@/assets/android-icon-72x72.png')" alt="Marsh"></v-toolbar-items>
      <v-toolbar-title v-text="title"></v-toolbar-title>
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
  name: 'App',
  data () {
    return {
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'home',
          title: 'Home',
          url: '/home'
        },
        {
          icon: 'bubble_chart',
          title: 'Surveys',
          url: '/surveys'
        },
        {
          icon: 'bubble_chart',
          title: 'Reports',
          url: '/reports'
        }
      ],
      title: 'Enrollment Service'
    }
  },
  method: {
    redirect: function(url){
      window.location.href = url
    }
  }
}
</script>
<style scoped>

#app > div > nav > div > div.toolbar__items > img {
    display: inline-flex;
    vertical-align: middle;
    padding: 13px 0 13px;
    width: 35px;
}
</style>