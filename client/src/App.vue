<template>
  <the-navbar @aboutClick="manageAboutModal"></the-navbar>
  <div class="app-content">
    <the-content-display></the-content-display>
  </div>

  <teleport to="body">
    <the-about-modal
      :open="aboutModal"
      @close="manageAboutModal"
    ></the-about-modal>
  </teleport>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import TheContentDisplay from "./components/TheContentDisplay";
import TheAboutModal from "./components/TheAboutModal";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheContentDisplay,
    TheAboutModal,
  },
  data() {
    return {
      aboutModal: false,
    };
  },
  methods: {
    manageAboutModal() {
      this.aboutModal = !this.aboutModal;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap");

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  --primary-color: #f7423e;
  --secondary-color-dark: #242424;
  --secondary-color-medium: #2e2e2e;
  --secondary-color-light: #343434;
  --color-white: #fff;

  font-family: "Lato", sans-serif;
  box-sizing: border-box;
  background-color: var(--secondary-color-dark);
  color: var(--color-white);
}

/* main app layout */
#app {
  width: 100%;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-content {
  flex: 1;
}

/* for big screens */
@media only screen and (min-width: 1000px) {
  .app-content {
    flex: 1;
    overflow: hidden;
  }
}

/* general style for app button */
.app-button {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
}

/* scrollbar style */
::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color);
}
</style>
