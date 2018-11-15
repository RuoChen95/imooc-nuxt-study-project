<template>
  <div class="blog">
    <navbar></navbar>
    {{id}}
  </div>
</template>
<script>
  import Navbar from '../components/navbar.vue'
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        id: ''
      }
    },
    mounted() {
      this.id = this.$route.query.articleId;
    }
  }
</script>
<style scoped lang="css" type="text/css">
  div.blog {
    width: 720px;
    margin: 0 auto;
  }
</style>

