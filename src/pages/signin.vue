<template>
    <v-app>
        <v-app-bar>
            <v-toolbar-title
                style="font-size: 30px; font-family: 'League Spartan', sans-serif; font-weight: bold;">EcoRide</v-toolbar-title>
            <v-spacer></v-spacer>
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

        <v-divider vertical></v-divider>

        <v-container>
            <v-row>

                <v-col cols="6">
                    <img src="@/assets\MascotIcon2.png" />
                </v-col>

                <v-col cols="6">
                    <v-label
                        style="margin-bottom: 40px; font-size: 30px; font-family: 'League Spartan', sans-serif; font-weight: bold;">Sign
                        In</v-label>
                    <v-form>
                        <v-text-field v-model="email" label="Email" outlined></v-text-field>
                        <v-text-field v-model="password" label="Password" outlined
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"></v-text-field>
                        <v-btn class="button-33" @click="login">Login</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>

    </v-app>3
</template>

<script>
export default {
    data() {
        return {
            showPassword: false,
            showPassword: false,
            email: '',
            password: ''
        };
    }
};
</script>

<style>
.button-33 {
    background-color: #c2fbd7;
    border-radius: 100px;
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px;
    color: green;
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button-33:hover {
    box-shadow: rgba(44, 187, 99, .35) 0 -25px 18px -14px inset, rgba(44, 187, 99, .25) 0 1px 2px, rgba(44, 187, 99, .25) 0 2px 4px, rgba(44, 187, 99, .25) 0 4px 8px, rgba(44, 187, 99, .25) 0 8px 16px, rgba(44, 187, 99, .25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
}
</style>
