<template>
  <div class="container">
    <h1>Lorem ipsum dolor sit amet.</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      aspernatur dicta dignissimos dolor eos fugit, harum id ipsum molestias
      optio placeat repellat reprehenderit repudiandae similique sint soluta
      temporibus ullam vitae.</p>

<!--    <shadow-root>-->
      <page-home-shadow/>
<!--    </shadow-root>-->
  </div>
</template>

<script>
import PageHomeShadow from "./PageHomeShadow";
export default {
  name: "PageHome",
  components: {PageHomeShadow}
}
</script>

<style scoped>

</style>
