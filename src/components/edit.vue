<template>
     <div class="card bg-dark text-white p-3">
        <h4>Edit Transaction</h4>

        <input  class="form-control mb-2" placeholder="Title" v-model="title">
        <input class="form-control mb-2" placeholder="Amount" v-model="amount">
        <input class="form-control mb-2" placeholder="Type" v-model="type">
        <input class="form-control mb-2" placeholder="Category" v-model="category">
        <input class="form-control mb-2" placeholder="Date" v-model="date">

        <button class="btn btn-success" @click="updateData">Update</button>
    </div>
</template>


<script>
export default{
    data(){
        return {
            
            
    }
    },
    methods: {  
        updateData() {
          
        }
    }
}

</script>