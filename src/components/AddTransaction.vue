<template>
  <form @submit.prevent="sendAddTransactionDataToParent" novalidate>

    <div class="card bg-dark text-white">
      <div class="card-body">
        <h4 class="mb-3">Add Transaction</h4>
        <div class="">
          <input type="text" class="form-control mb-3 " placeholder="Title" v-model="title" required />
          <!-- <div class="invalid-feedback">Title required</div> -->
        </div>

        <div class="row g-2 mb-3">
          <div class="col-6 ">
            <input type="number" class="form-control   " placeholder="Amount" v-model="amount" required />
            <!-- <div class="invalid-feedback">Amount required</div> -->
          </div>
          <div class="col-6">
            <select class="form-select " v-model="type" required>

              <option>Income</option>
              <option>Expense</option>
            </select>
            <!-- <div class="invalid-feedback">Select type</div> -->

          </div>
        </div>

        <div class="row g-2 mb-3">
          <div class="col-6">
            <select class="form-select " v-model="category" required>

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
            <!-- <div class="invalid-feedback">Select category</div> -->
          </div>
          <div class="col-6">
            <input type="date" class="form-control " v-model="date" required />
            <!-- <div class="invalid-feedback">Select date</div> -->
          </div>
        </div>

        <button class="btn btn-success w-100" type="submit">Add</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {

  data() {
    return {
      title: '',
      amount: '',
      type: 'Income',
      category: 'Food',
      date: ''
    }

  },
  methods: {
   
    sendAddTransactionDataToParent() {
      this.$emit('data', {
        title: this.title,
        amount: this.amount,
        type: this.type,
        category: this.category,
        date: this.date
      });


      this.title = '';
      this.amount = '';
      this.type = 'Income';
      this.category = 'Food';
      this.date = '';



    },


  }
}
</script>