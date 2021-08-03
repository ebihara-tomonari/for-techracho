<template>
  <v-card class="pa-2 ma-2" outlined tile>
    <NuxtLink :to="'/articles/'+post.id">
      <v-card-title>{{ post.title.rendered }}</v-card-title>
    </NuxtLink>
    <v-card-text class="pt-0">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="text--primary" v-html="post.excerpt.rendered"></div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: {
      post: { type: Object, required: true, default: () => {} }
    }
  }
</script>

<style>
  .more-link { display: none; }
</style>
