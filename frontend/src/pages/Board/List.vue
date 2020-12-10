<template>
  <div>
    <h2>게시판 리스트</h2>
    <div class="search">
      <b-form class="d-sm-down-none ml-5" inline @submit.prevent="fnSearch">
        <b-form-group class="search">
          <b-input-group class="input-group-no-border">
            <h5 style="margin: 0 0 0 25px;">검색어 : </h5>
            <input id="search-input" v-model="searchValue" placeholder="검색어를 입력해주세요." type="text"
                   @keypress.enter="fnSearch" style="margin: 0 0 0 15px;" ref="searchValue"/>
            <b-button @click="fnSearch" class="btn">검색</b-button>
          </b-input-group>
        </b-form-group>
      </b-form>
    </div>

    <div class="listWrap" style="padding: 55px">
      <table class="tbList">
        <colgroup>
          <col width="5%"/>
          <col width="25%"/>
          <col width="5%"/>
          <col width="8%"/>
          <col width="2%"/>
        </colgroup>
        <tr>
          <th style="text-align: center">번 호</th>
          <th style="text-align: center">제 목</th>
          <th style="text-align: center">최종 작성일</th>
          <th style="text-align: center">조회수</th>
        </tr>
        <tr v-if="list === 0">
          <td colspan="5" style="text-align: center">게시글이 없습니다.</td>
        </tr>

        <tr v-else v-for="data in list" v-bind:key="data.postIdx">
          <td style="text-align: center">{{ data.postIdx }}</td>
          <td class="txt_left"><a href="javascript:;" @click="fnView(`${data.postIdx}`)">{{ data.title }}</a></td>
          <td style="text-align: center">{{ data.updateDate }}</td>
          <td style="text-align: center">{{ data.view }}</td>
        </tr>
      </table>
    </div>

    <div class="btnRightWrap">
      <b-button @click="fnAdd" class="btn">글쓰기</b-button>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import InfiniteLoading from 'vue-infinite-loading';

export default {
  data() {
    return {
      list: [],
      searchValue: '',
      postIdx: '',
      limit: 0
    }
  }
  , components: {
    InfiniteLoading
  }
  , created() {
    this.fnSearch();
  }
  , methods: {
    fnAdd() {
      this.$router.push({path: '/board/write', query: this.body});
    }
    , fnSearch() {
      return axios.get('https://160bb4d70872.ngrok.io/board', {params: {searchValue: this.searchValue}})
          .then(({data}) => {
            this.list = data;
            this.searchValue = null;
            this.$refs.searchValue.focus();
          })
          .catch(() => {
            alert("검색 결과를 불러오지 못했습니다.");
          })
    },
    fnView(postIdx) {
      this.$router.push({path: '/board/view/' + postIdx, query: this.body})
    }
  }
}
</script>

<style scoped>
.tbList th {
  border-top: 1px solid #888;
}

.tbList th, .tbList td {
  border-bottom: 1px solid #eee;
  padding: 5px 0;
}

.tbList td.txt_left {
  text-align: left;
}

.btnRightWrap {
  float: bottom;
  padding: 10px;
  margin: 10px 0 0 50px;
}

.btn {
  background: #a3aeb7;
  border: #a3aeb7;
  margin: 0 0 0 10px;
}

.search {
  float: left;
  margin: 10px 0 0 0;
}
</style>