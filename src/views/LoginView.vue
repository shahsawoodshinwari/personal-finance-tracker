<template>
    <div class="container-fluid p-0 text-white" style="background-color: #111827; min-height: 100vh;">
        <Login />
    </div>
</template>

<script>
import Login from '@/components/login.vue'

export default {
  name: 'LoginView',
  components: {
    Login,
  },
}
</script>
