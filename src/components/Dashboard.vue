<template>
    <div class="container-fluid text-white p-4" >

        <div class="row g-4">

            <div class="col-12 ">
                <div class="row">
                    <div class="col-6 col-md-3 dashboard">
                        <div class="card bg-dark text-white text-center   rounded-3">
                            <div class="card-body py-4">
                                <p class=" small mb-2">Total Income</p>
                                <h2 class="fw-bold display-6 mb-0"
                                    :class="totalIncome > 0 ? 'text-success' : 'text-secondary'">
                                    {{ totalIncome }}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3 dashboard">
                        <div class="card  text-bg-dark  text-center">
                            <div class="card-body py-4">
                                <p class="small mb-2">Total Expenses</p>
                                <h2 class="fw-bold  display-6  mb-0"
                                :class="totalExpenses > 0 ? 'text-danger': 'text-secondary'">{{ totalExpenses }}</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3 dashboard">
                        <div class="card text-white bg-dark text-center">
                            <div class="card-body py-4">
                                <p class="small mb-2">Remaining Balance</p>
                                <h2 class="fw-bold  display-6  mb-0"
                                :class="remainingBalance > 0 ? 'text-success' : 'text-danger'">{{ remainingBalance }}</h2>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3 dashboard">
                        <div class="card text-white bg-dark text-center">
                            <div class="card-body py-4">
                                <p class=" small mb-2">Transactions</p>
                                <h2 class="fw-bold  mb-0 display-6 " 
                                :class="totalTransactions > 0 ? 'text-info': 'text-secondary'">{{ totalTransactions }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- this is right and left colum -->
            <div class="col-12">
                <div class="row">

                    <div class="col-12 col-lg-6 ">
                        <AddTransaction @addTransaction="receivechildcompData" />
                        
                    </div>



                    <div class="col-12 col-lg-6">
                        <FilterBar @search="receiveDataFromChild" />
                        
                    </div>



                </div>
            </div>

            <div class="col-12">
                <TransactionList :transactions="transactions" @deleteTransaction="deleteTransaction" />
            </div>




        </div>
        <div class="col-12 text-center text-white p-3 mt-4">
            <footer>
                <p class="small mb-0">&copy; 2026 Personal Finance Tracker. All rights reserved.</p>
            </footer>
        </div>
    </div>
</template>

<script>
import TransactionList from '@/components/TransactionList.vue'
import edit from '@/components/edit.vue'
import FilterBar from '@/components/FilterBar.vue'
import AddTransaction from '@/components/AddTransaction.vue'

export default {
    components: {
        FilterBar,
        AddTransaction,
        edit,
        TransactionList,
    },
    data() {
        return {
            transactions: [],
            search: '',
            category: '',
            month: '',
            type: '',



        }
    },


    mounted() {
        const data = localStorage.getItem("transactions")
        if (data) {
            this.transactions = JSON.parse(data)

        }
    },




    computed: {
        totalTransactions() {
            return this.transactions.length
        },
        // 1. Calculate Total Income
        totalIncome() {
            return this.transactions
                .filter(t => t.type === 'Income')
                .reduce((acc, t) => acc + Number(t.amount), 0);
        },
        // 2. Calculate Total Expenses
        totalExpenses() {
            return this.transactions
                .filter(t => t.type === 'Expense')
                .reduce((acc, t) => acc + Number(t.amount), 0);
        },
        // 3. Calculate Remaining Balance
        remainingBalance() {
            return this.totalIncome - this.totalExpenses;
        }
    },




    methods: {
        receivechildcompData(value) {
            this.transactions.unshift(value)
            localStorage.setItem("transactions", JSON.stringify(this.transactions))


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

<style>
.dashboard {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.dashboard:hover {
    /* zoom in */
    transform: scale(1.05); 
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}
</style>