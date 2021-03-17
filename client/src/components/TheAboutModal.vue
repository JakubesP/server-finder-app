<template>
  <transition name="backdrop">
    <div v-if="open" class="backdrop">
      <center-wrapper>
        <div class="about" v-if="open">
          <header class="about__header">
            <div class="about__header-text">About</div>
            <button
              class="app-button about__close-button"
              type="button"
              @click="$emit('close')"
            >
              X
            </button>
          </header>
          <section class="about__content">
            <img
              class="about__avatar"
              src="/assets/img/author_logo.png"
              alt="Author logo"
            />
            <p class="about__paragraph">
              This application was created as a demonstration project. Enter the
              server address (IP or DNS) to retrieve its location information.
              Use the <i class="icon-basic-rss"></i> symbol in order to check
              your public IP information. Have fun &#128521;
            </p>

            <p class="about__pararaph ">
              Source code of this application as well as other projects are
              available on my
              <a
                class="about__link"
                href="https://github.com/JakubesP"
                target="_blank"
                >github</a
              >.
            </p>

            <p class="about__paragraph">
              App icons:
              <a class="about__link" href="https://linea.io/" target="_blank"
                >linea.io</a
              >
            </p>
          </section>
        </div>
      </center-wrapper>
    </div>
  </transition>
</template>

<script>

export default {
  props: ["open"],
  emits: ["close"],
};
</script>

<style scoped>

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.815);
  z-index: 1000;
}

.about {
  margin: 1rem;
  font-size: 1.8rem;
  background: var(--secondary-color-dark);
  border-radius: 1rem;
   color: var(--color-white);
  max-width: 60rem;
  z-index: 1000;
}

.about__header {
  background: var(--primary-color);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 2rem;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
}

.about__paragraph {
  margin: 1rem 0;
}

.about__link:link,
.about__link:visited {
  text-decoration: none;
  color: var(--color-white);
  font-weight: bold;
  outline: none;
  transition: all 0.1s ease-in;
}

.about__link:hover {
  display: inline-block;
  transform: rotate(10deg) scale(1.2);
  background-color: var(--primary-color);
}

.about__header-text {
  font-size: inherit;
}

.about__close-button {
  display: block;
  font-size: inherit;
  transition: all 0.1s ease-in;
}

.about__close-button:hover {
  transform: scale(1.5);
}

.about__avatar {
  display: block;
  max-width: 10rem;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.1s ease-in-out;
}

.about__avatar:hover {
  transform: scale(1.5) skewX(-10deg);
}

.about__content {
  padding: 2rem;
  max-height: 60vh;
  overflow: auto;
}

/* modal animation */
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.backdrop-enter-to,
.backdrop-leave-from {
  opacity: 1;
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: all 0.1s ease-in;
}

</style>
