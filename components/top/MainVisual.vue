<template>
  <div class="main-visual">
    <video class="main-visual__video" playsinline muted autoplay loop src="~assets/bg_movie.mp4"></video>
    <div class="main-visual__content">
      <p class="main-visual__genre">VR GAME</p>
      <h1 class="main-visual__title">Planet<br/>Hunters</h1>
      <p class="main-visual__theme">惑星を奪還せよ</p>
      <CommonPlayBtn />
    </div>
    <div class="news-box__container">
      <TopNewsBox />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-visual {
  position: relative;
  height: 808px;
  background-color: rgba(0 0 0 / 5%);
  &__video {
    position: absolute;
    height: 100%;
    width: 100vw;
    object-fit: cover;
    z-index: -1;
  }
  &__content {
    padding-top: 180px;
    margin-left: 11.1vw;
    color: white;
  }
  &__genre {
    font-family: 'Exo';
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 0.2em;
  }
  &__title {
    margin-top: 30px;
    font-family: 'Exo';
    font-size: 140px;
    font-weight: bold;
    letter-spacing: 0.05em;
    line-height: 0.9em;
  }
  &__theme {
    margin-top: 10px;
    margin-bottom: 50px;
    font-size: 34px;
    letter-spacing: 1em;
  }
  .news-box__container {
    position: absolute;
    bottom: 50px;
    right: 30px;
  }
}
</style>
