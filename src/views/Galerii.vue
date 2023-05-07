<template>
  <div class="gallery-container">
    <div class="row" v-for="(rowImages, rowIndex) in imageRows" :key="rowIndex">
      <div
        class="image-container"
        :class="[
          image.class,
          {
            smaller: rowIndex === 1,
            larger: rowIndex === 3,
            smallerLast: rowIndex === 3 && imageIndex === 1,
          },
          { 'full-width': rowIndex === 2 },
          'image-container-' + rowIndex + '-' + imageIndex,
        ]"
        v-for="(image, imageIndex) in rowImages"
        :key="imageIndex"
      >
        <img class="image" :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      imageRows: [
        [
          {
            src: require("@/assets/blueBuilding.jpg"),
            alt: "Image 1",
            class: "image-container-1",
          },
          {
            src: require("@/assets/tree.jpg"),
            alt: "Image 2",
            class: "image-container-2",
          },
        ],
        [
          { src: require("@/assets/street.jpg"), alt: "Image 3" },
          { src: require("@/assets/buildings.jpg"), alt: "Image 4" },
          { src: require("@/assets/cafe.jpg"), alt: "Image 5" },
        ],
        [{ src: require("@/assets/stadium.jpg"), alt: "Image 6" }],
        [
          { src: require("@/assets/blueberries.jpg"), alt: "Image 7" },
          { src: require("@/assets/flower.jpg"), alt: "Image 8" },
        ],
      ],
    };
  },
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 250px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.row {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 16px;
}

.image-container {
  position: relative;
  overflow: hidden;
  height: 40vh;
  border-radius: 10px;
}

.image-container .image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-container-1 {
  flex-basis: 50%;
  margin-right: 8px;
}

.image-container-2 {
  flex-basis: 50%;
  margin-left: 8px;
}

.image-container.smaller {
  flex-basis: calc(33.3333% - 8px);
  margin: 0 4px;
}

.image-container.full-width {
  flex-basis: 100%;
}

.image-container.larger {
  flex-basis: 60%;
  margin-right: 8px;
}

.image-container.smaller-last {
  flex-basis: 40%;
  margin-left: 8px;
}

/* Mobile styles */
@media (max-width: 768px) {
  .gallery-container {
    padding: 0 25px;
  }

  .row {
    flex-direction: column;
    justify-content: flex-start;
  }

  .image-container {
    flex-basis: 100%;
    margin: 0;
  }

  .image-container + .image-container {
    margin-top: 25px;
  }

  .row .image-container {
    margin-right: 0;
    margin-left: 0;
  }
}
</style>
