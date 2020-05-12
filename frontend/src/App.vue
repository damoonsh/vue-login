<template>
  <v-app>
    <v-toolbar  max-height:100>
      <v-btn >Messages</v-btn>
      <v-spacer></v-spacer>
      <v-btn >Login</v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>
