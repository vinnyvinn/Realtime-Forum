<template>
    <div>
        <reply v-for="(reply,index) in content"
               :key="reply.id"
               :index="index"
               v-if="content"
               :data="reply">

        </reply>
    </div>
</template>

<script>
    import Reply from "./Reply";

    export default {
        props:['question'],
        data(){
            return{
                content: this.question.replies
            }
        },
        components:{
            Reply
        },
        created() {

           eventBus.$on('newReply',(reply) =>{
               this.content.unshift(reply);
           });

           eventBus.$on('deleteReply',(index) =>{
               axios.delete(`/api/question/${this.question.id}/reply/${this.content[index].id}`)
                   .then(res => this.content.splice(index,1));
           })
            Echo.private('App.User'+ User.id())
                .notification((notification)=>{
                    console.log(notification.type)
                })
        }
    }
</script>

<style scoped>

</style>
