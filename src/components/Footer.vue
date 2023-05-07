<!-- Footer.vue -->

<template>
  <footer class="footer">
    <div class="footer-line"></div>
    <div class="footer-content">
      <div
        v-for="(column, index) in footerColumns"
        :key="index"
        class="footer-column"
      >
        <h3 class="footer-title">{{ column.title }}</h3>
        <ul class="footer-list">
          <li v-for="(item, itemIndex) in column.items" :key="itemIndex">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerColumns: [
        {
          title: "ASUKOHT",
          items: ["Linn", "Aadress 14", "52087"],
        },
        {
          title: "MEEDIA",
          items: ["Facebook", "Instagram", "Pinterest"],
        },
      ],
    };
  },
};
</script>


<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  min-height: calc(100vh / 4);
  background-color: #4f6c77;
}

.footer-line {
  width: 60%;
  height: 5px;
  background-color: white;
}

.footer-content {
  display: flex;
  padding-top: 20px;
  justify-content: center;
  width: 100%;
}

.footer-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-title {
  font-family: "Patua One", cursive;
  font-size: 1.25rem;
  color: white;
  margin: 1rem 0;
  font-family: "Playfair Display", serif;
  letter-spacing: 2px;
}

.footer-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-family: "Playfair Display", serif;
  font-size: 1.25rem;
  color: white;
  line-height: 1.5;
}
</style>
