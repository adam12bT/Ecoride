<template>
  <v-app style="background-color: #1f4d3f;" @click="goToMainLandingPage">
    <v-container fill-height style="height: 100vh;">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <div style="border-radius: 10px; overflow: hidden;">
            <v-img src="@/assets/EcoRideLogoPage.png" height="100vh" contain />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    goToMainLandingPage() {
      // Navigate to MainLandingPage
      this.$router.push('/map');
    }
  }
}
</script>
