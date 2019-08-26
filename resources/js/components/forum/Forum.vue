<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
     <v-flex xs8>

     <question v-for="question in questions"
     :key="question.path"
               :question="question"
     ></question>
     </v-flex>
            <v-flex xs4>
                <app-sidebar></app-sidebar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Questions from "./Questions";
    import AppSidebar from "./AppSidebar";

    export default {
        data(){
            return {
                questions:{}
            }
        },
        created(){
            axios.get('api/question')
                .then(res => this.questions = res.data.data)
                .catch(error => error.response.data)
        },
        components:{
            'question':Questions,
            AppSidebar
        }
    }
</script>

<style scoped>

</style>
