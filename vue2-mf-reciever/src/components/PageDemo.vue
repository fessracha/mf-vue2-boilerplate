<template>
  <div>
    <h3>Page for testing inject micro-frontend</h3>
    <!--MF wrapper-->
    <div id="mf-scope"></div>
    <div v-if="mfStatus === 'loading'">loading microfrontend...</div>
    <div v-if="mfStatus === 'error'">microfrontend is not available :(</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mfStatus: 'init'
    }
  },
  mounted() {
    this.mfStatus = 'loading';

    import('counter_app/initCounterApp')
        .then(({ initCounterApp }) => {
          initCounterApp('#mf-scope')
          this.mfStatus = 'success';
        })
        .catch(e => {
          console.log('Error load MF');
          this.mfStatus = 'error';
        });
  }
}
</script>
