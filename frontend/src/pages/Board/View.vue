<template>
  <div>
    <h2>게시판 상세보기</h2>

    <div class="AddWrap" style="padding: 55px">
      <form>
        <h4>{{ this.title }}</h4>
        <table class="tbAdd">
          <colgroup>
            <col width="15%"/>
            <col width="*"/>
          </colgroup>
          <tr>
            <th>조회수</th>
            <td>{{ this.view }}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td class="txt_cont" v-html="content">{{ this.content }}</td>
          </tr>
        </table>
      </form>
    </div>

    <div class="btnWrap">
      <a href="javascript:;" @click="fnList" class="btn">목록으로</a>
      <a href="javascript:;" @click="fnEdit" class="btn">수정하기</a>
      <a href="javascript:;" @click="fnDelete" class="btn">삭제하기</a>
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
      , num: this.$route.params.postidx
    }
  }
  , created() {
    this.fnGetView();
  }
  , methods: {
    fnList() {
      this.$router.push({path: '/board/list', query: this.body});
    }
    , fnEdit() {
      this.$router.push({path: '/board/edit/' + this.num, query: this.body});
    }
    , fnGetView() {
      if(this.title === undefined) {
        alert("게시글에 문제가 생겼습니다. 리스트 페이지로 돌아갑니다.");
        this.fnList();
      }

      return axios.get('https://160bb4d70872.ngrok.io/board' + '/' + this.num, {params: this.body})
          .then(({data}) => {
            this.view = data.view;
            this.title = data.title;
            this.content = data.content.replace(/(\n)/g, '<br/>');
          })
          .catch(() => {
            alert("게시글 불러오는 것을 실패하였습니다.");
          })
    }
    , fnDelete() {
      return axios.delete('https://160bb4d70872.ngrok.io/board' + '/' + this.num, {params: this.body})
          .then(() => {
            alert("삭제가 완료되었습니다.");
            this.fnList();
          })
          .catch(() => {
            alert("삭제 실패하였습니다.");
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