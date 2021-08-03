<template>
  <div>
    <v-container>
      <h2>Articles Page: {{page}}</h2>
      <v-row no-gutters>
        <v-col v-for="post in posts" :key="post.id" cols="12" sm="4">
          <ArticlesCard :post="post"></ArticlesCard>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center mb-5">
      <MyPagination base-path="/archives/" :current="Number($route.params.id)" :pages="pages"></MyPagination>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const wpSiteDomain = process.client ? 'localhost' : 'wordpress'
    const page = context.params.id
    let posts, pages
    await context.$axios.get(`http://${wpSiteDomain}/wp-json/wp/v2/posts?_fields=id,slug,title,excerpt&per_page=6&page=${page}`)
      .then(res => {
        posts = res.data
        pages = Number(res.headers['x-wp-totalpages'])
      })
    return { posts, pages }
  },
  data() {
    return {
      page: this.$route.params.id ? Number(this.$route.params.id) : 1
    }
  },
  methods: {
    changePage(pageNo) { this.$router.push({ path: `/archives/${pageNo}` }) }
  }
}
</script>
