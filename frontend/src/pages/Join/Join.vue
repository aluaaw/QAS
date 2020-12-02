<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary"></i>
        QAS
        <i class="fa fa-circle text-danger"></i>
      </h5>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>회원가입</h3>" customHeader>
        <form class="mt" @keyup.enter="join">
          <div class="form-group">
            <input v-model="id" style="width: 78%; float: left;" class="form-control no-border"
                   ref="id" required type="text" id="id" placeholder="ID" @keyup.enter="authId"/>
          </div>
          <b-button style="width: 20%; float: right;" type="submit" size="sm" class="auth-btn mb-3"
                    variant="inverse" @submit.prevent="authId">인증
          </b-button>

          <div class="form-group">
            <input v-model="password" class="form-control no-border" ref="password" required
                   type="password" id="password" placeholder="Password"/>
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
      password: '',
      role: 'USER' //고민
    }
  },
  methods: {
    authId() {
      this.$store.dispatch('join/authIds', this.id)
    },
    join() {
      this.$store.dispatch('join/joinProcess', {
        id: this.id,
        password: this.password
      })
      this.clearForm();
    },
    clearForm() {
      this.id = null
      this.password = null
    },
    cancel() {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>