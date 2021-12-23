<template>
  <div>
    <h3>Dogs portal</h3>
    <div class="dogs-layout">
      <img v-for="i in 15" :key="i" src="https://placedog.net/250/250" alt="dog image">
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .dogs-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 16px;
  }
</style>
