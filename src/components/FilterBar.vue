<template>
    <!-- this is Filters right Column  -->
    <div class="card bg-dark text-white">
        <div class="card-body">
            <h4 class="mb-3">Filters</h4>

            <div class="row g-2 mb-3">
                <div class="col-6">
                    <label class="form-label">Type</label>
                    <select class="form-select" v-model="type">
                        <option>choose type</option>
                        <option>Income</option>
                        <option>Expense</option>
                    </select>
                </div>

                <div class="col-6">
                    <label class="form-label">Category</label>
                    <select class="form-select" v-model="category">
                        <option>choose category</option>
                        <option>Income</option>
                        <option>Expense</option>
                    </select>
                </div>
            </div>
            <div class="row g-2 mb-3">
                <div class="col-6">
                    <label class="form-label">Month</label>
                    <input type="month" class="form-control mb-3" v-model="month" />
                </div>
                <div class="col-6">
                    <label class="form-label">Search</label>
                    <input type="text" class="form-control mb-3" placeholder="Search" v-model="search" />
                </div>
            </div>

            <button class="btn btn-danger w-100">Reset</button>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      category: '',
      month: '',
      search: '',
      type: ''
    }
  },

  

  methods: {
    sendData() {
      this.$emit('update-search', {
        search: this.search,
        category: this.category,
        month: this.month,
        type: this.type
      })
    }
  }
}
</script>