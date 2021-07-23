import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'

let vm = new Vue({
    el: "#app",
    data: {
        typedKey: null,
        typedMessage: null,
        typedUsername: null,
        chatMessages: [ // Filled with sample text, because connection to backend is not implemented yet
            { author: "Donald Duck", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam", date: "23.7.2021 14:21" },
            { author: "Dagobert Duck", content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et", date: "23.7.2021 14:50" }
        ]
    },
    methods: {
        sendMessage() {
            if(!this.typedMessage) {
                console.log("No message typed!");
                return;
            }
            if(!this.typedUsername) {
                console.log("No username typed!");
                return;
            }
            if(!this.typedKey) {
                console.log("No key typed!");
                return;
            }

            const newMessage = {
                author: this.typedUsername,
                content: this.typedMessage,
                date: "XX.XX.XXXX XX:XX",
            }

            this.chatMessages.push(newMessage);
            this.typedMessage = "";
        },
        saveData() {
            localStorage.setItem("username", this.typedUsername);
            localStorage.setItem("key", this.typedKey);
            console.log("Saved data to local storage!");
        }
    }
})

function loadData() {
    const username = localStorage.getItem("username");
    const key = localStorage.getItem("key");

    if(username) {
       vm.typedUsername = username;
    }
    if(key) {
        vm.typedKey = key;
    }
}

loadData();