<template>
  <section class="home">
    <div class="hero-image">
      <h1>Rosen Manor</h1>
      <p class="callout">Where your dreams come true, and our goal is to help.</p>
      <div class="image-overlay"></div>
    </div>
    <div class="content-section">
      <h2>Your Perfect Day.</h2>
      <p>tempora sapiente repellat. Nam qui similique, perferendis neque illum vitae provident quam corrupti cum.</p>
      <Button :btnText="'Call Out Text'" :btnLink="'/about'" :btnWidth="'50%'" />
    </div>
    <div class="icon-section">
      <section class="icon-segment">
        <font-awesome-icon :icon="CameraIcon" />
        <h3>Make Memories.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint.</p>
      </section>
    </div>
  </section>
</template>

<script>
import Button from "../components/Button";
import { faCameraRetro, faRing } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      CameraIcon: faCameraRetro,
      RingIcon: faRing
    };
  },
  name: "home",
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
// Homepage Styles
.home {
  // Hero Image Styles
  .hero-image {
    width: 100vw;
    min-height: 100vh;
    background-image: url("../assets/Home_Image.jpg");
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      width: 80%;
      color: #fff;
      text-align: center;
      opacity: 1;
      position: relative;
      z-index: 3;
    }
    p {
      width: 80%;
      color: #fff;
      text-align: center;
      opacity: 1;
      position: relative;
      z-index: 3;
    }
    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #33333375;
    }
  }
  // Content Section
  .content-section {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    h2 {
      border-bottom: 2px solid black;
      width: 70%;
      padding: 0 0 0.25rem 0;
    }
    p {
      margin: 0.4rem 0;
    }
  }
}
</style>

