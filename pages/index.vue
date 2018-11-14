<template>
  <div class="main">
    <navbar></navbar>

    <div class="content">
      <article class="section" v-for="(blog, index) in blogData">
        <h1 class="title">{{blog.title}}</h1>
        <p class="description">{{blog.description}}</p>
        <p class="readMore">READ MORE</p>
      </article>
    </div>
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
      blogData: [
        {
          "title": "Lxdjsl",
          "type": 2,
          "content": "contentcontentcontentcontent",
          "description": "descriptiondescriptiondescription"
        },
        {
          "title": "Hedqiq",
          "type": 1,
          "content": "Hedqiq Cygmi Cleynbdts Srmee Vxptuxfx",
          "description": "descriptiondescriptiondescription"
        },
        {
          "title": "Ixiwfn",
          "type": 2,
          "content": "Ixiwfn Wowkt Carj Dfhajsjo Wpksc Bwdeezk Nvekqgnk",
          "description": "descriptiondescriptiondescription"
        },
      ]
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
div.main {
  width: 720px;
  margin: 0 auto;
  article.section {
    border-bottom: 1px solid #eee;
    padding: 0 0 36px 0;
    h1.title {
      margin: 30px 0 30px 0;
      color: #222;
      font-weight: bold;
      font-size: 30px;
      line-height: 30px;
      &:hover {
        color: #4183c4;
        cursor: pointer;
      }
    }
    p.description {
      margin: 0 0 30px 0;
    }
    p.readMore {
      color: #4183C4;
      text-transform: uppercase; // 有意思
      font-size: 15px;
      cursor: pointer;
    }
  }
}
</style>
