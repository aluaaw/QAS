<template>
  <div class="error-page">
    <b-container>
      <div class="errorContainer mx-auto">
        <h1 class="errorCode">404</h1>
        <p class="errorInfo">
            Opps, it seems that this page does not exist.
        </p>
        <p class="errorHelp mb-3">
            메인으로 돌아가려면 아래 버튼을 눌러주세요.
        </p>
        <b-form>
          <router-link tag="a" to="/login">
            <b-button class="btn">메인으로 돌아가기</b-button>
          </router-link>
        </b-form>
      </div>
      <footer class="pageFooter">
        Quality and Satisfy
      </footer>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Error',
};
</script>

<style src="./Error.scss" lang="scss" scoped />