<template>
  <div>
    <h2>검색결과</h2>

    <div class="AddWrap" style="padding: 55px">
      <form>
        <h4>[검색어: {{ this.keyword }}]</h4>
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
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      body: this.$route.query
      , list: []
      , keyword:
    }
  }
  , methods: {
    fnMove() {
      this.$router.push({path: '/board/list', query: this.body});
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

</style>