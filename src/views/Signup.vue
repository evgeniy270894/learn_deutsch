<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar flat dark color="primary">
                        <v-toolbar-title>Регистрация</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid">
                            <v-text-field v-model="email"
                                          :rules="[rules.required, rules.email]"
                                          clearable
                                          prepend-icon="person"
                                          name="login"
                                          label="E-mail"
                                          type="email"
                                          ref="1"
                            >
                            </v-text-field>
                            <v-text-field
                                    v-model="password"
                                    :append-icon="show1 ? 'visibility_off' : 'visibility'"
                                    prepend-icon="lock"
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    name="password"
                                    label="Придумайте пароль"
                                    hint="Не менее 6 сиволов"
                                    ref="2"
                                    @click:append="show1 = !show1"
                            ></v-text-field>
                            <v-text-field
                                    v-model="secondPassword"
                                    :append-icon="show2 ? 'visibility_off' : 'visibility'"
                                    prepend-icon="lock"
                                    :rules="[rules.required, rules.min, rules.equal]"
                                    :type="show2 ? 'text' : 'password'"
                                    name="secondpassword"
                                    label="Повторите пароль"
                                    ref="3"
                                    hint="Не менее 6 сиволов"
                                    @click:append="show2 = !show2"
                            ></v-text-field>
                        </v-form>
                        <v-alert
                                :value="error"
                                type="warning"
                        >
                            {{ error }}
                        </v-alert>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click.prevent="signup"
                               color="primary"
                               :disabled="processing || !valid"
                               :loading="processing"
                        >
                            Отправить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Singup",

        data() {
            return {
                valid: false,
                show1: false,
                show2: false,
                email: '',
                password: '',
                secondPassword: '',
                rules: {
                    required: value => !!value || 'Обязательное поле',
                    min: v => v.length >= 6 || 'Минимальная длинна 6 символов',
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Некоректный email'
                    },
                    equal: () => this.equal || 'Пароли не совпадают'
                }
            }
        },


        computed: {
            equal() {
                return (this.password === this.secondPassword && (this.password || this.secondPassword) !== '')
            },
            error() {
                return this.$store.getters.getError
            },
            processing() {
                return this.$store.getters.getProcessin
            },
            isAuthenticated() {
                return this.$store.getters.isAuthenticated
            }
        },

        methods: {
            signup() {
                if (this.password === this.secondPassword) {
                    this.$store.dispatch('SIGNUP', {
                        email: this.email,
                        password: this.password
                    })
                } else {
                    this.password = ''
                    this.secondPassword = ''
                }

            }
        },
        watch: {
            isAuthenticated(val) {
                if (val === true) this.$router.push('/')
            },

        }
    }
</script>

<style scoped>

</style>
