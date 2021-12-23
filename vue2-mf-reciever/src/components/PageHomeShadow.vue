<template>
  <div>
    <p>Lore ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      aspernatur dicta dignissimos dolor eos fugit, harum id ipsum molestias
      optio placeat repellat reprehenderit repudiandae similique sint soluta
      temporibus ullam vitae.</p>
  </div>
</template>

<script>
export default {
  name: "PageHomeShadow",
  mounted() {
    console.log(
        this.$root.$options,
        this.$root.$options.shadowRoot
    )
  }
}
</script>

<style>
p {
  color: rebeccapurple;
}
</style>
