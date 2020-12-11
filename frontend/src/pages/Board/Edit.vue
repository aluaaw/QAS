<template>
  <div>
      <h2>게시글 {{menuTitle}}</h2>
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
                  <textarea v-model="content" id="content" ref="content" @submit.prevent="fnUpdateProc"/>
                </div>
              </td>
            </tr>
          </table>
        </form>
      </div>

      <div class=" btnWrap">
        <a href="javascript:;" @click="fnList" class="btn">목록으로</a>
        <a href="javascript:;" @click="fnDivision" class="btn">{{ btnContent }}</a>
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
      menuTitle: '',
      btnContent: '',
      title: '',
      content: '',
      num: this.$route.params.postidx
    }
  },
  created() {
    if (this.num != null) {
      this.fnGetPost()
    }
    if (this.num == null) {
      this.menuTitle = '등록';
      this.btnContent = '등록하기';
    } else {
      this.menuTitle = '수정';
      this.btnContent = '수정하기';
    }
  },
  methods: {
    fnList() {
      this.$router.push({path: '/board/list', query: this.body});
    },
    fnView() {
      this.$router.push({path: '/board/view/' + this.num, query: this.body});
    },
    fnGetPost() {
      if (this.title === undefined) {
        alert("게시글에 문제가 생겼습니다. 리스트 페이지로 돌아갑니다.");
        this.fnList();
      }
      return axios.get('http://localhost:8080/board' + '/' + this.num, {params: this.body})
          .then(({data}) => {
            this.title = data.title;
            this.content = data.content;
          })
          .catch(() => {
            alert("정보를 불러오지 못했습니다");
          })
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
        axios.post('https://160bb4d70872.ngrok.io/board', this.form)
            .then(() => {
              alert("게시글이 등록되었습니다.");
              return this.fnList();
            })
            .catch(() => {
              alert("등록 실패하였습니다.");
            })
      }
    },
    fnUpdateProc() {
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
        return axios.put('https://160bb4d70872.ngrok.io/board' + '/' + this.num, this.form)
            .then(() => {
              alert("게시글이 수정되었습니다.");
              return this.fnView();
            })
            .catch(() => {
              alert("수정 실패하였습니다.");
            })
      }
    },
    fnDivision() {
      if (this.num == null) {
        this.fnAddProc();
      } else {
        this.fnUpdateProc();
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