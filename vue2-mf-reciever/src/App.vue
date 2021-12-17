<template>
<main>
  <header class="header">
    <div class="container">
      header
    </div>
  </header>
  <div class="main-layout container">
    <aside class="sidebar">
      <nav class="nav-menu">
        <li class="nav-menu__item">
          <router-link to="/" class="nav-menu__link">Home</router-link>
        </li>
        <li class="nav-menu__item">
          <router-link to="/dogs" class="nav-menu__link">Dogs</router-link>
        </li>
        <li class="nav-menu__item">
          <router-link to="/demo" class="nav-menu__link">Demo micro-frontend</router-link>
        </li>
      </nav>
    </aside>
    <section class="page">
      <router-view></router-view>
    </section>
  </div>

  <footer class="footer">
    <div class="container">
      footer
    </div>
  </footer>
</main>
</template>
<script>

export default {
  components: {},
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

<style scoped>
main {
  font-size: 16px !important;
}

.header {
  width: 100%;
  background: antiquewhite;
  padding: 20px;
}

.main-layout {
  display: grid;
  grid-template-columns: 250px auto;
  grid-gap: 16px;
  min-height: calc(100vh);
}

.sidebar {
  background: lightgrey;
}

.page {
  padding: 16px;
}

.nav-menu {
  margin: 0;
  padding: 0;
}

.nav-menu__item {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-menu__link {
  padding: 20px;
  display: block;
  font-weight: bold;
  background: #cde7ff;
  border-bottom: 1px solid;
}

.footer {
  width: 100%;
  background-color: lightblue;
  padding: 20px;
}
</style>
