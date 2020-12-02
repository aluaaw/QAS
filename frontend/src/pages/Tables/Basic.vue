<template>
  <div class="tables-basic">
    <h1 class="page-title">
      <span class="fw-semi-bold">Stars</span>
    </h1>
    <div id="columns">
      <figure style="float: left;">
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg">
        <p class="userId"><span class="fw-semi-bold">userId </span></p>
        <p class="boardContent">boardContent</p>
        <br>
        <span>{{ moment().format('MMMM do YYYY, h:mm:ss a') }}</span>
      </figure>

      <figure style="float: left;">
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/rapunzel.jpg">
        <p class="userId"><span class="fw-semi-bold">userId </span></p>
        <p class="boardContent">boardContent</p>
        <br>
        <span>{{ moment().format('MMMM do YYYY, h:mm:ss a') }}</span>
      </figure>

      <figure style="float: left;">
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/belle.jpg">
        <p class="userId"><span class="fw-semi-bold">userId </span></p>
        <p class="boardContent">boardContent</p>
        <br>
        <span>{{ moment().format('MMMM do YYYY, h:mm:ss a') }}</span>
      </figure>

      <figure style="float: left;">
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg">
        <p class="userId"><span class="fw-semi-bold">userId </span></p>
        <p class="boardContent">boardContent</p>
        <br>
        <span>{{ moment().format('MMMM do YYYY, h:mm:ss a') }}</span>
      </figure>

      <figure style="float: left;">
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sleeping-beauty.jpg">
        <p class="userId"><span class="fw-semi-bold">userId </span></p>
        <p class="boardContent">boardContent</p>
        <br>
        <span>{{ moment().format('MMMM do YYYY, h:mm:ss a') }}</span>
      </figure>

      <figure style="float: left;">
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pocahontas_2.jpg">
        <p class="userId"><span class="fw-semi-bold">userId </span></p>
        <p class="boardContent">boardContent</p>
        <br>
        <span>{{ moment().format('MMMM do YYYY, h:mm:ss a') }}</span>
      </figure>

      <figure style="float: left;">
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/snow-white.jpg">
        <p class="userId"><span class="fw-semi-bold">userId </span></p>
        <p class="boardContent">boardContent</p>
        <br>
        <span>{{ moment().format('MMMM do YYYY, h:mm:ss a') }}</span>
      </figure>


      <figure style="float: left;">
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg">
        <p class="userId"><span class="fw-semi-bold">userId </span></p>
        <p class="boardContent">boardContent</p>
        <br>
        <span>{{ moment().format('MMMM do YYYY, h:mm:ss a') }}</span>
      </figure>

      <figure style="float: left;">
        <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/tiana.jpg">
        <p class="userId"><span class="fw-semi-bold">userId </span></p>
        <p class="boardContent">boardContent</p>
        <br>
        <span>{{ moment().format('MMMM do YYYY, h:mm:ss a') }}</span>
      </figure>
      <infinite-loading @infinite="starsInfinite" spinner="waveDots"/>
    </div>
  </div>
</template>

<script>
  import Widget from '@/components/Widget/Widget';
  import moment from 'moment';
  import InfiniteLoading from 'vue-infinite-loading';

  export default {
    components: {
      Widget,
      InfiniteLoading
    },
    methods: {
      moment: function () {
        return moment()
      },
      starsInfinite() {
        this.$state.pager('starsInfinite')
      }
    }
  }
</script>

<style src="../Typography/Typography.scss" lang="scss" scoped/>