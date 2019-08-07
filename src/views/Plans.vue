<template>
  <section class="plans">
    <div class="plans-hero">
      <header>
        <h2>Plans</h2>
      </header>
      <div class="hero-overlay"></div>
    </div>
    <div class="plans-container">
      <FullPlan :planTitle="'Silver Plan'">
        <template v-slot:shown-content>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repudiandae reprehenderit officia ipsa quos alias fuga, nesciunt totam vel veniam ad exercitationem velit eum! Soluta?</p>
        </template>
        <template v-slot:hidden-content>
          <p>This Content is Hidden Until Clicked.</p>
        </template>
      </FullPlan>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import FullPlan from '@/components/FullPlan.vue';

export default {
  name: "plans",
  components: {
    FullPlan
  }
};
</script>

<style lang="scss" scoped>
.plans {
  background-color: #eeeeee;
  width: 100vw;
  min-height: 100vh;
  .plans-hero {
    background-image: url("../assets/Couple-Sunset.jpg");
    background-position: (18%, 50%);
    background-size: cover;
    height: 90vh;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      color: white;
      position: relative;
      z-index: 10;
      font-size: 3rem;
    }
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #333333;
      opacity: 0.3;
    }
  }
}
</style>

