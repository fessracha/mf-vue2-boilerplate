<template>
  <div>
    <h3>Page for testing inject micro-frontend</h3>
    <!--MF wrapper-->
    <div id="mf-counter"></div>
  </div>
</template>
<script>
import { initCounterApp } from 'counter_app/initCounterApp';
export default {
  mounted() {
    initCounterApp('#mf-counter');
  }
}
</script>
