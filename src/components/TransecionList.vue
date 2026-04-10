<template>
    <div class="card bg-dark text-white p-3">

        <h4 class="mb-3 text-center fw-bold">Transactions</h4>
<div class="table-responsive-sm">
        <table class="table table-dark table-hover table-bordered text-center">
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
                <tr v-for="(item, index) in transactions" :key="index">
                    <td class=" text-nowrap" >{{ item.title }}</td>
                    <td class=" text-nowrap" >{{ item.amount }}</td>
                    <td class=" text-nowrap" >{{ item.type }}</td>
                    <td class=" text-nowrap" >{{ item.category }}</td>
                    <td class=" text-nowrap" >{{ item.date }}</td>
                    <td class="d-flex justify-content-center gap-2">
                        <button class="btn  btn-sm btn btn-outline-primary" @click="editTransaction">Edit</button>
                        <button class="btn  btn-sm btn btn-outline-danger"@click="deleteTransaction (index)"> Delete</button>
                    </td>
                </tr>

                <tr v-if="transactions.length === 0">
                    <td  colspan="6">No transactions found</td>
                </tr>
            </tbody>
        </table>
</div>
    </div>
</template>
<script>
export default{
   
     
   
}

</script>