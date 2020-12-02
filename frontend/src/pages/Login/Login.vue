<template>
    <div class="auth-page">
        <b-container>
            <h5 class="auth-logo">
                <i class="fa fa-circle text-primary"></i>
                QAS
                <i class="fa fa-circle text-danger"></i>
            </h5>
            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>LOGIN</h3>" customHeader>
                <form class="mt" @submit.prevent="login">
                    <!--==
                                        <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
                                            {{errorMessage}}
                                        </b-alert>
                    -->
                    <div class="form-group">
                        <input class="form-control no-border" @keyup.enter="moveToPassword" ref="email" required type="email" id="userEmail"
                               placeholder="Email" v-model="userEmail"/>
                    </div>
                    <div class="form-group">
                        <input class="form-control no-border" @keyup.enter="login" ref="password" required type="password"
                               id="userPassword"
                               placeholder="Password" v-model="userPassword"/>
                    </div>
                    <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">Login</b-button>
                    <!--          <p class="widget-auth-info">or sign in with</p>
                              <div class="social-buttons">
                                <b-button variant="primary" class="social-button mb-2">
                                  <i class="social-icon social-google"></i>
                                  <p class="social-text">GOOGLE</p>
                                </b-button>
                                <b-button variant="success" class="social-button">
                                  <i class="social-icon social-microsoft"></i>
                                  <p class="social-text">MICROSOFT</p>
                                </b-button>
                              </div> -->
                </form>
                <p class="widget-auth-info">
                    Don't have an account? Sign up now!
                </p>
                <router-link class="d-block text-center" to="join">Create an Account</router-link>
            </Widget>
        </b-container>
        <footer class="auth-footer">
            Quality And Satisfy
        </footer>
    </div>
</template>

<script>
    import Widget from '@/components/Widget/Widget';

    export default {
        components: {Widget},
        data() {
            return {
                userEmail: '',
                userPassword: '',
                role: 'USER'
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login/loginProcess', {
                    userEmail: this.userEmail,
                    userPassword: this.userPassword
                })
                this.clearForm()
            },
            moveToPassword() {
                document.getElementById('userPassword').focus()
            },
            clearForm() {
                this.userEmail = null
                this.userPassword = null
            }
        }
    };
</script>