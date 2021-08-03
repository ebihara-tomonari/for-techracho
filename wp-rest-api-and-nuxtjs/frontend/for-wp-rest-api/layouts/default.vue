<template>
  <v-app light>
    <v-app-bar :clipped-left="clipped" fixed app>
      <NuxtLink to="/"><v-toolbar-title v-text="title" /></NuxtLink>
      <v-row
        align="center"
        justify="end"
      >
        <v-btn to="/inspire" nuxt text class="mr-2">
          Some Link
        </v-btn>
        <v-btn to="/inspire" nuxt text>
          Some Link
        </v-btn>
      </v-row>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      fixed: false,
      miniVariant: false,
      right: true,
      title: 'WP REST API & NuxtJS Site'
    }
  }
}
</script>
