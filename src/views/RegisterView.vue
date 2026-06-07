<template>
    <div class="container-fluid p-0 text-white" style="background-color: #111827; min-height: 100vh;">
        <Register />
    </div>
</template>

<script>
import Register from '@/components/register.vue'

export default {
  name: 'RegisterView',
  components: {
    Register,
  },
}
</script>
