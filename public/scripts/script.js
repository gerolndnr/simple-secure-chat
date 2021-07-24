import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'
let socket = io();
let vm = new Vue({
    el: "#app",
    data: {
        typedKey: null,
        typedMessage: null,
        typedUsername: null,
        chatMessages: []
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

            const encryptedMessage = {
                author: this.typedUsername,
                content: CryptoJS.AES.encrypt(this.typedMessage, this.typedKey).toString(),
                date: "XX.XX.XXXX XX:XX",
            }

            const uncryptedMessage = {
                author: this.typedUsername,
                content: this.typedMessage,
                date: "XX.XX.XXXX XX:XX",
            }

            this.chatMessages.push(uncryptedMessage);
            this.typedMessage = "";

            socket.emit("chatMessage", encryptedMessage);
            const doc = this.$el.querySelector("#chatBody");

            doc.scrollTop = doc.scrollHeight;
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

socket.on("chatMessage", (message) => {
    console.log("Received chat message");

    const decryptedMessage = {
        author: message.author,
        content: CryptoJS.AES.decrypt(message.content, vm.typedKey).toString(CryptoJS.enc.Utf8),
        date: message.date
    }

    vm.chatMessages.push(decryptedMessage);
})