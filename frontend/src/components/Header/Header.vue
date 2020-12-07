<template>
  <b-navbar class="header d-print-none app-header">
    <b-nav>
      <b-nav-item> <!--사이드바 숨겨주는 바-->
        <a class="d-md-down-none px-2" href="#" @click="toggleSidebarMethod" id="barsTooltip">
          <i class='la la-bars la-lg'/>
        </a>
        <a class="fs-lg d-lg-none" href="#" @click="switchSidebarMethod">
          <i class="la la-bars la-lg"/>
        </a>
      </b-nav-item>
    </b-nav>
    <b-nav>
      <b-form class="d-sm-down-none ml-5" inline>
        <b-form-group class="search">
          <b-input-group class="input-group-no-border">
            <template v-slot:prepend>
              <b-input-group-text><i class="la la-search"/></b-input-group-text>
            </template>
            <b-form-input id="search-input" v-model="searchValue" placeholder="검색어를 입력해주세요."
                          @keypress.enter="fnGetSearchValue"/>
            <a href="javascript:;" style="border: #a3aeb7; background: #a3aeb7" @click="fnGetSearchValue"
               class="btn">검색</a>
          </b-input-group>
        </b-form-group>
      </b-form>
    </b-nav>
    <a class="navbarBrand d-md-none">
      <i class="fa fa-circle text-primary mr-n-sm"/>
      <i class="fa fa-circle text-danger"/>
      &nbsp;
      QAS
      &nbsp;
      <i class="fa fa-circle text-danger mr-n-sm"/>
      <i class="fa fa-circle text-primary"/>
    </a>
    <b-nav class="ml-auto">
      <b-nav-item-dropdown
          class="notificationsMenu d-md-down-none mr-2"
          menu-class="notificationsWrapper py-0 animated animated-fast fadeIn"
          right>
        <template slot="button-content">
          <span class="avatar rounded-circle thumb-sm float-left mr-2">
          </span>
          <span class="small">Usename</span> <!--사용자명-->
        </template>
        <Notifications/>
      </b-nav-item-dropdown>
      <!-- 오른쪽 상단 -->
      <b-nav-item-dropdown id="v-step-2" class="settingsDropdown d-sm-down-none" no-caret right>
        <template slot="button-content">
          <i class="la la-cog px-2"/>
        </template>

        <b-dropdown-item-button @click="mypage">
          <i class="la la-user"/> My Account
        </b-dropdown-item-button>
        <b-dropdown-divider/>
        <b-dropdown-item-button @click="logout">
          <i class="la la-sign-out"/> Log Out
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
    </b-nav>
  </b-navbar>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Notifications from '@/components/Notifications/Notifications';
import axios from 'axios';

export default {
  data() {
    return {
      searchValue: ''
    }
  },
  name: 'Header',
  components: {Notifications},
  computed: {
    ...mapState('layout', ['sidebarClose', 'sidebarStatic']),
  },
  methods: {
    ...mapActions('layout', ['toggleSidebar', 'switchSidebar', 'changeSidebarActive']),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    toggleSidebarMethod() {
      if (this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      } else {
        this.toggleSidebar();
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    logout() {
      window.localStorage.setItem('authenticated', false);
      this.$router.push('/login');
    },
    mypage() {
      this.$router.push('/mypage');
    },
    async fnGetSearchValue() {
      console.log('진입')
      await axios.get('http://localhost:8080/board/search', {params: this.body, data: this.searchValue})
          .then(({data}) => {
            console.log(data.searchValue)
            this.searchValue = data.searchValue
          })
    }
  }
};
</script>

<style src="./Header.scss" lang="scss"></style>
