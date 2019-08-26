<template>
    <div class="mt-4">
        <vue-simplemde v-model="body"/>
        <v-btn color="green" dark @click="submit">
         Reply
        </v-btn>
    </div>
</template>

<script>

    export default {
        props:['questionId'],
        data(){
            return {
                body:null

            }
        },
        methods:{
            submit(){
                axios.post(`/api/question/${this.questionId}/reply`,{body:this.body})
                    .then(res => {
                        this.body = ''
                        eventBus.$emit('newReply',res.data.reply)
                        window.scrollTo(0,0)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
