<template>
  <div class="background">
    <div class="content" v-fade-in>
      <h1 class="title">
        <span class="title-text">FOTOGRAAFIA</span>
        <span class="title-space">&nbsp;</span>
        <span class="title-text">STUUDIO</span>
      </h1>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </div>
  <Intro />
  <CardsSection />
</template>


<script>
import Intro from "@/components/Introduction.vue";
import CardsSection from "@/components/CardsSection.vue";
export default {
  components: {
    Intro,
    CardsSection,
  },
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  transform: translateY(-100px); /* Add this line */
  width: 100%;
}

.background {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(
    100vh - 60px
  ); /* Adjust this value according to the height of your Navbar */
  background-image: url("@/assets/avaleht.jpg");
  background-size: cover;
  background-position: center;
}

.title {
  font-family: "Patua One", cursive;
  font-size: 2rem;
  color: #4f6c77;
  text-align: left;
  margin-left: 1rem;
  letter-spacing: 2px;
}

.title-text {
  position: relative;
  display: inline;
}

.title-text::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 3px;
  background-color: #a7c4d4;
}
.title-space {
  display: inline;
}

.description {
  font-family: "Patua One", cursive;
  font-size: 1.25rem;
  color: #4f6c77;
  margin-top: 1rem;
  margin-left: 1rem;
}

/* Responsive design for mobile */
@media (max-width: 768px) {
  .content {
    align-items: center;
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .title,
  .description {
    text-align: center;
    margin-left: 0;
  }
  .title-text {
    display: block;
  }

  .title-space {
    display: none;
  }
}

@media (min-width: 769px) {
  .content {
    align-items: flex-start;
    text-align: left;
    padding-left: calc(1rem + 150px); /* Change to 150px */
  }
  .title {
    position: relative;
  }

  .title::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 3px;
    background-color: #a7c4d4;
  }

  .title-text::after {
    display: none;
  }

  .title-space {
    display: inline;
  }
}
</style>
