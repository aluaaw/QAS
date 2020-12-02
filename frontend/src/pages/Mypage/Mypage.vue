<template>
    <div class="auth-page">
        <b-container>
            <h5 class="auth-logo">
                <i class="fa fa-circle text-primary"></i>
                QAS
                <i class="fa fa-circle text-danger"></i>
            </h5>
            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>My Page</h3>" customHeader>
                <form class="mt">
                    <div class="form-group">
                        <input v-model="userId" class="form-control no-border"
                               ref="id" required type="text" id="userId" placeholder="ID" @keyup.enter="moveToEmail"/>
                    </div>
                    <div class="form-group">
                        <input v-model="userEmail" class="form-control no-border"
                               ref="email" required type="email" id="userEmail" placeholder="Email"
                               @keyup.enter="moveToPassword"/>
                    </div>
                    <div class="form-group">
                        <input v-model="userPassword" style="width: 78%; float: left;" class="form-control no-border"
                               ref="password" required
                               type="password" id="password" placeholder="Password"/>
                    </div>
                    <b-button style="width: 20%; float: right;" type="submit" size="sm" class="auth-btn mb-3"
                              variant="inverse" @submit.prevent="editPassword">Edit
                    </b-button>
                    <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse"
                              @submit.prevent="userUpdate">
                        Edit
                    </b-button>
                    <b-button size="sm" class="auth-btn mb-3" variant="inverse" v-on:click="cancel">
                        Cancel
                    </b-button>
                </form>
            </Widget>
        </b-container>
        <footer class="auth-footer">
            Quality And Satisfy
        </footer>
    </div>
</template>

<script>
    import Widget from '@/components/Widget/Widget';
    //  import {mapState} from 'vuex'

    export default {
        components: {Widget},
        data() {
            return {
                userId: null,
                userEmail: null,
                userPassword: null
            }
        },
        /*
                coumputed: {
                    ...mapState({})
                },
        */
        methods: {
            userUpdate() {
                alert('update')
            },
            editPassword() {
                this.$store.dispatch('join/authIds', this.userId)
            },
            moveToEmail() {
                document.getElementById('userEmail').focus()
            },
            moveToPassword() {
                document.getElementById('userPassword').focus()
            },
            clearForm() {
                this.userId = null
                this.userEmail = null
                this.userPassword = null
            },
            cancel() {
                this.$router.push({name: 'Login'})
            }
        }
    }
</script>