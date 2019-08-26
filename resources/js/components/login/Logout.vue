<template>

</template>

<script>
    export default {
        created() {
            eventBus.$emit('logout');
        }
    }
</script>

<style scoped>

</style>
