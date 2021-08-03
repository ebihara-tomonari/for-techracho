<template>
  <div>
    <v-container fluid class="px-0">
      <v-carousel>
        <v-carousel-item>
          <v-sheet height="100%" tile>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="text-h2">
                Slide 1
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet height="100%" tile>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="text-h2">
                Slide 2
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet height="100%" tile>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="text-h2">
                Slide 3
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>

    <v-container>
      <h2>New Articles</h2>
      <v-row no-gutters>
        <v-col v-for="post in posts" :key="post.id" cols="12" sm="4">
          <ArticlesCard :post="post"></ArticlesCard>
        </v-col>
      </v-row>
    </v-container>
    <v-row justify="center" class="my-5">
      <v-btn to="/archives/1" nuxt>
        all article archives
      </v-btn>
    </v-row>
  </div>
</template>

<script>
  export default {
    async asyncData(context) {
      const wpSiteDomain = process.client ? 'localhost' : 'wordpress'
      let posts
      await context.$axios.get(`http://${wpSiteDomain}/wp-json/wp/v2/posts?_fields=id,slug,title,excerpt&per_page=6`)
        .then(res => {
          posts = res.data
        })
      return { posts }
    }
  }
</script>
