<template>
  <section class="card-section">
    <div
      class="card-container"
      v-for="(card, index) in cards"
      :key="index"
      @click="flipCard(index)"
      v-fade-in
    >
      <div class="card" :class="{ 'card-flip': card.isFlipped }">
        <div class="card-face card-front">
          <img :src="card.image" :alt="card.title" class="card-image" />
          <h3 class="card-title">{{ card.title }}</h3>
        </div>
        <div class="card-face card-back">
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-text">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import champagne from "@/assets/champagne.svg";
import tripod from "@/assets/tripod.svg";
import frame from "@/assets/frame.svg";

export default {
  data() {
    return {
      cards: [
        {
          image: champagne,
          title: "ÜRITUSED",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          isFlipped: false,
        },
        {
          image: tripod,
          title: "STUUDIO",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          isFlipped: false,
        },
        {
          image: frame,
          title: "PORTREED",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          isFlipped: false,
        },
      ],
    };
  },
  methods: {
    flipCard(index) {
      this.cards[index].isFlipped = !this.cards[index].isFlipped;
    },
  },
};
</script>

<style scoped>
.card-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0;
  margin: 0 auto;
  max-width: 1200px;
  height: 50vh;
  align-items: center;
}

.card-container {
  flex: 0 0 230px;
  max-width: 230px;
  box-sizing: border-box;
  margin-bottom: 1rem;
}

.card {
  position: relative;
  height: 300px;
  width: 100%;
  perspective: 1000px;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
}

.card-face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #4f6c77;
}

.card-image {
  height: 70%;
  object-fit: cover;
  object-position: center;
}

.card-title {
  font-family: "Patua One", cursive;
  text-align: center;
}

.card-text {
  font-family: "Playfair Display", serif;
  text-align: center;
  width: 75%;
  text-align: justify;
}

.card-flip .card-front {
  transform: rotateY(-180deg);
}

.card-flip .card-back {
  transform: rotateY(0deg);
}

.card-front {
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
}

/* Responsive styles for large screens */
@media (min-width: 768px) {
  .card-container {
    margin-right: 70px;
  }

  .card-container:last-child {
    margin-right: 0;
  }
}

/* Responsive styles for mobile devices */
@media (max-width: 767px) {
  .card-section {
    padding-top: 20px;
    padding-bottom: 20px;
    height: auto;
  }

  .card-container {
    flex: 0 0 230px;
    max-width: 230px;
  }
}
</style>








