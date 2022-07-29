<template>
  <section id="story" class="story">
    <div class="story__container">
      <div class="story__content story__content--first">
        <div class="story__text">
          <h2 class="story__title">STORY</h2>
          <h3 class="story__subtitle">
            奪われた故郷の星を取り戻せ<br/>
            壮大なSFファンタジー
          </h3>
          <p class="story__description">
            銀河歴222年、惑星ネコチャンは、ボスネコ将軍の率いる軍の反乱により完全に制圧された。将軍の側近マンチカンは軍政府に従わない人間を辺境の星ニャゴーへ強制的に追放。食料や資源の乏しいニャゴーでは多くの難民が発生し飢餓に苦しんでいた。ニャゴーのスラム街で育った孤児の姉弟がいた。姉のミケと弟のタマは母親をボスネコ将軍に殺された事実を知る。母の復讐のため、そして故郷の惑星ネコチャンを奪還すべく、ミケとタマはいま行動に出る！
          </p>
        </div>
        <div class="story__image-container story__image-container--first">
          <img class="story__image" src="~assets/img/story.jpg" />
        </div>
      </div>
      <div class="story__content story__content--second">
        <div class="story__text">
          <h3 class="story__subtitle">
            隠された陰謀を暴け<br/>
            衝撃的な事実に驚愕
          </h3>
          <p class="story__description">
            ミケとタマはネコジャラシ作戦により軍政府の最新鋭の小型船チュールを奪うことに成功。チュールのハイテンションワープ星間航行により惑星ネコチャンへあとわずか３時間で到着という時、小惑星帯アビシニアンで謎の救難信号を受信する。意外にも信号の発信源はボスネコ将軍だった。彼は今にも絶えそうなかすれた声で「私はおまえたちミケとタマの父親なのだ」と語る。その瞬間、ミケとタマの育ての親同然で仲間のはずのホワイトオッドアイがタマの背中を刀で切り裂いたのだった......
          </p>
        </div>
        <div class="story__image-container story__image-container--second">
          <img class="story__image" src="~assets/img/story_2.jpg" />
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
.story {
  position: relative;
  color: white;
  min-height: 1360px;
  background-size: cover;
  background-image: url("~assets/img/bg_story.jpg");
  &::before, &::after {
    content: '';
    position: absolute;
    display: block;
    width: 430px;
    height: 40px;
    background-color: black;
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
    max-width: 1180px;
    padding-top: 140px;
    margin: 0 auto;
  }
  &__content {
    display: flex;
    column-gap: 80px;
    &--first {
      margin-bottom: 90px;
    }
    &--second {
      flex-direction: row-reverse;
      .story__text {
        margin-top: 93px;
      }
    }
  }
  &__text {
    flex: 1;
  }
  &__title {
    position: relative;
    margin-top: 18px;
    margin-bottom: 70px;
    color: $main-color;
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
      background-color: $main-color;
    }
  }
  &__subtitle {
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 0.05em;
    line-height: 1.5;
  }
  &__description {
    margin-top: 30px;
    font-size: 16px;
    letter-spacing: 0.05em;
    line-height: 29px;
  }
  &__image {
    width: 430px;
    height: 500px;
    &-container {
      position: relative;
      z-index: 1;
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -7px;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: $main-color;
      }
      &--first::after {
        right: -7px;
      }
      &--second::after {
        left: -7px;
      }
    }
  }
}
</style>
