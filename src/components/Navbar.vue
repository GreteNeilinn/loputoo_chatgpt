<template>
  <header
    class="header"
    :style="`--navbar-background-color: ${navbarBackgroundColor};`"
  >
    <div class="logo-container">
      <router-link to="/" class="navbar__logo">
        <img class="logo" :src="require('@/assets/logo.png')" alt="Logo" />
      </router-link>
    </div>
    <nav
      class="nav"
      :class="{ 'display-mobile-nav': showMobileNav }"
      :style="`--nav-menu-background-color: ${navMenuBackgroundColor};`"
    >
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/galerii" class="nav-link">Galerii</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/kontakt" class="nav-link">Kontakt</router-link>
        </li>
      </ul>
    </nav>
    <div class="hamburger-menu" @click="toggleMobileNav">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMobileNav: false,
    };
  },
  computed: {
    navbarBackgroundColor() {
      return this.$route.path === "/" ? "#eae9e5" : "white";
    },
    navMenuBackgroundColor() {
      return this.showMobileNav ? this.navbarBackgroundColor : "transparent";
    },
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
.nav-link {
  font-family: "Patua One", cursive;
}

body {
  background-color: #ffffff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3.5rem;
  background-color: white;
  position: relative;
  z-index: 1000;
  background-color: var(--navbar-background-color);
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: auto;
  width: 140px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
}

.nav-item {
  list-style: none;
  margin-left: 1.5rem;
  text-align: center;
}

.nav-link {
  text-decoration: none;
  color: #4f6c77;
  font-size: 1.7rem;
  padding: 0.8rem 1.5rem;
}

.nav-link:hover {
  color: #83989f;
}

.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.hamburger-line {
  background-color: #4f6c77;
  height: 3px;
  width: 100%;
}

@media (max-width: 768px) {
  .header {
    padding: 1.5rem 2rem;
  }
  .nav {
    display: none;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    background-color: white;
    padding: 1.5rem;
    width: 100%;
    max-height: 0;
    overflow: hidden; /* Add this line */
    transition: max-height 0.3s ease-in-out; /* Add this line */
  }
  .nav-list {
    flex-direction: column;
    align-items: center;
  }
  .nav-item {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .hamburger-menu {
    display: flex;
  }
  .nav.display-mobile-nav {
    display: flex;
    max-height: 500px;
    background-color: var(--nav-menu-background-color);
  }
  .nav-link {
    font-size: 1.4rem;
  }
}
</style>