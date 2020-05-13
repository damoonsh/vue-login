<template>
  <v-flex sm8 offset-sm4>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="messageBody" label="Message" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn large @click="submit">submit</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messageBody: ""
    };
  },
  async created() {
    this.messages = (await axios.get("http://localhost:3000/messages")).data;
  },
  methods: {
    async submit() {
      try {
        this.$store.dispatch('newMessage', this.messageBody)
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped>
</style>