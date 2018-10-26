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
                    xs12 sm10 md8 offset-sm1 offset-md2 class="hidden-sm-and-down">
                <v-card color="info" class="white--text">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs4 md3>
                                <v-img src="https://images-na.ssl-images-amazon.com/images/I/51Z894F9K7L._SY445_.jpg"
                                       height="100">

                                </v-img>
                                <div class="text-xs-center">
                                    <v-btn block flat color="white">
                                        <v-icon left>visibility</v-icon>
                                        youtube
                                    </v-btn>
                                </div>
                            </v-flex>
                            <v-flex xs8 md9>
                                <v-card-title>
                                    <div>
                                        <div class="headline">{{ book.title }}</div>
                                        <div>{{ book.description }}</div>
                                        <v-divider class="white"></v-divider>
                                        <div>Уровень: {{getBookLevel(book.level)}}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-rating v-model="book.rating" color="yellow" dense readonly
                                              half-increments></v-rating>
                                    <div class="ml-1">
                                        <span>{{book.rating}}</span>
                                        <span> ({{book.ratingsCount}})</span>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-btn class="primary" dark flat>Открыть</v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>

            <v-flex v-for="book in filteredBooks"
                    xs12 sm10 md8 offset-sm1 offset-md2 class="hidden-md-and-up">
                <v-card color="info" class="white--text">
                    <v-container fluid>
                        <v-layout row wrap>
                            <v-flex>
                                <v-img aspect-ratio="2.5"
                                       src="https://images-na.ssl-images-amazon.com/images/I/51Z894F9K7L._SY445_.jpg">

                                </v-img>
                                <v-card-title>
                                    <div>
                                        <div class="headline">{{ book.title }}</div>
                                    </div>
                                </v-card-title>

                            </v-flex>
                            <v-flex>
                                <v-container>
                                    <v-layout row wrap>
                                        <v-flex xs12>
                                            <div>{{ book.description }}</div>
                                            <v-divider class="white"></v-divider>
                                            <div>Уровень: {{getBookLevel(book.level)}}</div>
                                        </v-flex>
                                        <v-flex xs12 sm6 class="mt-2">
                                            <v-layout align-center justify-center row fill-height>
                                                <v-rating v-model="book.rating" color="yellow" dense readonly half-increments></v-rating>
                                                <span>{{book.rating}}</span>
                                                <span> ({{book.ratingsCount}})</span>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs12 sm6 class="mt-2">
                                            <v-layout align-center justify-center row fill-height>
                                                <v-btn flat color="white">
                                                    <v-icon left>visibility</v-icon>
                                                    youtube
                                                </v-btn>
                                                <v-btn class="primary" dark flat>Открыть</v-btn>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-container>

                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>

    export default {
        name: "BooksList",

        data() {
            return {
                search: '',
                level: [],
                items: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
            }
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
        },
        methods: {
            getBookLevel(level) {
                return level.join('/')
            }
        }
    }
</script>

<style scoped>

</style>
