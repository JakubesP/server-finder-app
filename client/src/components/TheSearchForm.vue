<template>
  <form @submit.prevent="submitForm" class="search-form">
    <button
      class="app-button search-form__button search-form__button--user_ip"
      type="button"
      @click="submitForm('own')"
    >
      <i class="icon-basic-rss"></i>
    </button>

    <input
      class="search-form__input"
      type="text"
      id="address"
      name="address"
      v-model="inputValue"
      placeholder="Enter URL or server address"
      autocomplete="off"
    />
    <button
      class="app-button search-form__button"
      :class="submitButtonStateClass"
      :disabled="!inputValue"
      type="submit"
    >
      <i class="icon-basic-magnifier"></i>
    </button>
  </form>
</template>

<script>
import AppStatus from "../appStatus";

export default {
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    submitButtonStateClass() {
      return {
        "search-form__button--disabled": !this.inputValue,
        "search-form__button--enabled": this.inputValue,
      };
    },
  },
  methods: {
    async submitForm(addr) {
      if (addr === "own") {
        await this.$store.dispatch("fetchData", "own");
        if (this.$store.getters.appStatus === AppStatus.LOADED) {
          this.inputValue = this.$store.getters.loadedData.data.ip;
        } else {
          this.inputValue = "";
        }
      } else if (this.inputValue) {
        const serverAddress = this.inputValue;
        this.$store.dispatch("fetchData", serverAddress);
      }
    },
  },
};
</script>

<style scoped>
.search-form {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.search-form__input,
.search-form__button {
  outline: none;
  border: none;
  margin: 5px;
  display: block;
}

.search-form__input {
  width: 100%;
  max-width: 50rem;
  border-radius: 7px;
  font-size: 1.6rem;
  padding: 1rem;
  font-family: inherit;
}

.search-form__button {
  font-size: 3rem;
  display: inline;
  transition: all 0.1s ease-in;
}

.search-form__button--enabled:hover {
  transform: scale(1.5) rotate(50deg);
}

.search-form__button--disabled {
  cursor: not-allowed;
}

.search-form__button--user_ip:hover {
  transform: scale(1.5) rotate(50deg);
}
</style>
