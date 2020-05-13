<template>
  <v-flex sm8 offset-sm4>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Message</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
      {{messageBody}}
      
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      messageBody: ""
    };
  },
  async created() {
    this.messageBody = (await axios.get(`http://localhost:3001/messages/${this.$route.params.uid}`)).data;
  },
  methods: {

  }
};
</script>
<style scoped>
</style>