<template>
  <v-app>
   <v-row>
    <v-col
      cols="12"
      sm="12"
      md="6"
      class="my-4"
    >
    <v-toolbar dense dark>
      <v-btn to="/">Messages</v-btn>
      <v-btn to="/newMessage">New Message</v-btn>
      <v-spacer></v-spacer>
      <v-btn >Login</v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
    </v-col>
   </v-row>
  </v-app>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>
