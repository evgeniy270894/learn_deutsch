<template>
    <v-card color="info" class="white--text">
        <v-container fluid>
            <div class="hidden-sm-and-down">
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
                                <div>Уровень: {{getBookLevel(book.level)}}, {{ book.parts.length}} частей</div>
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
                            <v-btn :to="{name: 'book', params: {id: book.id}}"
                                   class="primary" dark flat>
                                Открыть
                            </v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </div>
            <div class="hidden-md-and-up">
                <v-layout row wrap>
                    <v-flex xs12 sm4 md3>
                        <v-img src="https://images-na.ssl-images-amazon.com/images/I/51Z894F9K7L._SY445_.jpg"
                               height="150">

                        </v-img>
                        <div class="text-xs-center">
                            <v-btn block flat color="white">
                                <v-icon left>visibility</v-icon>
                                youtube
                            </v-btn>
                            <v-btn :to="{name: 'book', params: {id: book.id}}"
                                   block class="primary" dark flat>
                                Открыть
                            </v-btn>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm8 md9>
                        <v-card-title>
                            <div>
                                <div class="headline">{{ book.title }}</div>
                                <div>{{ book.description }}</div>
                                <v-divider class="white"></v-divider>
                                <div>Уровень: {{getBookLevel(book.level)}}, {{ book.parts.length}} частей</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-rating v-model="book.rating" color="yellow" dense readonly
                                      half-increments></v-rating>
                            <div class="ml-1">
                                <span>{{book.rating}}</span>
                                <span> ({{book.ratingsCount}})</span>
                            </div>

                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>
    </v-card>
</template>

<script>
    import { helperBooks } from '../mixins/books'
    export default {
        name: "BooksListItem",
        mixins: [helperBooks],
        props: {
            book: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
