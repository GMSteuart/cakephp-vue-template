<template>
  <div>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      light
      enable-resize-watcher
      absolute
      right
    >
      <v-list dense>
        <v-list-tile
          v-for="link in links"
          :key="link.route"
          @click="go(link.route)">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary">
      <v-toolbar-title class="white--text">App Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="white--text hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.route"
          flat class="white--text" @click="go(link.route)">{{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        drawer: false,
        links: [
          { route: 'AppHome', title: 'Home', icon: 'home' },
          { route: 'AppLogin', title: 'Login'}
        ]
      };
    },
    methods: {
      go(name) {
        this.$router.push({
          name
        });
      }
    }
  }
</script>
<style type="scss">

</style>