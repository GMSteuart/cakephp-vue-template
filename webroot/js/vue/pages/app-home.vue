<template>
  <div>
    <v-layout column align-center justify-center>
      <h1>App Name</h1>
      <h4>Some nice app description</h4>
      <v-btn>App Action</v-btn>
    </v-layout>
  </div>
</template>
<script>
  import auth from '@/auth';

  export default {
    methods: {
    	playNow() {
    		if (auth.user.authenticated) {
			    // this.$router.push({ name: '' })
		    }
        else {
			    this.$router.push({ name: 'AppLogin' })
        }
      }
    }
  }
</script>
