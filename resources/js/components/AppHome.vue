<template>
<div>
    <tool-bar></tool-bar>
    <router-view></router-view>
    <app-footer></app-footer>


</div>
</template>

<script>
    import Toolbar from "./Toolbar";
    import AppFooter from "./AppFooter";

    export default {
       components:{
           'tool-bar':Toolbar,
           'app-footer':AppFooter
       }
    }
</script>

<style scoped>

</style>
