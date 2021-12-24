<template>
  <div>
    <h3>Vue2 App</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
      asperiores autem commodi corporis cum deserunt, distinctio dolorum eaque
      eligendi eum excepturi facilis, fugiat harum illo ipsum laudantium magni
      maiores maxime molestiae nam nulla officiis omnis placeat praesentium
      quasi quia quisquam recusandae rem repellat sapiente temporibus voluptate
      voluptates voluptatibus. Doloremque, labore.</p>
    <router-view/>
    <!--    <Content :count="count"/>-->
    <!--    <Button @btnClick="inc"/>-->
  </div>
</template>

<script>
import Content from "./components/Content";
import Button from './components/Button';

export default {
  components: {
    Content,
    Button,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    inc() {
      this.count++;
    }
  }
};
</script>

<style>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
p {
  color: coral;
}
</style>
