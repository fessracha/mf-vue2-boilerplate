<template>
  <div>
    <slot v-if="status === 'loading'" name="loading" />
    <span v-else-if="status === 'success'">success</span>
    <slot v-else name="error" />
  </div>
</template>

<script>
export default {
  name: 'MFLoader',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      status: 'loading'
    }
  },
  mounted() {
    import('counter_app/myapp')
        .then(({ initCounterApp }) => {
          initCounterApp(this.$el)
          this.status = 'success';
        })
        .catch(e => {
          console.error('Error load MF');
          console.error(e);
          this.status = 'error';
        });
  }
}
</script>

<style scoped>

</style>
