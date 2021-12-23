<template>
  <div class="component">
    <h1>{{ title }}</h1>

    <p>count: <strong>{{ count }}</strong></p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci
      doloremque dolorum error et impedit inventore ipsum maiores nemo nostrum,
      odio, placeat quae quaerat quam quasi quidem quis rem tempora.</p>
  </div>
</template>

<script lang="js">
export default {
  name: 'Content',
  props: ['count'],
  data() {
    return {
      title: "Component in Action..",
    };
  },
};
</script>

<style>
.component {
  margin: 30px 0 0;
}

h1 {
  font-size: 24px;
  color: gray;
}

p {
  font-size: 18px;
  color: coral;
}
</style>
