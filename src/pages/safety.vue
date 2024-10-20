<template>
    <v-container>
        <v-app-bar>
            <v-toolbar-title>
                <p style="
          font-size: 30px;
          font-family: 'League Spartan', sans-serif;
          font-weight: bold;">
                    EcoRide
                </p>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn to="/MainLandingPage">Overview</v-btn>
            <v-btn to="/safety">Safety</v-btn>
            <v-btn to="/signin">Sign In</v-btn>
            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props">Sign Up</v-btn>
                </template>
                <v-list>
                    <v-list-item @click="navigateToSignUp('user')">Sign Up as User</v-list-item>
                    <v-list-item @click="navigateToSignUp('owner')">Sign Up as Fleet Owner</v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-card class="header">
            <v-row>
                <v-col cols="12">
                    <v-img src="@\assets\RideSafely4.png" aspect-ratio="16/9"></v-img>
                </v-col>
            </v-row>
        </v-card>

        <v-card>
            <v-row>
                <v-col cols="12">
                    <v-img src="@\assets\rules.png" aspect-ratio="16/9"></v-img>
                </v-col>
            </v-row>
        </v-card>
    </v-container>

</template>

<script>
export default {
    methods: {
        navigateToSignUp(type) {
            if (type === 'user') {
                this.$router.push({ path: '/SignUpUser' });
            } else if (type === 'owner') {
                this.$router.push({ path: '/SignUpOwner' });
            }
        }
    }
};
</script>

<style>
.header {
    max-height: 350px;
}
</style>