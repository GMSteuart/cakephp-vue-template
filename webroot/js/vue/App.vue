<template>
  <v-app toolbar>
    <router-view></router-view>
    <v-btn v-if="authenticated" @click="doLogout">Logout</v-btn>
    <toast></toast>
  </v-app>
</template>
<script>
  import auth from '@/auth';
  import { mapActions } from 'vuex';

  export default {
  	computed: {
		  authenticated() {
		  	return auth.user.authenticated;
      },
    },
  	methods: {
      ...mapActions({
      	logout: 'Users/logout',
      }),
  		doLogout() {
  			this.logout();
  			this.$router.push({ name: 'AppLogin' })
      }
    }
  }
</script>