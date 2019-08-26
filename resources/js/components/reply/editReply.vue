<template>
    <div>
        <vue-simplemde v-model="reply.reply"/>
        <v-card-actions>
            <v-btn icon small @click="update">
                <v-icon color="green">save</v-icon>
            </v-btn>
            <v-btn icon small class="ml-10" @click="cancel">
                <v-icon color="black">cancel</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    export default {
        props:['reply'],

            methods:{
            cancel(){
             eventBus.$emit('cancelEditing');
            },
            update(){
           axios.patch(`/api/question/${this.reply.q_id}/reply/${this.reply.id}`,{body:this.reply.reply})
               .then(res => this.cancel());
            }
        }
    }
</script>

<style scoped>

</style>
