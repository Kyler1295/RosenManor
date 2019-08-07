<template>
  <!-- Dynamicly opens the nav on mobile -->
  <header :class="{ 'navShow': navOpen }">
    <h1>Rosen Manor</h1>
    <!-- Router Navigation -->
    <nav class="navigation">
      <ul>
        <router-link tag="li" to="/">
          <span @click="navOpen = !navOpen">Home</span>
        </router-link>
        <router-link tag="li" to="/about">
          <span @click="navOpen = !navOpen">About</span>
        </router-link>
        <router-link tag="li" to="/wedding">
          <span @click="navOpen = !navOpen">Wedding</span>
        </router-link>
        <router-link tag="li" to="/gallery">
          <span @click="navOpen = !navOpen">Gallery</span>
        </router-link>
        <router-link tag="li" to="/plans">
          <span @click="navOpen = !navOpen">Plans</span>
        </router-link>
        <router-link tag="li" to="/calculator">
          <span @click="navOpen = !navOpen">Calculator</span>
        </router-link>
        <router-link tag="li" to="/contact">
          <span @click="navOpen = !navOpen">Contact</span>
        </router-link>
      </ul>
    </nav>
    <!-- Mobile Navigation -->
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
      // Controls the navigation. False = closed. True = open.
      navOpen: false
    };
  },
  computed: {
    // Handles the navigation button switch
    navIcon() {
      return this.navOpen ? faTimes : faBars;
    }
  },
  methods: {
    checkScroll() {
      console.log('checking');
      if (window.matchMedia("only screen and (min-width: 1200px)").matches) {
        if (window.pageYOffset > window.innerHeight - 200) {
          document.querySelector("header").style.height = "5vh";
          document.querySelector("h1").style.display = "none";
          let li = document.querySelectorAll("li");
          li.forEach(li => (li.style.color = "#000000"));
        } else {
          document.querySelector("header").style.height = "15vh";
          document.querySelector("h1").style.display = "block";
          let li = document.querySelectorAll("li");
          li.forEach(li => (li.style.color = "#ffffff"));
        }
      }
    }
  },
  created() {
    if (window.matchMedia("only screen and (min-width: 1200px)").matches) {
      this.navOpen = true;
    } else {
      this.navOpen = false;
    }
    window.addEventListener("scroll", this.checkScroll);
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 320px) {
  header {
    transition: 0.5s all ease-in;
    height: 0;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
    h1 {
      display: none;
    }
    nav {
      padding: 0 0 5rem 0;
    }
    ul {
      list-style-type: none;
      li {
        text-decoration: none;
        padding: 0.25rem 0;
        color: #000000;
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
      z-index: 20;
      cursor: pointer;
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
    z-index: 30;
    background-color: #eeeeee;
    height: 100vh;
  }
}

// Switching to set Header
@media only screen and (min-width: 1200px) {
  header {
    overflow: inherit;
    justify-content: center;
    h1 {
      text-align: center;
      text-decoration: underline;
      padding: 0 0 2rem 0;
      color: #eee;
      display: block;
    }
    .nav-holder {
      display: none;
    }
    .navigation {
      padding: 0 0 0 0;
      width: 80%;
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        width: 100%;
        li {
          cursor: pointer;
          text-decoration: none;
          color: #eee;
        }
        li:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .navShow {
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    height: 15vh;
  }
}
</style>