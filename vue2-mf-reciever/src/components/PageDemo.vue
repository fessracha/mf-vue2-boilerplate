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
  components: {
    MFLoader,
  },
  mounted() {
    // const url = 'http://127.0.0.1:3001';
    // fetch(`${url}/manifest.json`)
    // .then(response => {
    //   const json = response.json();
    //   json.then(manifest => {
    //     console.log(manifest);
    //
    //     import(`${url}/${manifest['main.js']}`)
    //         .then((response) => {
    //           console.log(response)
    //         })
    //         .catch(e => {
    //           console.error(e);
    //           this.status = 'error';
    //         });
    //
    //   })
    // })
  }
}
</script>

<style>
.component {
  padding: 15px;
  background: #cde7ff;
}
</style>
