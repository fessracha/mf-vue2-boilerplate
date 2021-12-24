<template>
  <div class="component">
    <h1>Page for testing inject micro-frontend !</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, quisquam.</p>

    <div class="block">
      <m-f-loader id="mf-scope" class="sdfdfs4455">
        <template v-slot:loading>
          loading microfrontend...
        </template>
        <template v-slot:error>
          microfrontend is not available :(
        </template>
      </m-f-loader>
    </div>

  </div>
</template>
<script>
import MFLoader from "./MFLoader";

export default {
  name: 'PadeDemo',
  props: ['name', 'base'],
  components: {
    MFLoader,
  },
  mounted() {
    console.log(this.$route);
    console.log(this.name, this.base);
  }
}
</script>

<style>
.component {
}
</style>
