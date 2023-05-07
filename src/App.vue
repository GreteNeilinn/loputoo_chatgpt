<template>
  <div id="app">
    <Navbar />
    <router-view />
    <!-- Your other content -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
