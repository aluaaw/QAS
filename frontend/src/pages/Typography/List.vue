<template>
  <div>
    <h2>게시판 리스트</h2>

    <div class="listWrap">
      <table class="tbList">
        <colgroup>
          <col width="10%"/>
          <col width="30%"/>
          <col width="45%"/>
          <col width="40%"/>
        </colgroup>
        <div class="btnRightWrap">
          <b-button @click="fnAdd" class="btn">등록</b-button>
        </div>

        <tr>
          <th>번 호</th>
          <th>제 목</th>
          <th>내 용</th>
          <th>작성일</th>
        </tr>

        <tr v-if="list === null">
          <td colspan="4">데이터가 없습니다.</td>
        </tr>

        <tr v-else v-for="data in list">
          <td>{{ data.postIdx }}</td>
          <td class="txt_left"><a href="javascript:;">{{ data.title }}</a></td>
          <td>{{ data.content }}</td>
          <td>{{ data.createDate }}</td>
        </tr>
      </table>
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
  , mounted() {
    this.getList();
  }
  , methods: {
    fnAdd() {
      this.$router.push({path: './write', query: this.body});
    }
    , getList() {
      return axios.get("http://localhost:8080/board")
          .then(({data}) => {
            console.log("성공", data)
            this.list = data;
          })
          .then((err) => {
            console.log(err);
          })
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
  text-align: right;
}

.btn {
  background: #43b984
}
</style>