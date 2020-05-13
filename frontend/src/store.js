import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import axios from "axios";

export default new Vuex.Store({
    state: {
        messages: []
    },
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages;
        },
        newMessage(state, message){
            state.messages.push(message);
        }
    },
    actions: {
        async getMessages({commit}) {
            let messages = (await axios.get("http://localhost:3001/messages")).data;
            commit('updateMessages', messages)
        },
        async newMessage({commit}, messageBody) {

        let msg = (await axios.post("http://localhost:3001/messages", {
            message: messageBody
          })).data;
          commit('newMessage', msg.message)
        }
    }
})
