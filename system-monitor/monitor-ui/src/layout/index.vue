<template>
  <el-container>
    <el-aside width="200px">
      <el-menu class="el-menu-vertical-demo" router :default-active="$route.path">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-tools"></i>
            <span slot="title">系统监控</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/druid">数据监控</el-menu-item>
            <el-menu-item index="/server">服务监控</el-menu-item>
            <el-menu-item index="/cache">缓存监控</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>