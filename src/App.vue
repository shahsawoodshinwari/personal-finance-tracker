<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Finance from '@/assets/finance-t.png'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <RouterLink class="navbar-brand fs-5 fw-bold" to="/">
        <img :src="Finance" alt="Finance Tracker Logo" class="finance" />
      </RouterLink>

      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/helps">Help</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/login">Login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/register">Register</RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <RouterView />
</template>

<style>
.navbar {
  height: 70px;
}

.finance {
  margin-top: 10px;
  width: 240px;
  height: 150px;
  object-fit: contain;
}
</style>
