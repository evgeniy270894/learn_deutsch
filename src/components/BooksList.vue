<template>
    <v-container grid-list-lg fluid>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-container fluid>
                    <v-layout row>
                        <v-flex xs7 sm8>
                            <v-text-field
                                    v-model="search"
                                    append-icon="search"
                                    label="Поиск"
                                    single-line
                                    hide-details
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs5 sm4>
                            <v-select
                                    v-model="level"
                                    :items="items"
                                    label="Уровень"
                                    multiple
                            ></v-select>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex v-for="book in filteredBooks"
                    xs12 sm10 md8 offset-sm1 offset-md2>
                <book :book="book"></book>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { helperBooks } from '../mixins/books'
    import book from './BooksListItem'
    export default {
        name: "BooksList",
        mixins: [helperBooks],
        data() {
            return {
                search: '',
                level: [],
                items: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
            }
        },
        components: {
            book
        },
        computed: {
            books() {
                return this.$store.getters.getBooks
            },
            filteredBooks() {
                let books = this.books
                if (this.search)
                    books = books.filter(b =>
                        b.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
                        || b.description.toLowerCase().indexOf(this.search.toLowerCase()) >= 0)

                if (this.level.length)
                    books = books.filter(b => this.level.filter(val => b.level.indexOf(val) !== -1).length > 0)
                return books
            }
        }
    }
</script>

<style scoped>

</style>
