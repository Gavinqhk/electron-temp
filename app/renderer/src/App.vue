<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-page-header>
          <template #content>
            <span class="text-large font-600 mr-3"> Title </span>
          </template>
        </el-page-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <router-link to="/">Go to home</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/about">Go to About</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/child-site">sub app</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view v-show="$route.name" />
          <div v-show="!$route.name" id="yourContainer"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
