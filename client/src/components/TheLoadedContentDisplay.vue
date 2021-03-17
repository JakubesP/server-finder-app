<template>
  <div class="loaded-content">
    <!-- map -->
    <div class="loaded-content__map">
      <the-map></the-map>
    </div>

    <!-- country info -->
    <div class="loaded-content__country-info">
      <the-country-info></the-country-info>
    </div>
  </div>
</template>

<script>
import TheMap from "./TheMap";
import TheCountryInfo from "./TheCountryInfo";

export default {
  components: {
    TheMap,
    TheCountryInfo,
  },
};
</script>

<style scoped>
.loaded-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.loaded-content__country-info {
  text-align: center;
  margin: 2rem 0;
}

.loaded-content__map {
  width: 100vmax;
  height: 50vmax;
  margin: 4rem 10vw;
}

/* for big screens */
@media only screen and (min-width: 1000px) {
  .loaded-content {
    padding: 3rem;
    height: 100%;
    flex-wrap: nowrap;
  }

  .loaded-content__map {
    width: 60%;
    height: 100%;
    margin: 0 2rem;
  }

  .loaded-content__country-info {
    max-height: 100%;
    margin: 0 2rem;
  }
}

</style>
