<template>
    <!-- this is Filters right Column  -->
    <div class="card bg-dark text-white">
        <div class="card-body">
            <h4 class="mb-3">Filters</h4>

            <div class="row g-2 mb-3">
                <div class="col-6">
                    <label class="form-label">Type</label>
                    <select class="form-select">
                        <option>All</option>
                    </select>
                </div>

                <div class="col-6">
                    <label class="form-label">Category</label>
                    <select class="form-select">
                        <option>All</option>
                    </select>
                </div>
            </div>

            <label class="form-label">Month</label>
            <input type="month" class="form-control mb-3" />

            <button class="btn btn-danger w-100">Reset</button>
        </div>
    </div>
</template>