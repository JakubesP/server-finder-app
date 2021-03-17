<template>
  <div class="navbar">
    <div class="navbar__logo">
      <img src="/assets/img/app_logo.png" alt="logo" />
      <span class="navbar__text">Find Server</span>
    </div>
    <the-search-form></the-search-form>
    <button @click="$emit('aboutClick')" class="app-button navbar__info-button">
      <i class="icon-basic-info"></i>
    </button>
  </div>
</template>

<script>
import TheSearchForm from "./TheSearchForm.vue";

export default {
  components: {
    TheSearchForm,
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--primary-color);
  color: var(--color-white);

  width: 100%;
  min-height: 8rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
}

.navbar__logo {
  font-size: 2.5rem;
  margin-right: 1rem;

  display: inline-flex;
  align-items: center;
}

.navbar__info-button {
  display: block;
  font-size: 3rem;
  transition: all 0.1s ease-in;
  padding: 0 1rem;
}

.navbar__info-button:hover {
  transform: scale(1.5);
}

.navbar__logo img {
  width: 2rem;
}

.navbar__text {
  margin: 0 1rem;
}

/* for small screens */
@media only screen and (max-width: 500px) {
  .navbar__text {
    display: none;
  }
}
</style>
