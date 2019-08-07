<template>
  <section class="about">
    <div class="about-hero">
      <header>
        <h2>About</h2>
      </header>
      <div class="hero-overlay"></div>
    </div>
    <article 
        class="history" 
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-once="true">
      <h2 class="title">Rosen Manor's History</h2>
      <hr>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aut culpa autem dolores aperiam quibusdam impedit expedita labore libero atque totam deserunt quia perspiciatis consectetur accusantium, quidem, officia rerum nam porro deleniti pariatur eveniet fugiat commodi cum. Sapiente, quam vel voluptas accusantium nemo aut dolor expedita consequatur sit error voluptates itaque hic facilis accusamus. Quibusdam et reiciendis sed veritatis iste iusto excepturi natus nihil, tempore maxime nulla cupiditate nobis ducimus sunt, rem distinctio, deserunt veniam.</p>
    </article>
    <section 
        class="facts"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-once="true">
      <h2>What Sets Us Apart.</h2>
      <hr>
      <ul>
        <li>Fact 1</li>
        <li>Fact 2</li>
        <li>Fact 3</li>
        <li>Fact 4</li>
      </ul>
    </section>
    <div 
        class="cta" 
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-once="true">
      <h2>Curious?</h2>
      <Button
        :btnText="'Contact Us To Learn More'"
        :btnLink="'/contact'"
        :btnWidth="'80%'"
      />
      <p>We're here for you.</p>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Button from '../components/Button';

export default {
  name: "about",
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.about {
  background-color: #eeeeee;
  width: 100vw;
  min-height: 100vh;
  .about-hero {
    background-image: url("../assets/Couple-Hand.jpg");
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
  .history {
    min-height: 60vh;
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
    h2 {
      width: 100%;
      white-space: nowrap;
    }
    p {
      width: 100%;
      padding: 1rem;
    }
    hr {
      width: 90%;
      margin: 0 auto;
      border-top: 2px solid black;
    }
  }
  .facts {
    min-height: 60vh;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      text-align: center;
    }
    ul {
      list-style-type: none;
      width: 80%;
      li {
        width: 100%;
        font-size: 1.25rem;
        padding: 1rem;
        font-weight: bold;
      }
    }
    hr {
      width: 70%;
      margin: 0 auto;
      border-top: 2px solid black;
    }
  }
  .cta {
    min-height: 40vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      width: 100%;
      text-align: center;
    }
    p {
      width: 100%;
      text-align: center;
    }
  }
}
</style>

