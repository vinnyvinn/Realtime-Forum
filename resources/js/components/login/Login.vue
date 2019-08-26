<template>

    <v-form @submit.prevent="login">
        <v-container grid-list-xl>
            <v-layout wrap>
                <v-flex
                    xs12
                    md4
                >
                    <v-text-field
                        v-model="form.email"
                        label="E-mail"
                        type="email"
                        required
                    ></v-text-field>
                </v-flex>

                <v-flex
                    xs12
                    md4
                    >
                    <v-text-field
                        v-model="form.password"
                        label="Password"
                        type="password"
                        required
                    ></v-text-field>
                </v-flex>
                <v-flex
                    xs12
                    md4
                >
              <v-btn
              color="green"
              type="submit"
              >Login</v-btn>

                    <router-link to="/signup">
                     <v-btn color="blue">Sign Up</v-btn>
                    </router-link>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>

</template>

<script>

    export default {
        data(){
            return {
                form:{
                    email:null,
                    password:null
                }
            }
        },
        created(){
    if(User.loggedIn()){
        this.$router.push({name:'forum'});
    }
        },
        methods:{
         login(){
             User.login(this.form);
         }
        }
    }
</script>

<style scoped>

</style>
