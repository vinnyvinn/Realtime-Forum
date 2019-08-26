<template>
   <v-container>
       <v-form @submit.prevent="create">
           <v-text-field
               v-model="form.name"
               label="Category Name"
               type="text"
               required
           ></v-text-field>
           <v-btn type="submit" color="pink" v-if="editId" :disabled="disabled">UPDATE</v-btn>
           <v-btn type="submit" color="teal" v-else :disabled="disabled">CREATE</v-btn>
       </v-form>
       <br>
       <v-card>
           <v-toolbar color="indigo" dark dense>
            <v-toolbar-title>Categories</v-toolbar-title>
           </v-toolbar>

           <v-list>
               <div v-for="(category,index) in categories" :key="category.id">
                   <v-list-item>
                       <v-list-item-action>
                           <v-btn icon small @click="edit(index)">
                               <v-icon color="orange">edit</v-icon>
                           </v-btn>

                       </v-list-item-action>
                       <v-list-item-content>
                           <v-list-item-title>{{category.name}}</v-list-item-title>
                       </v-list-item-content>
                       <v-list-item-action>
                           <v-btn icon small @click="destroy(category,index)">
                               <v-icon color="red">delete</v-icon>
                           </v-btn>
                       </v-list-item-action>
                   </v-list-item>
                   <v-divider></v-divider>
               </div>

           </v-list>
       </v-card>
   </v-container>
</template>
<script>
    export default {
        data(){
            return{
                form:{
                    name:''
                },
                categories:{},
                editId:null
            }
        },
        computed:{
            disabled(){
                return !this.form.name;
            }
        },
        created() {
            axios.get('/api/category')
                .then(res => this.categories=res.data)
        },
        methods:{
            create(){
                this.editId ? this.update() : this.addNew();

            },
            update(){
                axios.patch(`/api/category/${this.editId}`,this.form)
                    .then(res => {
                        this.categories.unshift(res.data)
                        this.form.name=''
                    });
            },
            addNew(){
                axios.post('/api/category',this.form)
                    .then(res => {
                        this.categories.unshift(res.data)
                        this.form.name=''
                    });
            },
            destroy(category,index){
                axios.delete(`/api/category/${category.id}`)
                    .then(res => this.categories.splice(index,1))
            },
            edit(index){
            this.form.name = this.categories[index].name;
            this.editId = this.categories[index].id;
            this.categories.splice(index,1);
            }
        }
    }
</script>

<style scoped>

</style>
