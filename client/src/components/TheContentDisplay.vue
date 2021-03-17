<template>
  <!-- Initial App State -->
  <template v-if="$store.getters.appStatus === AppStatus.INITIAL">
    <center-wrapper>
      <i class="app-status-logo icon-basic-magnifier"></i>
    </center-wrapper>
  </template>

  <!-- Loading data -->
  <template v-else-if="$store.getters.appStatus === AppStatus.LOADING">
    <center-wrapper>
      <loading-spinner></loading-spinner>
    </center-wrapper>
  </template>

  <!-- Loaded server data -->
  <template v-else-if="$store.getters.appStatus === AppStatus.LOADED">
    <the-loaded-content-display></the-loaded-content-display>
  </template>

  <!-- Server not found -->
  <template v-else-if="$store.getters.appStatus === AppStatus.NOT_FOUND">
    <center-wrapper>
      <div class="app-status">
        <i class="app-status-logo icon-basic-eye-closed"></i>
        <p class="app-status-text">Address not found</p>
      </div>
    </center-wrapper>
  </template>

  <!-- Undefined error -->
  <template v-else>
    <center-wrapper>
      <div class="app-status">
        <i class="app-status-logo icon-basic-eye-closed"></i>
        <p class="app-status-text">Server connection error</p>
      </div>
    </center-wrapper>
  </template>
</template>

<script>
import AppStatus from "../appStatus";

import LoadingSpinner from "./LoadingSpinner";
import TheLoadedContentDisplay from "./TheLoadedContentDisplay";

export default {
  components: {
    LoadingSpinner,
    TheLoadedContentDisplay,
  },
  props: ["status"],
  created() {
    this.AppStatus = AppStatus;
  },
};
</script>

<style scoped>
.content-display-wrapper {
  height: 100%;
}

.app-status {
  text-align: center;
}

.app-status-logo {
  display: block;
  font-size: 20vh;
}

.app-status-text {
  font-size: 3vh;
}

.center-wrapper {
  display: grid;
  place-items: center;
  height: 100%;
}
</style>
