<template> <v-form @submit.prevent="create">
    <v-container grid-list-xl>
        <v-layout wrap>
            <v-flex
                xs12 >
                <v-text-field
                    v-model="form.title"
                    label="Title"
                    type="text"
                    name="title"
                    required
                ></v-text-field>
            </v-flex>
            <v-flex
                xs12>
                <v-select
                    v-model="form.category_id"
                    :items="categories"
                    item-text="name"
                    item-value="id"
                    label="Category"
                    autocomplete
                    required
                ></v-select>
            </v-flex>
            <v-flex xsm12>
                <vue-simplemde v-model="form.body"/>

                <v-btn color="blue" type="submit" :disabled="disabled">Submit</v-btn>
            </v-flex>

        </v-layout>
    </v-container>
</v-form>
</template>

<script>
    export default {
        data(){
            return{
                categories:[],
                form:{
                    title:null,
                    category_id:null,
                    body:null
                },
                errors:{}
            }
        },
        computed:{
            disabled(){
                return !(this.form.title && this.form.category_id && this.form.body)
            }
        },
        created(){
            axios.get('api/category')
                .then(res => this.categories = res.data)
        },
        methods:{
            create(){
               axios.post('api/question',this.form)
             .then(res => this.$router.push(res.data.path))
             .catch(error => this.errors = error.response.data.error)
            },

        }
    }
</script>

<style scoped>

</style>
