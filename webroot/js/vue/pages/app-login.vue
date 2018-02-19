<template>
  <div>
    <v-layout>
      <user-login></user-login>
    </v-layout>
  </div>
</template>
<script>
  import UserLogin from '@/components/users/login';

  export default {
    components: {
      UserLogin,
    },
    data() {
      return {}
    }
  }
</script>
