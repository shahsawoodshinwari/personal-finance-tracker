<template>
    <div class="container-fluid text-white ">

        <div class="row g-4">

            <div class="col-12">
                <div class="row g-3">
                    <div class="col-6 col-md-3">
                        <div class="card   bg-dark text-center text-white">
                            <div class="card-body">
                                <p class=" small mb-2">Total Income</p>
                                <h2 class="text-success mb-0">0.00</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="card  text-bg-dark  text-center">
                            <div class="card-body">
                                <p class="small mb-2">Total Expenses</p>
                                <h2 class="text-danger mb-0">0.00</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="card text-white bg-dark text-center">
                            <div class="card-body">
                                <p class="small mb-2">Remaining Balance</p>
                                <h2 class="text-success mb-0">0.00</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="card text-white bg-dark text-center">
                            <div class="card-body">
                                <p class=" small mb-2">Transactions</p>
                                <h2 class="mb-0  ">0</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- this is right and left colum -->
            <div class="col-12 ">
                <div class="row g-4">

                    <div class="col-12 col-lg-6 ">
                        <AddTransaction @data="receivechildcompData" />
                    </div>



                    <div class="col-12 col-lg-6">
                        <FilterBar @update-search="receiveDataFromChild" />
                    </div>



                </div>
            </div>

          <div class="col-12">
    <div class="card bg-dark text-white p-3">

        <h4 class="mb-3 text-center fw-bold">Transactions</h4>

        <table class="table table-dark table-bordered text-center">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in transactions" :key="index">
                    <td>{{ item.title }}</td>
                    <td>{{ item.amount }}</td>
                    <td>{{ item.type }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.date }}</td>
                    <td class="d-flex justify-content-center gap-2">
                        <button class="btn btn-primary btn-sm " @click="editTransaction">Edit</button>
                        <button class="btn btn-danger btn-sm"@click="deleteTransaction"> Delete</button>
                    </td>
                </tr>

                <tr v-if="transactions.length === 0">
                    <td  colspan="6">No transactions found</td>
                </tr>
            </tbody>
        </table>

    </div>
</div>




        </div>
        <div class="col-12 text-center text-white p-3 mt-4">
            <footer>
                <p>&copy; 2026 Personal Finance Tracker. All rights reserved.</p>
            </footer>
        </div>
    </div>
</template>

<script>
import edit from '@/components/edit.vue'
import FilterBar from '@/components/FilterBar.vue'
import AddTransaction from '@/components/AddTransaction.vue'

export default {
    components: {
        FilterBar,
        AddTransaction,
        edit
    },
    data() {
        return {
            transactions: [],
            
        }
    },
    methods: {
        receivechildcompData(value) {
            this.transactions.unshift(value)


        },
        deleteTransaction(index) {
            this.transactions.splice(index, 1)
        },
        editTransaction(index) {


        },
        receiveDataFromChild(value) {
            this.search = value.search
            this.category = value.category
            this.month = value.month
            this.type = value.type
        },




    },
    


}
</script>

