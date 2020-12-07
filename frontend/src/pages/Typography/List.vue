<template>
  <div>
    <h2>게시판 리스트</h2>
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
          <th style="text-align: center">글쓴이</th>
          <th style="text-align: center">최종 작성일</th>
          <th style="text-align: center">조회수</th>
        </tr>
        <tr v-if="list === undefined">
          <td colspan="5" style="text-align: center">게시글이 없습니다.</td>
        </tr>

        <tr v-else v-for="data in list" v-bind:key="data.postIdx">
          <td style="text-align: center">{{ data.postIdx }}</td>
          <td class="txt_left"><a href="javascript:;" @click="fnView(`${data.postIdx}`)">{{ data.title }}</a></td>
          <td style="text-align: center">헬로월드</td> <!-- userName -->
          <td style="text-align: center">{{ data.updateDate }}</td> <!-- updateDate -->
          <td style="text-align: center">0</td> <!-- view -->
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

export default {
  data() {
    return {
      list: []
    }
  }
  , created() {
    this.getList();
  }
  , methods: {
    fnAdd() {
      this.$router.push({path: './write', query: this.body});
    }
    , getList() {
      return axios.get("http://localhost:8080/board")
          .then(({data}) => {
            this.list = data;
          })
          .then((err) => {
            console.log(err);
          })
    },
    fnView(postIdx) {
      this.$router.push({path: '/view/' + postIdx, query: this.body})
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
  text-align: center;
  float: bottom;
  padding: 10px;
}

.btn {
  background: #a3aeb7;
}
</style>