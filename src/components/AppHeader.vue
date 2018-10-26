<template>
    <div>
        <v-navigation-drawer absolute
                             flat
                             temporary
                             v-model="drawer"
                             class="hidden-md-and-up"
        >
            <v-list>
                <v-list-tile v-for="(item, i) in menuItems"
                             :key="`mobilelist${i}`"
                             :to="item.route">
                    <v-list-tile-action>
                        <v-icon left>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app
                   color="primary"
                   dark
                   flat
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"
                                 class="hidden-md-and-up">
            </v-toolbar-side-icon>
            <v-toolbar-title class="pointer" @click="$router.push('/')">Ich Lerne Deutsch</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="(item, i) in menuItems"
                       :key="`menuindex${i}`"
                       :to="item.route"
                       flat>
                    <v-icon left>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>
                <v-btn @click.prevent="dialog = true"
                       v-if="isAuthenticated"
                       flat>
                    <v-icon left>exit_to_app</v-icon>
                    Выйти
                </v-btn>
                <v-dialog v-model="dialog"  persistent max-width="400">
                    <v-card>
                        <v-card-title>Вы точно хотите выйти?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary darken-1" flat @click.native="dialog = false">Нет</v-btn>
                            <v-btn color="primary darken-1" flat @click.prevent="signout">Да</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-toolbar-items>
        </v-toolbar>

    </div>

</template>

<script>

    export default {
        name: "AppHeader",

        data() {
            return {
                drawer: false,
                dialog: false
            }
        },

        computed: {
            isAuthenticated() {
                return this.$store.getters.isAuthenticated
            },
            menuItems() {
                // условие, если юзер залогинен то возвращаем один массив если нет то другой
                return this.isAuthenticated ? [
                        {
                            icon: 'visibility',
                            title: 'Читать',
                            route: '/books'
                        },
                        {
                            icon: 'extension',
                            title: 'Учить слова',
                            route: '/words'
                        },
                        {
                            icon: 'account_circle',
                            title: 'Мой кабинет',
                            route: '/profile'
                        },
                    ]
                        :
                    [
                        {
                            icon: 'visibility',
                            title: 'Читать',
                            route: '/books'
                        },
                        {
                            icon: 'input',
                            title: 'Войти',
                            route: '/signin'
                        },
                        {
                            icon: 'lock_open',
                            title: 'Зарегистрироватся',
                            route: '/signup'
                        }
                    ]
            }
        },
        methods: {
            signout(){
                this.dialog = false
                this.$store.dispatch('SIGNOUT')
                this.$router.push('/signin')
            }
        }
    }
</script>

<style scoped>
    .pointer {
        cursor: pointer !important;
    }
</style>
