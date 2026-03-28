<template>
  <div class="container-fluid p-0" style="background-color: #111827; min-height: 100vh;">
    <AppHeader />
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    Dashboard,
    AppHeader,
  }
}
</script>