<template>
    <!-- this is Filters right Column  -->
<div class="card bg-dark text-white ">
        <div class="card-body">
            <h4 class="mb-3">Filters</h4>

            <div class="row g-2 mb-3">
                <div class="col-6">
                    <label class="form-label">Type</label>
                    <select class="form-select" v-model="type">
                        <option value="">choose type</option>
                        <option>Income</option>
                        <option>Expense</option>
                    </select>
                </div>

                <div class="col-6">
                    <label class="form-label">Category</label>
                    <select class="form-select" v-model="category">
                        <option value="">choose category</option>
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
                </div>
            </div>
            <div class="row g-2 mb-3">
                <div class="col-6">
                    <label class="form-label">Month</label>
                    <input type="month" class="form-control mb-3" v-model="month" />
                </div>
                <div class="col-6">
                    <label class="form-label">Search</label>
                    <input type="text" class="form-control mb-3" placeholder="Search" v-model="search"
                        @input="sendData" />
                </div>
            </div>
<div
    class="d-flex gap-2">       
            <button class="btn btn-success w-50 " @click="addFilter">Add Filter</button>
            <button class="btn btn-danger w-50" @click="resetFilters">Reset</button>
        </div>
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


// watch: {
//     type() {
//         this.sendData()
//     },
//     category() {
//         this.sendData()
//     },
//     month() {
//         this.sendData()
//     },
//     search() {
//         this.sendData()
//     }
// },
    methods: {
        sendData() {
            this.$emit('search', {
                search: this.search,
                category: this.category,
                month: this.month,
                type: this.type
            })
        },
        resetFilters() {
            this.category = ''
            this.month = ''
            this.search = ''
            this.type = ''
            this.sendData()
        }
    }
}
</script>