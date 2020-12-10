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
            <input v-model="id" style="width: 68%; float: left;" class="form-control no-border"
                   ref="id" required type="text" placeholder="아이디" @keyup.enter="join"/>
            <b-button style="width: 30%; float: right;" type="button" size="sm" class="auth-btn mb-3" @click="authId">
              아이디 확인
            </b-button>
          </div>

          <div class="form-group">
            <input v-model="name" class="form-control no-border"
                   ref="name" required type="text" placeholder="이름" @keyup.enter="moveToPassword"/>
          </div>

          <div class="form-group">
            <input v-model="password" class="form-control no-border" ref="password" required
                   type="password" placeholder="비밀번호"/>
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">
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
      password: '',
      idChecked: ''
    }
  },

  methods: {
    authId() {
      if (!this.id) {
        alert('아이디를 입력해주세요.');
        this.$refs.id.focus();
      } else if (this.id.length < 8 || this.id.length > 12) {
        alert('아이디는 최소 8자에서 최대 12자까지 입력하실 수 있습니다.');
      } else {
        this.$store.dispatch('join/authId', this.id)
        this.idChecked = 'Y';
        this.moveToName()
      }
    },
    join() {
      if (!this.id) {
        this.$refs.id.focus();
      } else if (!this.name) {
        this.moveToName();
      } else if (!this.password) {
        this.moveToPassword();
      } else if (this.id.length < 8 || this.id.length > 12) {
        alert('아이디는 최소 8자에서 최대 12자까지 입력하실 수 있습니다.');
      } else if (this.name.length < 3 || this.name.length > 10) {
        alert('이름은 최소 3자에서 최대 10자까지 입력하실 수 있습니다.');
      } else if (this.password.length < 8 || this.password.length > 12) {
        alert('비밀번호는 최소 8자에서 최대 12자까지 입력하실 수 있습니다.');
      } else if (this.idChecked !== 'Y') {
        alert('아이디 인증을 먼저 진행해주세요.');
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