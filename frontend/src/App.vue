<template>
  <router-view />
</template>

<script>
export default {
  created() {
    const currentPath = this.$router.history.current.path;

//    if (window.localStorage.getItem('authenticated') === 'false') {
//      this.$router.push('/login');
//    }

    if (currentPath === '/' || currentPath === '/') {
      this.$router.push('/main');
    }
  },
};
</script>

<style src="./styles/theme.scss" lang="scss" />
