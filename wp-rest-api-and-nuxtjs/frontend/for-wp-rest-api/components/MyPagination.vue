<template>
  <nav role="navigation" aria-label="Pagination Navigation">
    <ul class="v-pagination theme--light">
      <li>
        <v-btn v-if="current != 1" :to="basePath + '1'" nuxt class="v-pagination__navigation"><v-icon>mdi-chevron-double-left</v-icon></v-btn>
        <v-btn v-else class="v-pagination__navigation" disabled><v-icon>mdi-chevron-double-left</v-icon></v-btn>
      </li>
      <li>
        <v-btn v-if="current != 1" :to="basePath + (current - 1)" nuxt class="v-pagination__navigation"><v-icon>mdi-chevron-left</v-icon></v-btn>
        <v-btn v-else class="v-pagination__navigation" disabled><v-icon>mdi-chevron-left</v-icon></v-btn>
      </li>
      <template v-for="prev in prevs">
        <v-btn v-if="prev >= 1" :key="prev.id" :to="basePath + prev" nuxt class="v-pagination__navigation mx-2">{{ prev }}</v-btn>
      </template>
      <v-btn class="v-pagination__navigation primary">{{ current }}</v-btn>
      <template v-for="next in nexts">
        <v-btn v-if="next <= pages" :key="next.id" :to="basePath + next" nuxt class="v-pagination__navigation mx-2">{{ next }}</v-btn>
      </template>
      <li>
        <v-btn v-if="current != pages" :to="basePath + (Number(current) + 1)" nuxt class="v-pagination__navigation"><v-icon>mdi-chevron-right</v-icon></v-btn>
        <v-btn v-else class="v-pagination__navigation" disabled><v-icon>mdi-chevron-right</v-icon></v-btn>
      </li>
      <li>
        <v-btn v-if="current != pages" :to="basePath + pages" nuxt class="v-pagination__navigation"><v-icon>mdi-chevron-double-right</v-icon></v-btn>
        <v-btn v-else class="v-pagination__navigation" disabled><v-icon>mdi-chevron-double-right</v-icon></v-btn>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      basePath: { type: String, default: '/' },
      current: { type: Number, default: 1 },
      pages: { type: Number, default: 1}
    },
    data() {
      return {
        prevs: [this.current - 2, this.current - 1],
        nexts: [Number(this.current) + 1, Number(this.current) + 2]
      }
    }
  }
</script>

<style>
  .v-pagination .v-pagination__navigation { min-width: 36px !important; }
</style>
