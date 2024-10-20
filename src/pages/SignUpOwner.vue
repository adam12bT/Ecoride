<template>
    <div>
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
    </div>
    <div class="background-container">
        <div class="registration-container">
            <h2 style="font-size: 30px; font-family: 'League Spartan', sans-serif; font-weight: bold;">Sign Up</h2>

            <div class="registration-form">
                <div class="input-field">
                    <label for="CompanyName">Company Name</label>
                    <input type="text" id="CompanyName" v-model="CompanyName" placeholder="Ex: company x">
                </div>

                <div class="input-field">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" placeholder="Ex: example@example.com">
                </div>

                <div class="input-field">
                    <label for="CIN">CIN</label>
                    <input type="text" id="CIN" v-model="CIN" placeholder="Ex: 45781265">
                </div>
                <div class="input-field">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password" :type="passwordFieldType"
                        placeholder="Ex: IhateCoding101HelpMe">
                </div>
                <div class="button-container">
                    <button class="button-33" @click="registerUser">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userType: 'user',
            firstName: '',
            lastName: '',
            email: '',
            selectedDay: '',
            selectedMonth: '',
            selectedYear: '',
            CIN: '',
            password: '',
            CompanyName: '',
            showPassword: false,
            days: Array.from({ length: 31 }, (_, i) => i + 1),
            months: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ],
            years: Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i),
        };
    },
    computed: {
        passwordFieldType() {
            return this.showPassword ? 'text' : 'password';
        },
    },
    methods: {
        registerUser() {
            const dateOfBirth = `${this.selectedYear}-${this.selectedMonth}-${this.selectedDay}`;
            const userData = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                dateOfBirth,
                CIN: this.CIN,
            };

            if (this.userType === 'fleetOwner') {
                userData.CompanyName = this.CompanyName;
            }

            console.log('User registered:', userData);

            // Reset form fields after registration
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.selectedDay = '';
            this.selectedMonth = '';
            this.selectedYear = '';
            this.CIN = '';
            this.password = '';
            this.CompanyName = '';
        },
    },
};
</script>

<style scoped>
.background-container {
    background-image: url('bg.jpg');
    /* Add the path to your background image */
    background-size: cover;
    /* Adjust as needed */
    background-position: center;
    /* Adjust as needed */
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.registration-container {
    background-color: white;
    /* White background for the registration section */
    width: 600px;
    /* Adjusted width for better layout */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.registration-title {
    font-size: 24px;
    margin-bottom: 10px;
}

.registration-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
}

.input-field {
    margin-bottom: 15px;
    width: 100%;
}

.input-field label {
    display: block;
    margin-bottom: 5px;
}

.input-field input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #28a745;
}

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

.register-button {
    padding: 8px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #28a745;
    color: #fff;
}

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
