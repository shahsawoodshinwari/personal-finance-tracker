<template>
  <div
    class="container-fluid py-5 text-white"
    style="background-color: #111827; min-height: 100vh"
  >
    <div class="container">
      <h1 class="text-center fw-bold mb-3">
        Help & <span class="text-primary">FAQ</span>
      </h1>

      <p class="text-center text-light mb-5">
        Quick answers for using your Personal Finance Tracker.
      </p>

      <div class="row g-4">
        <div class="col-md-6">
          <div class="p-4 rounded bg-dark h-100">
            <h3 class="mb-3">How do I add a transaction?</h3>
            <p>
              Go to <RouterLink to="/">Home</RouterLink>, fill in the form,
              choose Income or Expense, select a category, and save.
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="p-4 rounded bg-dark h-100">
            <h3 class="mb-3">Where is my balance?</h3>
            <p>
              The dashboard displays Total Income, Total Expenses, and Remaining
              Balance. These values update automatically whenever you add or edit
              transactions.
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="p-4 rounded bg-dark h-100">
            <h3 class="mb-3">Can I filter transactions?</h3>
            <p>
              Yes. Use the filter options on the Home page to view transactions
              by type or category.
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="p-4 rounded bg-dark h-100">
            <h3 class="mb-3">Still need help?</h3>
            <p>
              Visit the <RouterLink to="/contact">Contact</RouterLink> page and
              we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Helps',
}
</script>