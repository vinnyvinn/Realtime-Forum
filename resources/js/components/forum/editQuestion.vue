<template>
    <v-container fluid>
        <v-card>
     <v-form @submit.prevent="update">
         <v-flex
             xs12 >
             <v-text-field
                 v-model="form.title"
                 label="Title"
                 type="text"
                 required
             ></v-text-field>
         </v-flex>
         <v-flex xsm12>
             <vue-simplemde v-model="form.body"/>

          <v-card-actions>
              <v-btn icon small type="submit">
                <v-icon color="teal">save</v-icon>
              </v-btn>
              <v-btn icon small @click="cancel">
                  <v-icon color="black">cancel</v-icon>
              </v-btn>
          </v-card-actions>
         </v-flex>
     </v-form>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        props:['question'],
        data(){
            return {
                form:{
                    title:'',
                    body:''
                }
            }
        },
        mounted() {
            this.form = this.question;
        },
        methods:{
            cancel(){
                eventBus.$emit('cancelEditing')
            },
            update(){
                axios.patch(`/api/question/${this.question.id}`,this.form)
                    .then(res => this.cancel())
            }
        }
    }
</script>

<style scoped>

</style>
