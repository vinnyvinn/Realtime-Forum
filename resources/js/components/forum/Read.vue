<template>
   <div>

       <edit-question
           v-if="editing"
           :question="question"
           ></edit-question>
       <div v-else>
           <show-question
               :question="question"
               v-if="question"
           ></show-question>
         <v-container>
             <app-replies :question="question"></app-replies>
             <new-reply :questionId="question.id"></new-reply>
         </v-container>
       </div>
   </div>
</template>

<script>
    import showQuestion from "./showQuestion";
    import editQuestion from "./editQuestion";
    import appReplies from "../reply/Replies";
    import newReply from "../reply/newReply";

    export default {
        data(){
            return{
                question:null,
                editing:false,

            }
        },
     created(){
            this.listen();
            this.getQuestion();
             // console.log(this.question)
     },
        mounted(){
            // console.log(this.question)
        },
        components:{
            showQuestion,
            editQuestion,
            appReplies,
            newReply
        },
        methods:{
            listen(){
                eventBus.$on('startEditing',()=>{
                this.editing = true;
                });
                eventBus.$on('cancelEditing',()=>{
                    this.editing = false;
                })
            },
            getQuestion(){
                axios.get(`/api/question/${this.$route.params.id}`)
                    .then(res =>{
                       this.question = res.data.data
                      //  this.replies = res.data.replies
                    } )
            }
        }
    }
</script>

<style scoped>

</style>
