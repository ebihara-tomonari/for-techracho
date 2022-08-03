<template>
  <a class="play-btn" :class="(size === 'small') ? 'play-btn--sm' : ''" href="#">PLAY NOW</a>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'normal'
    }
  }
}
</script>

<style lang="scss" scoped>
.play-btn {
  display: block;
  width: 230px;
  height: 60px;
  background-color: $main-color;
  color: black;
  font-size: 18px;
  font-weight: bold;
  line-height: 60px;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-align: center;
  &:hover {
    opacity: 0.9;
  }
  &--sm {
    width: 164px;
    height: 45px;
    font-size: 15px;
    line-height: 45px;
  }
}
</style>
