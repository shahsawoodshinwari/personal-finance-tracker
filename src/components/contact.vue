<template>

    <div class="container p-3">
        <h1 class="text-center fw-bold">Contact <span class="text-primary">Us</span></h1>

        <div class="row justify-content-center p-5">

            <div class="col-md-6 rounded-3 bg-dark text-white p-5 shadow-lg">

                <form @submit.prevent="submitForm" class="p-3">

                    <!-- Name -->
                    <div class="mb-3">

                        <label for="name" class="form-label">Name</label>

                        <input type="text"
                            class="form-control" id="name" placeholder="Your Name" v-model="form.name"
                            :class="errors.name ? 'is-invalid' : ''">

                        <div class="invalid-feedback" v-if="errors.name">
                            {{ errors.name }}
                        </div>

                    </div>

                    <!-- Email -->
                    <div class="mb-3">

                        <label for="email" class="form-label">Email</label>

                        <input type="email"class="form-control"id="email"placeholder="Your Email"v-model="form.email" 
                        :class="errors.email ? 'is-invalid' : ''">

                        <div class="invalid-feedback" v-if="errors.email">
                            {{ errors.email }}
                        </div>

                    </div>

                    <!-- Message -->
                    <div class="mb-3">

                        <label for="message" class="form-label">Message</label>

                        <textarea class="form-control"id="message" placeholder="Your Message" v-model="form.message" 
                        :class="errors.message ? 'is-invalid' : ''"></textarea>

                        <div class="invalid-feedback" v-if="errors.message">
                            {{ errors.message }}
                        </div>

                    </div>

                    <!-- Button -->
                    <button type="submit" class="btn btn-primary w-50 mt-4">
                        Send Message
                    </button>

                </form>

            </div>

        </div>

    </div>

</template>

<script>
import Swal from 'sweetalert2'
export default {

    name: "ContactView",

    data() {
        return {

            form: {
                name: '',
                email: '',
                message: ''
            },

            errors: {}

        }
    },

    methods: {

        submitForm() {

            this.errors = {}

            // Validation
            if (!this.form.name) {
                this.errors.name = "Name is required"
            }

            if (!this.form.email) {
                this.errors.email = "Email is required"
            }

            if (!this.form.message) {
                this.errors.message = "Message is required"
            }

            // Agar errors nahi hain
            if (
                !this.errors.name &&
                !this.errors.email &&
                !this.errors.message
            ) {

                Swal.fire({ 
                    icon: "success",
                    title: "Message Sent",
                    text: "Your message has been sent successfully",
                    showConfirmButton: false,
                    timer: 2500
                });

                // Clear Form
                this.form.name = ''
                this.form.email = ''
                this.form.message = ''
            }

        }

    }

}
</script>

<style scoped>

h1{
    margin-bottom: -20px;
}

</style>