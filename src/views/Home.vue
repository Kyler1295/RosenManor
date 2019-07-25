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
    <PhotoSection :photoPath="Heart" />

    <!-- Section For Icon Callouts -->
    <div class="icon-section">
      <section class="icon-segment">
        <font-awesome-icon :icon="CameraIcon" />
        <h3>See Our Grounds.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint.</p>
        <Button :btnText="'See Our Gallery'" :btnLink="'/gallery'" :btnWidth="'50%'" />
      </section>
      <section class="icon-segment">
        <font-awesome-icon :icon="RingIcon" />
        <h3>Learn How We Help You Plan.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint.</p>
        <Button :btnText="'Find Out More'" :btnLink="'/wedding'" :btnWidth="'50%'" />
      </section>
      <section class="icon-segment">
        <font-awesome-icon :icon="DrinkIcon" />
        <h3>Find The Right Plan For You.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint.</p>
        <Button :btnText="'Find A Plan'" :btnLink="'/plans'" :btnWidth="'50%'" />
      </section>
    </div>

    <!-- Photo Section 2 -->
    <PhotoSection :photoPath="WeddingStairs" />

    <!-- Pricing Home Section -->
    <div class="pricing-section">
      <PricingCard :cardTitle="'Silver Plan'" :cardPrice="'$79'">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </PricingCard>
      <PricingCard :cardTitle="'Gold Plan'" :cardPrice="'$89'">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </PricingCard>
      <PricingCard :cardTitle="'Diamond Plan'" :cardPrice="'$99'">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </PricingCard>
    </div>

    <!-- Inbetween Photo Section 3 -->
    <PhotoSection :photoPath="CoupleSunset" />

    <!-- Calculator Section -->
    <div class="calculator-section">
      <h3>Worried About The Price?</h3>
      <p>Use our custom price calculator to make sure you can plan for your wedding, and your goals.</p>
      <Button :btnText="'Control  Your Wedding'" :btnLink="'/calculator'" :btnWidth="'60%'" />
    </div>

    <!-- Inbetween Photo Section 4 -->
    <PhotoSection :photoPath="CoupleHands" />

    <!-- Contact Section -->
    <div class="contact-callout">
      <h3>Want To Learn More?</h3>
      <Button :btnText="'Contact Us Now!'" :btnLink="'/contact'" :btnWidth="'70%'" />
      <h3>And Make Your Dream A Reality.</h3>
    </div>
  </section>
</template>

<script>
// imports
import Button from "../components/Button";
import PricingCard from "../components/PricingCard";
import PhotoSection from "../components/PhotoSection";
import {
  faCameraRetro,
  faRing,
  faGlassCheers,
  faAngleDoubleDown
} from "@fortawesome/free-solid-svg-icons";

// Image imports
import Heart from "../assets/Heart.jpg";
import CoupleSunset from "../assets/Couple-Sunset.jpg";
import CoupleHands from "../assets/Couple-Hand.jpg";
import WeddingStairs from "../assets/Wedding_Stairs.jpg";

export default {
  data() {
    return {
      CameraIcon: faCameraRetro,
      RingIcon: faRing,
      DrinkIcon: faGlassCheers,
      Arrow: faAngleDoubleDown,
      Heart,
      CoupleSunset,
      CoupleHands,
      WeddingStairs
    };
  },
  name: "home",
  components: {
    Button,
    PricingCard,
    PhotoSection
  }
};
</script>

<style lang="scss" scoped>
// Small Devices
@media only screen and (min-width: 320px) {
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
        transform: translate(-35%, 0%);
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
        svg {
          font-size: 1.5rem;
        }
      }
    }
    // Pricing Section
    .pricing-section {
      height: auto;
      padding: 1rem 0;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    // Calculator Section {
    .calculator-section {
      height: 60vh;
      padding: 1rem 0;
      background-color: #eee;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .contact-callout {
      height: 40vh;
      padding: 1rem 0;
      background-color: #eee;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
}

// Tablets
@media only screen and (min-width: 768px) {
  .home {
    .hero-image {
      background-size: cover;
    }
    .content-section {
      height: 30vh;
    }
    .icon-section {
      .icon-segment {
        svg {
          font-size: 2rem;
        }
        .btn {
          width: 35% !important;
        }
      }
    }
    .calculator-section {
      height: 40vh;
    }
  }
}

// Small Computers
@media only screen and (min-width: 1200px) {
  .home {
    h1 {
      display: none;
    }
    .hero-image {
      height: 95vh;
    }
    .pricing-section {
      flex-direction: row;
      width: 90vw;
      margin: 0 auto;
      justify-content: space-between;
      .pricing-card {
        width: 31.5%;
        padding: 2rem 0;
        margin: 0 0 0 0;
      }
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

