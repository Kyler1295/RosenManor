// This is the main home landing page for the website.
<template>
  <section class="home">

    <!-- Hero Image -->
    <div class="hero-image">
      <h1>Rosen Manor</h1>
      <p class="callout">Where your dreams come true, and our goal is to help.</p>
      <div class="image-overlay"></div>
      <font-awesome-icon :icon="Arrow" class="scroll-arrow" />
    </div>

    <!-- First Main Callout Section -->
    <div class="content-section">
      <h2>Your Perfect Day.</h2>
      <p>tempora sapiente repellat. Nam qui similique, perferendis neque illum vitae provident quam corrupti cum.</p>
      <Button :btnText="'Call Out Text'" :btnLink="'/about'" :btnWidth="'50%'" />
    </div>

    <!-- Inbetween Photo Section -->
    <div class="photo-section"></div>
    
    <!-- Section For Icon Callouts -->
    <div class="icon-section">
      <section class="icon-segment">
        <font-awesome-icon :icon="CameraIcon" />
        <h3>See Our Grounds.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint.</p>
        <Button :btnText="'See Our Gallery'" :btnLink="'/gallery'" :btnWidth="'70%'" />
      </section>
      <section class="icon-segment">
        <font-awesome-icon :icon="RingIcon" />
        <h3>Learn How We Help You Plan.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint.</p>
        <Button :btnText="'Learn About Our Weddings'" :btnLink="'/wedding'" :btnWidth="'70%'" />
      </section>
      <section class="icon-segment">
        <font-awesome-icon :icon="DrinkIcon" />
        <h3>Find The Right Plan For You.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint.</p>
        <Button :btnText="'Find The Plan For You'" :btnLink="'/plans'" :btnWidth="'70%'" />
      </section>
    </div>
  </section>
</template>

<script>
// imports
import Button from "../components/Button";
import {
  faCameraRetro,
  faRing,
  faGlassCheers,
  faAngleDoubleDown
} from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      CameraIcon: faCameraRetro,
      RingIcon: faRing,
      DrinkIcon: faGlassCheers,
      Arrow: faAngleDoubleDown
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
    .scroll-arrow {
      position: absolute;
      bottom: 3%;
      left: 50%;
      color: white;
      animation: 1.5s ArrowAnimate infinite alternate;
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
  // Photo Section
  .photo-section {
    height: 40vh;
    width: 100%;
    background-image: url('../assets/Heart.jpg');
    background-position: center;
    background-size: cover;
  }
  // Icon Section
  .icon-section {
    height: 80vh;
    background-color: #eeeeee;
    padding: 1rem 0;
    .icon-segment {
      height: 33%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      padding: 1rem 0;
    }
  }
}

@keyframes ArrowAnimate {
  from {
    bottom: 6%;
  }
  to {
    bottom: 3%;
  }
}
</style>

