<template>
  <div class="wrapper">
    <!-- Header Section -->
    <AppHeader />
    <main>
      <!-- Main Router Section -->
      <router-view></router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import AOS from "aos";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  created() {
    AOS.init();
  }
};
</script>

<style lang="scss">
@media only screen and (min-width: 320px) {
  // Base Styles
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 18px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    width: 80%;
  }
  p,
  a,
  span,
  i,
  strong,
  blockquote,
  li {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    width: 80%;
  }

  // App.vue Styles
  main {
    width: 100vw;
    min-height: 100vh;
    height: auto;
  }
}
@media only screen and (min-width: 768px) {
  html {
    font-size: 22px;
  }
}
</style>
