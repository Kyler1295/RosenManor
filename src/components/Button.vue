<template>
  <router-link tag="a" :to="btnLink" class="btn" :style="{ width: btnWidth }">{{btnText}}</router-link>
</template>

<script>
export default {
  props: ["btnText", "btnLink", "btnWidth"]
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #ffffff;
  padding: 0.4rem;
  background-color: darkslategray;
  border-radius: 15px;
  border: 1px solid black;
  text-align: center;
  margin: 0.3rem 0;
}
</style>
