<template>
  <div class="navbar">
    <div class="intro">
      <img class="logo" src="../static/imgs/logo.png">
      <div>
        <p class="name">Xie Ruochen</p>
        <p class="description">Aiming for Modern Web Developement</p>
      </div>
    </div>
    <div class="link">
      <span @click="$router.push({path: '/'})">Blog</span>
      <span @click="$router.push({path: '/about'})">About</span>
      <span @click="$router.push({path: '/exp'})">Experience</span>
    </div>
  </div>
</template>
<style scoped lang="less" type="text/less">
  div.navbar {
    display: flex;
    height: 100px;

    border-bottom: 1px solid #eee;
    div.intro {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      img.logo {
        border-radius: 5px;
        margin-right: 15px;
        width: 70px;
        height: 70px;
      }
      p.name {
        font-size: 28px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: #333;
        letter-spacing: 1px;
      }
      p.description {
        font-size: 16px;
        color: #666;
      }
    }
    div.link {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      span {
        display: inline-block;
        margin-left: 20px;
        color: #333;
        font-size: 18px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        &:hover {
          color: #4183c4;
          cursor: pointer;
        }
      }
    }
  }
</style>
