<template>
  <v-app>
    <v-card color="grey lighten-4" flat height="50px" tile>
      <v-toolbar flat>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <v-content>
      <Messages />
    </v-content>
  </v-app>
</template>

<script>
import Messages from "./components/Messages";

export default {
  name: "App",

  components: {
    Messages
  },

  data: () => ({
    //
  })
};
</script>
