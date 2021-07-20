<template>
  <div>hogehuga
    <ul>
      <li v-for="post in posts" :key="post.id">
        id: {{ post.id }}<br>
        slug: {{ post.slug }}<br>
        <NuxtLink :to="'/articles/'+post.id">title: {{ post.title.rendered }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({$axios}) {
      const wpSiteDomain = process.client ? 'localhost' : 'wordpress'
      const posts = await $axios.$get(`http://${wpSiteDomain}/wp-json/wp/v2/posts`)
      return { posts }
    }
  }
</script>
