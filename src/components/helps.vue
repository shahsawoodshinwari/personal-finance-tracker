<template>
  <div class="container-fluid p-0 text-white" style="background-color: #111827; min-height: 100vh">
    <h1 class="text-center fw-bold">Help & <span class="text-primary">FAQ</span></h1>
    <p class="text-center">Quick answers for using your Personal Finance Tracker.</p>
    <div class="row">
      <div class="col-md-6">
        <h2>How do I add a transaction?</h2>
        <p>
          Go to <RouterLink to="/">Home</RouterLink>, fill in the form, choose Income or Expense,
          pick a category, and save.
        </p>
      </div>
      <div class="col-md-6">
        <h2>Where is my balance?</h2>
        <p>
          The dashboard shows Total Income, Total Expenses, and Remaining Balance. They update
          automatically when you add or edit transactions.
        </p>
      </div>
      <div class="col-md-6">
        <h2>Can I filter transactions?</h2>
        <p>Yes. Use the filter bar on the home page to narrow by type or category.</p>
      </div>
      <div class="col-md-6">
        <h2>Still need help?</h2>
        <p>
          Reach out on the <RouterLink to="/contact">Contact</RouterLink> page and we will get back
          to you.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'helps',
  components: {
    RouterLink,
  },
}
</script>
