<template>
  <div>
    <label class="form-label">Search</label>
    <!-- Removed @input -->
    <input type="text" class="form-control mb-3" placeholder="search" v-model="search" />
  </div>
</template>

<script>
export default {
  data() {
    return { search: '' }
  },
  watch: {
    // Watches the 'search' data property for changes
    search() {
      this.sendData();
    }
  },
  methods: {
    sendData() {
      this.$emit('search', { search: this.search });
    }
  }
}
</script>
