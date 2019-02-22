<template>
    <v-card color="accent" dark>
        <v-card-title primary-title class="headline">
            {{ part.title }}
        </v-card-title>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat >Открыть</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "BookPartListItem",
        props: {
            part: {
                type: Object,
                required: true
            },
            bookId: {
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
