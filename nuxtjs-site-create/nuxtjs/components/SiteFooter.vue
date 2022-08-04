<template>
  <footer>
    ©Necopon games
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: relative;
  padding-right: 30px;
  height: 110px;
  background-color: black;
  color: white;
  font-family: Exo;
  font-weight: bold;
  letter-spacing: 0.05em;
  line-height: 110px;
  text-align: right;
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 430px;
    height: 40px;
    background-color: black;
    transform: skewX(-45deg);
    top: -40px;
    right: -40px;
  }
}
</style>
