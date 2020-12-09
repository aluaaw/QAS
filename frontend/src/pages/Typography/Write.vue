<template>
  <div>
    <h2>게시판 등록</h2>
    <div class="AddWrap" style="padding: 55px">

      <div>
        <form>
          <table class="tbAdd">
            <colgroup>
              <col width="10%"/>
              <col width="10"/>
            </colgroup>
            <tr>
              <th>제목</th>
              <td>
                <div class="input">
                  <input hidden="hidden"/>
                  <input required type="text" v-model="title" ref="title" @keypress.enter="moveToContent"/>
                </div>
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <div class="input">
                  <textarea v-model="content" id="content" ref="content" @submit.prevent="fnAddProc"/>
                </div>
              </td>
            </tr>
          </table>
        </form>
      </div>

      <div class=" btnWrap">
        <a href="javascript:;" @click="fnList" class="btn">목록으로</a>
        <a href="javascript:;" @click="fnAddProc" class="btn">등록하기</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {},
      title: '',
      content: '',
      num: this.$route.params.postidx
    }
  },
  methods: {
    fnList() {
      this.$router.push({path: '/board/list', query: this.body});
    },
    fnAddProc() {
      if (!this.title) {
        alert("제목을 입력해 주세요.");
        this.$refs.title.focus();
      } else if (!this.content) {
        alert("내용을 입력해 주세요.");
        this.$refs.content.focus();
      } else {
        this.form = {
          title: this.title,
          content: this.content
        }

        axios.post('https://296489452787.ngrok.io/board', this.form)
            .then(() => {
              alert("게시글이 등록되었습니다.");
              return this.fnList();
            })
            .catch(() => {
              alert("등록 실패하였습니다.");
            })
      }
    },
    moveToContent() {
      document.getElementById('content').focus();
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

.tbAdd th {
  padding: 10px;
}

.tbAdd td {
  padding: 10px 10px;
  box-sizing: border-box;
}

.tbAdd td input {
  width: 100%;
  min-height: 30px;
  box-sizing: border-box;
  padding: 0 10px;
}

.tbAdd td textarea {
  width: 100%;
  min-height: 300px;
  padding: 10px;
  box-sizing: border-box;
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

.input {
  width: 100%;
  min-width: 1000px;
}

</style>