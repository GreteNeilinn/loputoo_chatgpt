<template>
  <section class="introduction">
    <div class="intro-left" v-fade-in>
      <h2 class="intro-title">Tutvustus</h2>
    </div>
    <div class="intro-right" v-fade-in>
      <p class="intro-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Introduction",
};
</script>




<style scoped>
.introduction {
  display: flex;
  background-color: #a7c4d4;
  min-height: 50vh;
  color: white;
}

.intro-left,
.intro-right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.intro-title {
  font-family: "Patua One", cursive;
  font-size: 2rem;
  padding: 1rem; /* Add padding here */
  letter-spacing: 3px;
}

.intro-text {
  font-family: "Playfair Display", serif;
  font-size: 1.25rem;
  text-align: justify;
  padding: 3rem; /* Add padding here */
}

/* Responsive design for mobile */
@media (max-width: 768px) {
  .introduction {
    flex-direction: column;
  }

  .intro-left,
  .intro-right {
    width: 100%;
  }

  .intro-text {
    padding-top: 1rem; /* Add padding here */
  }
  .intro-title {
    text-align: center; /* Add this line */
  }
}
</style>
