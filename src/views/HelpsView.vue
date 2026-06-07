<template>
  <div
    class="container-fluid p-0 text-white"
    style="background-color: #111827; min-height: 100vh"
>
    <helps />
  </div>
</template>

<script>
import helps from '@/components/helps.vue'

export default {
  name: 'HelpsView',
  components: {
    helps,
  },
}
</script>