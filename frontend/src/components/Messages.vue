<template>
  <v-flex sm8 offset-sm4>
    <v-card>
      <v-list subheader>
        <v-toolbar dark>
          <v-toolbar-title>Messages</v-toolbar-title>
        </v-toolbar>

        <v-list-item v-for="(message, index) in this.$store.state.messages" :key="message" :to="'message/'+index" >
          <v-list-item-content>
            <v-list-item-title v-text="message"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch('getMessages', this.messageBody);
  }
};
</script>
<style scoped>
</style>