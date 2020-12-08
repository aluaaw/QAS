<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary"></i>
        QAS
        <i class="fa fa-circle text-danger"></i>
      </h5>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>회원가입</h3>" customHeader>
        <form class="mt" @keyup.enter="join" @submit.prevent="join">
          <div class="form-group">
            <input v-model="id" style="width: 78%; float: left;" class="form-control no-border"
                   ref="id" required type="text" placeholder="아이디" @keyup.enter="join"/>
            <b-button style="width: 20%; float: right;" type="button" size="sm" class="auth-btn mb-3" @click="authId">
              인증
            </b-button>
          </div>

          <div class="form-group">
            <input v-model="name" class="form-control no-border"
                   ref="name" required type="text" placeholder="이름" @keyup.enter="moveToPassword"/>
          </div>

          <div class="form-group">
            <input v-model="password" class="form-control no-border" ref="password" required
                   type="password" placeholder="비밀번호" @submit.prevent="join"/>
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse" @click="join">
            가입하기
          </b-button>
          <b-button size="sm" class="auth-btn mb-3" variant="inverse" @click="cancel">
            취소하기
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

export default {
  components: {Widget},
  data() {
    return {
      id: '',
      name: '',
      password: ''
    }
  },
  methods: {
    authId() {
      this.$store.dispatch('join/authId', this.id)
      this.moveToName()
    },
    join() {
      if (!this.id) {
        this.$refs.id.focus();
      } else if (!this.name) {
        this.moveToName()
      } else if (!this.password) {
        this.moveToPassword()
      } else {
        this.$store.dispatch('join/joinProcess', {
          id: this.id,
          name: this.name,
          password: this.password
        })
        this.clearForm();
      }
    },
    moveToName() {
      this.$refs.name.focus();
    },
    moveToPassword() {
      this.$refs.password.focus();
    },
    clearForm() {
      this.id = null
      this.name = null
      this.password = null
    },
    cancel() {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>