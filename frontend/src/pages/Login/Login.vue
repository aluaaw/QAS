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
          <div class="form-group">
            <input class="form-control no-border" @keyup.enter="moveToPassword" ref="email" required type="id"
                   id="id"
                   placeholder="Email" v-model="id"/>
          </div>
          <div class="form-group">
            <input class="form-control no-border" @keyup.enter="login" ref="password" required type="password"
                   id="password"
                   placeholder="Password" v-model="password"/>
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">Login</b-button>
        </form>
        <p class="widget-auth-info">
          혹시 회원이 아니세요?
        </p>
        <router-link class="d-block text-center" to="join">회원가입</router-link>
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
      id: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (!this.id) {
        this.moveToId();
      } else if (!this.password) {
        this.moveToPassword();
      } else {
        this.$store.dispatch('login/loginProcess', {
          id: this.id,
          password: this.password
        })
        this.clearForm()
      }
    },
    moveToId() {
      document.getElementById('id').focus()
    },
    moveToPassword() {
      document.getElementById('password').focus()
    },
    clearForm() {
      this.id = null
      this.password = null
    }
  }
};
</script>