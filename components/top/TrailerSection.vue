<template>
  <section id="trailer" class="trailer">
    <div class="trailer__container">
      <h2 class="trailer__title">TRAILER</h2>
      <div class="trailer__video-container">
        <iframe src="https://www.youtube.com/embed/UzNDjEp7kpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.trailer {
  position: relative;
  padding-top: 110px;
  padding-bottom: 110px;
  background-color: $main-color;
  &::before, &::after {
    content: '';
    position: absolute;
    display: block;
    width: 430px;
    height: 40px;
    background-color: $main-color;
    transform: skewX(-45deg);
  }
  &::before {
    top: -40px;
    right: -40px;
  }
  &::after {
    bottom: -40px;
    left: -40px;
  }
  &__container {
    max-width: 1140px;
    margin: 0 auto;
  }
  &__title {
    position: relative;
    margin-bottom: 70px;
    color: black;
    font-family: Exo;
    font-size: 80px;
    font-weight: bold;
    letter-spacing: 0.05em;
    line-height: 1;
    &::after {
      position: absolute;
      bottom: -30px;
      left: 0;
      content: '';
      display: block;
      height: 8px;
      width: 80px;
      background-color: black;
    }
  }
  &__video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
