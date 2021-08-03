<template>
  <v-container>
    <h2>{{ post.title.rendered }}</h2>
    <div class="text-right mb-10">
      <v-btn v-for="category in post['_embedded']['wp:term'][0]" :key="category.id" rounded small class="ma-2">
        {{ category.name}}
      </v-btn>
      <div>CreatedAt: {{ post.date }}</div>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="post.content.rendered"></div>
  </v-container>
</template>

<script>
  export default {
    async asyncData(context) {
      const wpSiteDomain = process.client ? 'localhost' : 'wordpress'
      const post = await context.$axios.$get(`http://${wpSiteDomain}/wp-json/wp/v2/posts/${context.params.id}?_fields=id,slug,title,content,date&_embed=wp:term`)
      return { post }
    }
  }
</script>
