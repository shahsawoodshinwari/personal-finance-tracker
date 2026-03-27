<template>
  <div class="container-fluid text-white p-4 min-vh-100" style="background-color: #111827;">

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
            <div class="card text-white bg-dark text-center">
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
          
          <!-- Left Colum  -->
          <div class="col-12 col-lg-6">
            <div class="card bg-dark text-white">
              <div class="card-body">
                <h4 class="mb-3">Add Transaction</h4>

                <input type="text" class="form-control mb-3" placeholder="Title" />

                <div class="row g-2 mb-3">
                  <div class="col-6">
                    <input type="number" class="form-control" placeholder="Amount" />
                  </div>
                  <div class="col-6">
                    <select class="form-select">
                      <option>Income</option>
                      <option>Expense</option>
                    </select>
                  </div>
                </div>

                <div class="row g-2 mb-3">
                  <div class="col-6">
                    <select class="form-select">
                      <option>Food</option>
                      <option>Rent</option>
                      <option>Salary</option>
                    </select>
                  </div>
                  <div class="col-6">
                    <input type="date" class="form-control" />
                  </div>
                </div>

                <button class="btn btn-success w-100">Add</button>
              </div>
            </div>
          </div>

          <!-- this is Filters right Column  -->
          <div class="col-12 col-lg-6">
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

                <button class="btn btn-secondary w-100">Reset</button>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div class="col-12">
       <div class="card-body bg-dark text-white text-center p-3">
            <h4 class="mb-2">Transactions</h4>
            <p class="mb-0">No transactions found</p>
          </div>
      </div>
    </div>
  </div>
</template>