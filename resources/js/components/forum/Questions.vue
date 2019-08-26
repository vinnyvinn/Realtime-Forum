<template>
    <v-card class="mt-2">
        <v-card-title>
           <div>
               <h3>
                   <router-link :to="question.path">
                       {{question.title}}
                   </router-link>
               </h3>
               <div class="grey--text">{{question.user}} said {{question.created}}</div>
           </div>
        </v-card-title>
        <v-card-text>
            {{question.body}}
        </v-card-text>

    </v-card>
</template>

<script>
    export default {
 props:['question']
    }
</script>

<style scoped>

</style>
