<template>
  <div>
    <h2>게시판 상세보기</h2>

    <div class="AddWrap" style="padding: 55px">
      <form>
        <h4>{{ title }}</h4>
        <table class="tbAdd">
          <colgroup>
            <col width="15%"/>
            <col width="*"/>
          </colgroup>
          <tr>
            <th>작성자</th>
            <td>헬로월드</td>
          </tr>
          <tr>
            <th>조회수</th>
            <td>{{ view }}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td class="txt_cont" v-html="content">{{ content }}</td>
          </tr>
        </table>
      </form>
    </div>

    <div class="btnWrap">
      <a href="javascript:;" @click="fnList" class="btn">목록으로</a>
      <a href="javascript:;" @click="fnEdit" class="btn">수정하기</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      body: this.$route.query
      , title: ''
      , content: ''
      , view: 0
      , num: this.$route.query.num
    }
  }
  , mounted() {
    this.fnGetView();
  }
  , methods: {
    fnList() {
      delete this.body.num;
      this.$router.push({path: './list', query: this.body});
    }
    , fnEdit() {
      this.$router.push({path: './edit', query: this.body});
    }
    , fnGetView() {
      console.log(this.body.num) //postIdx
      return axios.get('http://localhost:8080/board/' + this.body.num, {params: this.body})
          .then(({data}) => {
            this.view = data.view;
            this.title = data.title;
            this.content = data.content.replace(/(\n)/g, '<br/>');
          })
          .catch((err) => {
            console.log(err);
          })
    }
  }
}
</script>

<style scoped>
.tbAdd {
  border-top: 1px solid #888;
}

.tbAdd th, .tbAdd td {
  border-bottom: 1px solid #eee;
  padding: 5px 0;
}

.tbAdd td {
  padding: 10px 10px;
  box-sizing: border-box;
  text-align: left;
}

.tbAdd td.txt_cont {
  height: 300px;
  vertical-align: top;
}

.btnWrap {
  text-align: left;
  float: bottom;
  padding: 55px;
}

.btnWrap a {
  margin: 0 10px;
}

.btn {
  background: #a3aeb7
}

.txt_cont {
  width: 100%;
  min-width: 1000px;
}
</style>