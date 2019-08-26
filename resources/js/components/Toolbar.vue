<template>
    <div>
        <v-toolbar color="indigo" dark>
            <v-toolbar-title  class="text--white">
                <router-link to="/">VinnyVinny</router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <app-notification></app-notification>
             <div class="hidden-sm-and-down">

               <router-link
                   v-for="item in items"
                   :key="item.title"
                   :to="item.to"
                   v-if="item.show">
                   <v-btn text>{{item.title}}</v-btn>
               </router-link>
             </div>
        </v-toolbar>
    </div>
</template>

<script>
    import AppNotification from "./AppNotification";

    export default {
data(){
    return{
        items:[
            {title:'Forum',to:'/forum',show:true},
            {title:'Ask Question',to:'/ask',show: User.loggedIn()},
            {title:'Category',to:'/category',show: User.loggedIn()},
            {title:'Login',to:'/login',show: !User.loggedIn()},
            {title:'Logout',to:'/logout',show: User.loggedIn()},
        ]
    }
},
        created() {
        eventBus.$on('logout',()=>{
            User.logout();
        })
        },
        components:{
        AppNotification
        }
    }
</script>

<style scoped>

</style>
