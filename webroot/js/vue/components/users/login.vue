<template>
  <div>
    <h3>Login</h3>
    <v-text-field
      name="email"
      label="Email"
      id="email"
      v-model="user.email"
    ></v-text-field>
    <v-text-field
      name="password"
      label="Password"
      id="password"
      type="password"
      v-model="user.password"
      @keyup.enter="doLogin({ email, password })"
    ></v-text-field>
    <v-btn color="grey" @click="$router.push({ name: 'UserRegister' })">Register</v-btn>
    <v-btn color="orange" @click="doLogin">Login</v-btn>
  </div>
</template>
<script>
  import auth from '@/auth';
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
      	user: {
      		// todo: return to null
		      email: 'dev@appname.com',
		      password: 'dev'
        }
      };
    },
    methods: {
	    ...mapActions({
		    login: 'Users/login',
	    }),
      doLogin() {
      	this.login(this.user)
          .then(() => {
      	    // todo: change user login redirect
            this.$router.push({
              // name: 'Lobby'
            });
          });
      }
    }
  };
</script>
