<script setup lang="ts">
</script>

<template>
  <nav class="navbar">
    <div class="navbar-content">
      <h2>Velox Marketplace</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: #333;
  padding: 20px 40px;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h2 {
  margin: 0;
  color: white;
}

ul {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: #667eea;
}
</style>