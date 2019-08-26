<template>
    <v-card>
        <v-toolbar color="cyan" dark dense class="mt-2">
          <v-toolbar-title>Categories</v-toolbar-title>
        </v-toolbar>
        <v-list>
            <v-list-item>
             <v-list-item-content>
             <v-list-item-title v-for="category in categories" :key="category.id">{{category.name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        data(){
            return{
                categories:{}
            }
        },
        mounted() {
            axios.get('/api/category')
                .then(res => this.categories=res.data)
        }
    }
</script>

<style scoped>

</style>
