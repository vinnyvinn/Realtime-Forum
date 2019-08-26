<template>
    <div class="mt-5">
        <v-card>
            <v-card-title>
                <div class="headline">{{data.user}}</div>
                <div class="ml-2">said {{data.created_at}}</div>
                <v-spacer></v-spacer>
                <like :content="data"></like>
            </v-card-title>
             <v-divider></v-divider>
            <edit-reply
                v-if="editing"
                :reply="data"></edit-reply>
            <v-card-text v-else v-html="data.reply"></v-card-text>
            <v-divider></v-divider>
            <div v-if="!editing">
                <v-card-actions v-if="own">
                    <v-btn icon small @click="edit">
                        <v-icon color="orange">edit</v-icon>
                    </v-btn>
                    <v-btn icon small class="ml-10" @click="destroy">
                        <v-icon color="red">delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>

        </v-card>
    </div>
</template>

<script>
    import editReply from "./editReply";
    import Like from "../likes/Like";

    export default {
        props:['data','index'],
        data(){
            return {
                editing:false
            }
        },
        created(){
          this.listen();
        },
computed:{
            own(){
                return  User.own(this.data.user_id);
            }
},
        methods:{
            destroy(){
            eventBus.$emit('deleteReply',this.index);
            },
            edit(){
                this.editing = true;
            },
            listen(){
                eventBus.$on('cancelEditing',()=>{
                    this.editing = false;
                })
            }
        },
        components:{
            editReply,
            Like
        }
    }
</script>

<style scoped>

</style>
