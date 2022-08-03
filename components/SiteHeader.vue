<template>
  <header class="header">
    <img src="~assets/img/Necopon_games.svg" class="header__logo" />
    <div class="header__links">
      <a href="#story" class="header__link-text">STORY</a>
      <a href="#trailer" class="header__link-text">TRAILER</a>
      <CommonPlayBtn size="small" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  height: 100px;
  width: 100%;
  background: linear-gradient(180deg, #000 0, rgba(0 0 0 / 62%) 68.75%, rgba(0 0 0 / 0%) 100%);
  z-index: 10;
  &__logo {
    margin-left: 30px;
    margin-top: 40px;
  }
  &__links {
    position: absolute;
    top: 0;
    right: 30px;
    display: flex;
    align-items: center;
    height: 100%;
  }
  &__link-text {
    margin-right: 30px;
    color: $main-color;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
