<template>
  <header :class="{ 'navShow': navOpen }">
    <nav class="navigation">
      <ul>
        <router-link tag="li" to="/">
          <span @click="navOpen = !navOpen">Home</span>
        </router-link>
        <router-link tag="li" to="About">
          <span @click="navOpen = !navOpen">About</span>
        </router-link>
        <router-link tag="li" to="Wedding">
          <span @click="navOpen = !navOpen">Wedding</span>
        </router-link>
        <router-link tag="li" to="Gallery">
          <span @click="navOpen = !navOpen">Gallery</span>
        </router-link>
        <router-link tag="li" to="Plans">
          <span @click="navOpen = !navOpen">Plans</span>
        </router-link>
        <router-link tag="li" to="Calculator">
          <span @click="navOpen = !navOpen">Calculator</span>
        </router-link>
        <router-link tag="li" to="Contact">
          <span @click="navOpen = !navOpen">Contact</span>
        </router-link>
      </ul>
    </nav>
    <aside class="nav-holder" @click="navOpen = !navOpen">
      <font-awesome-icon :icon="navIcon" class="font-awesome-icon" />
    </aside>
  </header>
</template>

<script>
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      navOpen: false
    };
  },
  computed: {
    navIcon() {
      return this.navOpen ? faTimes : faBars;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  transition: 0.5s all ease-in;
  height: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  ul {
    list-style-type: none;
    li {
      text-decoration: none;
      padding: 0.25rem 0;
    }
  }
  .nav-holder {
    position: fixed;
    bottom: 3%;
    right: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: darkslategray;
    border-radius: 100%;
    width: 5vh;
    height: 5vh;
    cursor: pointer;
    z-index: 10;
    .font-awesome-icon {
      font-size: 1rem;
    }
  }
}
.navShow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #eeeeee;
  height: 100vh;
}
</style>

