<template>
  <form @submit.prevent="sendAddTransactionDataToParent" novalidate>

    <div class="card bg-dark text-white h-100">
      <div class="card-body d-flex flex-column">
        <h4 class="mb-3">Add Transaction</h4>
        <div class="">
          <div class="mb-3">
            <input type="text" class="form-control  " placeholder="Title" v-model="form.title"
              :class="errors.title ? 'is-invalid' : null" required />
            <div class="invalid-feedback" v-if="errors.title">
              {{ errors.title }}
            </div>
          </div>
        </div>

        <div class="row g-2 mb-3">
          <div class="col-6">
            <input type="number" class="form-control" placeholder="Amount" v-model="form.amount"
              :class="errors.amount ? 'is-invalid' : null" required />

            <div class="invalid-feedback" v-if="errors.amount">
              {{ errors.amount }}
            </div>
          </div>
          <div class="col-6">
            <select class="form-select " v-model="form.type" :class="errors.type ? 'is-invalid' : null" required>

              <option value="">Select Type</option>
              <option>Income</option>
              <option>Expense</option>
            </select>
            <div class="invalid-feedback" v-if="errors.type">
              {{ errors.type }}
            </div>
          </div>
        </div>

        <div class="row g-2 mb-3">
          <div class="col-6">
            <select class="form-select " v-model="form.category" :class="errors.category ? 'is-invalid' : null"
              required>
              <option value="">Select Category</option>
              <option>Food</option>
              <option>Rent</option>
              <option>Salary</option>
              <option>Transport</option>
              <option>Bills</option>
              <option>Shopping</option>
              <option>Health</option>
              <option>Education</option>
              <option>Other</option>
            </select>
            <div class="invalid-feedback" v-if="errors.category">
              {{ errors.category }}
            </div>
          </div>
          <div class="col-6">
            <input type="date" class="form-control " v-model="form.date" :class="errors.date ? 'is-invalid' : null"
              required />

            <div class="invalid-feedback" v-if="errors.date">
              {{ errors.date }}
            </div>
          </div>
        </div>
        <div class="d-flex gap-2 mt-4">
          <button class="btn btn-success w-50 " type="submit">Add</button>
          <button class="btn btn-danger w-50" type="reset" @click="resetForm">Reset</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Swal from 'sweetalert2'
export default {

  data() {
    return {
      form: {
        title: '',
        amount: '',
        type: '',
        category: '',
        date: '',
      },
      errors: {},
    };
  },
  methods: {
    sendAddTransactionDataToParent() {

      this.errors = {};

      if (!this.form.title) this.errors.title = 'Title is required';
      if (!this.form.amount) this.errors.amount = 'Amount is required';
      if (!this.form.type) this.errors.type = 'Type is required';
      if (!this.form.category) this.errors.category = 'Category is required';
      if (!this.form.date) this.errors.date = 'Date is required';
      // STOP if empty
      if (
        !this.form.title ||
        !this.form.amount ||
        !this.form.type ||
        !this.form.category ||
        !this.form.date
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill all fields before adding transaction!",
        });
        return;
      }


      this.$emit('add-transaction', {
        title: this.form.title,
        amount: this.form.amount,
        type: this.form.type,
        category: this.form.category,
        date: this.form.date,
      });
      Swal.fire({
        icon: "success",
        title: "Saved Successfully",
        text: "Your transaction has been added",
        showConfirmButton: false,
        timer: 2500
      });

      // Reset form fields

      this.form.title = '';
      this.form.amount = '';
      this.form.type = '';
      this.form.category = '';
      this.form.date = '';
    },
    resetForm() {
      this.form.title = '';
      this.form.amount = '';
      this.form.type = '';
      this.form.category = '';
      this.form.date = '';

    }
  },
};
</script>