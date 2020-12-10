<template>
    <div class="dashboard-page">
        <h1 class="page-title">My QAS</h1>
        <b-row>
            <!--프로필 수정-->
            <div v-if="edit">
                <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Edit Profile</h3>" customHeader>
                    <form class="mt">
                        <div class="form-group" id="editProfile">
                            <img src="https://us.123rf.com/450wm/kahovsky/kahovsky1803/kahovsky180300069/98519348-%EC%9E%AC%EB%AF%B8-%ED%96%89%EB%B3%B5-%EA%B7%80%EC%97%AC%EC%9A%B4-%ED%96%89%EB%B3%B5-%EB%AF%B8%EC%86%8C-%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84-%EB%B2%A1%ED%84%B0-%ED%8F%89%EB%A9%B4-%EB%A7%8C%ED%99%94-%EC%BA%90%EB%A6%AD%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EA%B3%BC%EC%9D%BC-%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84-%EA%B0%9C%EB%85%90.jpg?ver=6">
                            <b-button size="sm" class="auth-btn mb-3" variant="inverse"
                                      @click="imgUpdate" style="width: 100%">Image Edit
                            </b-button>
                            <div class="form-group">
                                <input v-model="userId" class="form-control no-border"
                                       required type="text" placeholder="변경할 ID"/>
                            </div>
                        <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse"
                                  @click="profileUpdate">Profile Edit
                        </b-button>
                        <b-button size="sm" class="auth-btn mb-3" variant="inverse" v-on:click="cancel">
                            Cancel
                        </b-button>
                        </div>
                    </form>
                </Widget>
            </div>

            <!-- 그외 -->
            <div v-else>
                <b-col xs="12" md="6">
                    <div id="profile">
                        <figure>
                            <img src="https://us.123rf.com/450wm/kahovsky/kahovsky1803/kahovsky180300069/98519348-%EC%9E%AC%EB%AF%B8-%ED%96%89%EB%B3%B5-%EA%B7%80%EC%97%AC%EC%9A%B4-%ED%96%89%EB%B3%B5-%EB%AF%B8%EC%86%8C-%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84-%EB%B2%A1%ED%84%B0-%ED%8F%89%EB%A9%B4-%EB%A7%8C%ED%99%94-%EC%BA%90%EB%A6%AD%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EA%B3%BC%EC%9D%BC-%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84-%EA%B0%9C%EB%85%90.jpg?ver=6">
                            <h5 class="follow"><strong>userId</strong></h5> <!--{{$store.state.userId}}--> <br>
                            <br>
                            <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse"
                                      @click="profileEdit">프로필 수정
                            </b-button>
                        </figure>
                    </div>
                </b-col>
            </div>

        </b-row>
    </div>

  <!--
      <div class="auth-page">
        <b-container>
            <h5 class="auth-logo">
                <i class="fa fa-circle text-primary"></i>
                QAS
                <i class="fa fa-circle text-danger"></i>
            </h5>
            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>My Page</h3>" customHeader>
                <form class="mt">
                    <div class="form-group">
                        <input v-model="userId" class="form-control no-border"
                               ref="id" required type="text" id="userId" placeholder="ID" @keyup.enter="moveToEmail"/>
                    </div>
                    <div class="form-group">
                        <input v-model="userPassword" style="width: 78%; float: left;" class="form-control no-border"
                               ref="password" required
                               type="password" id="password" placeholder="Password"/>
                    </div>
                    <b-button style="width: 20%; float: right;" type="submit" size="sm" class="auth-btn mb-3"
                              variant="inverse" @submit.prevent="editPassword">Edit
                    </b-button>
                    <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse"
                              @submit.prevent="userUpdate">
                        Edit
                    </b-button>
                    <b-button size="sm" class="auth-btn mb-3" variant="inverse" v-on:click="cancel">
                        Cancel
                    </b-button>
                </form>
            </Widget>
        </b-container>
    </div>
  -->
</template>

<script>
    import Widget from '@/components/Widget/Widget';
    import moment from 'moment';
    import InfiniteLoading from 'vue-infinite-loading';
    import {mapState} from 'vuex'

    moment.locale('ko');

    export default {
        computed: {
            ...mapState({
                userId: state => state.login.userId
            })
        },
        data() {
            return {
                edit: false
            }
        },
        components: {
            Widget,
            InfiniteLoading
        },
        methods: {
            moment: function () {
                return moment()
            },
/*
            myqasInfinite() {
                this.$store.pager('myqasInfinite')
            },
*/
            profileEdit() {
                this.edit = !this.edit; //?
            },
            cancel() {
                this.edit = false;
            },
            imgUpdate() {
            },
            profileUpdate() {
                this.$store.dispatch('profileUpdate', {userId: this.userId
                })
            }
        }
    }
</script>

<style src="src/pages/User/Profile.scss" lang="scss" scoped/>
<style src="src/pages/Board/Typography.scss" lang="scss" scoped/>
<span>{{ moment().format('MMMM do YYYY, h:mm:ss a') }}</span>