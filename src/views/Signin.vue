<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar flat dark color="primary">
                        <v-toolbar-title>Вход</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid">
                            <v-text-field v-model="email"
                                          :rules="[rules.required]"
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
                                    :rules="[rules.required]"
                                    :type="show1 ? 'text' : 'password'"
                                    name="password"
                                    label="Пароль"
                                    hint="Введите свой пароль"
                                    ref="2"
                                    @click:append="show1 = !show1"
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
                        <v-btn @click.prevent="signin"
                               color="primary"
                               :disabled="processing || !valid"
                               :loading="processing"
                        >
                            Войти
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Singin",
        data() {
            return {
                valid: false,
                show1: false,
                email: '',
                password: '',
                rules: {
                    required: value => !!value || 'Обязательное поле',
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Некоректный email'
                    }
                }
            }
        },


        computed: {
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
            signin() {
                this.$store.dispatch('SIGNIN', {
                    email: this.email,
                    password: this.password
                })

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
