const app = Vue.createApp({
    data() {
        return {
            firstName: "JHON",
            lastName: "Done",
            email: "email@dafadsf.com",
            gender: "male",
            google: "www.google.com",
            clickCounter: true
        }
    },
    methods: {
        changeName() {
            if (this.clickCounter) {
                this.firstName = "Oguz"
                this.clickCounter = false
            } else {
                this.firstName = "jhon"
                this.clickCounter = true

            }

        }
    }

})

app.mount('#app')