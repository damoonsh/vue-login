<template>
  <div>
    <v-list subheader>
      <v-subheader class="diaplay-1">Messages</v-subheader>

      <v-list-item v-for="message in messages" :key="message">
        <v-list-item-content>
          <v-list-item-title v-text="message"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: ["Mamad", "nubari"]
    };
  }
};
</script>
<style scoped>
</style>