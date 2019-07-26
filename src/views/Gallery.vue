<template>
  <section class="gallery">
    <div class="gallery-hero">
      <header>
        <h2>Gallery</h2>
      </header>
      <div class="hero-overlay"></div>
    </div>
    <div class="gallery-holder">
      <img
        class="gallery-photo"
        @click="galleryBoxSwitch(photo.key)"
        v-for="photo in photos"
        :key="photo.key"
        :src="photo.path"
        :alt="photo.alt"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-once="true"
      />
    </div>
    <div class="gallery-box" :style="{ display: galleryBox }">
      <img :src="photos[i].path" :alt="photos[i].alt" />
      <font-awesome-icon icon="times" class="font-awesome-icon" @click="galleryBoxSwitch" />
      <div class="previous-arrow" @click="imageChange('previous')">
        <font-awesome-icon icon="arrow-left" class="font-awesome-icon" />
      </div>
      <div class="next-arrow" @click="imageChange('next')">
        <font-awesome-icon icon="arrow-right" class="font-awesome-icon" />
      </div>
    </div>
  </section>
</template>

<script>
// Image Imports
import Heart from "../assets/Heart.jpg";
import CoupleSunset from "../assets/Couple-Sunset.jpg";
import CoupleHands from "../assets/Couple-Hand.jpg";
import WeddingStairs from "../assets/Wedding_Stairs.jpg";

import {
  faTimes,
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "gallery",
  data() {
    return {
      faTimes,
      faArrowLeft,
      faArrowRight,
      i: 0,
      galleryBox: "none",
      photos: [
        {
          path: Heart,
          alt: "Love",
          key: 0
        },
        {
          path: CoupleSunset,
          alt: "Sunset",
          key: 1
        },
        {
          path: CoupleHands,
          alt: "Couples Hands",
          key: 2
        },
        {
          path: WeddingStairs,
          alt: "Wedding Couple Walking Down Stairs",
          key: 3
        }
      ]
    };
  },
  methods: {
    galleryBoxSwitch(index) {
      isNaN(index) ? (this.i = 0) : (this.i = index);
      this.galleryBox === "none"
        ? (this.galleryBox = "flex")
        : (this.galleryBox = "none");
    },
    imageChange(arrowClicked) {
      if (arrowClicked === "next") {
        this.i >= this.photos.length - 1 ? (this.i = 0) : this.i++;
      } else {
        this.i === 0 ? (this.i = this.photos.length - 1) : this.i--;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  background-color: #eeeeee;
  width: 100vw;
  min-height: 100vh;
  .gallery-hero {
    background-image: url("../assets/Wedding_Stairs.jpg");
    background-position: center;
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
      opacity: 0.5;
    }
  }
  .gallery-holder {
    min-height: 100vh;
    width: 100%;
    padding: 3rem 1rem;
    .gallery-photo {
      width: 100%;
      padding: 1rem 0;
      cursor: pointer;
    }
  }
  .gallery-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #33333390;
    z-index: 15;
    justify-content: center;
    align-items: center;
    img {
      width: 90%;
      margin: 0 0 0 5%;
      height: auto;
      pointer-events: none;
    }
    .font-awesome-icon {
      position: fixed;
      top: 3.5%;
      right: 10%;
      color: white;
      font-size: 1.5rem;
    }
    .previous-arrow {
      position: fixed;
      top: 70%;
      left: 0;
      height: 10%;
      background-color: #000000;
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      .font-awesome-icon {
        color: white;
        position: static;
        padding: 0;
      }
    }
    .next-arrow {
      position: fixed;
      top: 70%;
      right: 0;
      height: 10%;
      background-color: #000000;
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      .font-awesome-icon {
        color: white;
        position: static;
        padding: 0;
      }
    }
  }
}
</style>
