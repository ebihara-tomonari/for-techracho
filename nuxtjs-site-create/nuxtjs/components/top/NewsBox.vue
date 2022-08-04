<template>
  <div class="news-box">
    <div class="news-box__scroll-text">
      <time>2030.02.20</time>
      バージョン5.6リリース：アバター・アイテム大量追加
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-box {
  color: $main-color;
  height: 31px;
  width: 360px;
  padding: 0 1em;
  overflow: hidden;
  background-color: black;
  border: 1px solid $main-color;
  font-size: 14px;
  font-family: Exo;
  font-weight: bold;
  letter-spacing: 0.05em;
  line-height: 29px;
  white-space: nowrap;
  &__scroll-text {
    display: inline-block;
    padding-left: 100%;
    padding-right: 10%;
    animation: scrollAnime 5s linear infinite;
  }
  @keyframes scrollAnime{
    0% { transform: translateX(0)}
    100% { transform: translateX(-100%)}
  }
  time {
    margin-right: 1em;
    color: white;
    font-family: Exo;
  }
}
</style>
