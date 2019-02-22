<template>

</template>

<script>
    export default {
        name: "BookPart",
        props: {
            bookId: {
                type: String,
                required: true
            },
            partId: {
                type: String,
                required: true
            }
        },
        computed: {
            part () {
               let val = this.$store.getters.getParts()
            }
        }
    }
</script>

<style scoped>

</style>
