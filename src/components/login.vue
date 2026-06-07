<template>
    <div class="min-vh-100 d-flex align-items-center justify-content-center">
      <div class="card border-0 shadow-lg p-4 p-md-5 rounded-4 " style="max-width: 450px; width: 100%; margin-top: -73px;">
        
        <!-- Header -->
        <div class="text-center">
          <h1 class="fw-bold text-dark">
            Welcome Back
          </h1>
  
          <p class="text-secondary ">
            Sign in to your account
          </p>
        </div>
  
        
        <form>
          
          
          <div class="mb-4">
            <label class="form-label fw-medium text-dark">
              Email Address
            </label>
  
            <input
              type="email"
              class="form-control py-3 rounded-3"
              placeholder="Enter your email"
            />
          </div>
  
         
          <div class="mb-4">
            <label class="form-label fw-medium text-dark">
              Password
            </label>
  
            <input
              type="password"
              class="form-control py-3 rounded-3"
              placeholder="Enter your password"
            />
          </div>
  
          
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="remember"
              />
  
              <label
                class="form-check-label text-secondary"
                for="remember"
              >
                Remember me
              </label>
            </div>
  
            <a
              href="#"
              class="text-decoration-none fw-semibold text-primary"
            >
              Forgot Password?
            </a>
          </div>
  
          <!-- Button -->
          <button
            type="submit"
            class="btn btn-primary w-100 py-3 rounded-3 fw-semibold"
          >
            Login
          </button>
        </form>
  
       
        <p class="text-center text-secondary mt-4 mb-0">
          Don't have an account?
  
          <a
            href="#"
            class="fw-semibold text-decoration-none text-primary"
          >
            Create Account
          </a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
  }
  </script>