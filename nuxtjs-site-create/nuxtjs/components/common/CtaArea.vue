<template>
  <div class="cta-area">
    <video class="cta-area__video" playsinline muted autoplay loop src="~assets/bg_movie.mp4"></video>
    <div class="cta-area__content">
      <p class="cta-area__text">ARE YOU READE TO FIGHT?</p>
      <CommonPlayBtn />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cta-area {
  position: relative;
  height: 350px;
  text-align: center;
  &__video {
    position: absolute;
    left: 0;
    height: 100%;
    width: 100vw;
    object-fit: cover;
    z-index: -1;
  }
  &__content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  &__text {
    margin-top: 100px;
    margin-bottom: 25px;
    width: 100%;
    color: white;
    font-family: Exo;
    font-size: 64px;
    font-weight: bold;
    letter-spacing: 0.05em;
    line-height: 1;
  }
}
</style>
