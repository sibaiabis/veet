<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
	<el-row type="flex" align="middle" justify="center">
		<el-col :span="8">
			<el-button type="info">我是按钮</el-button>
		</el-col>
	</el-row>
	<el-row style="marginTop: 10px" type="flex" align="middle" justify="center">
		<el-col :span="20">
			推荐一款软件:
			<el-link type="success" :style="[{fontSize: '20px'}, {fontWeight: 'bold'}]">brick</el-link>
			（开发中）
			<el-tag size="mini" type="danger">尽情期待</el-tag>
		</el-col>
	</el-row>
	<el-row style="marginTop: 10px" type="flex" align="middle" justify="center">
		<el-col :span="20">
			介绍：brick是一款桌面应用软件,方便上班族日常办公时实时关注股票,喝水提醒,高阶摸鱼小工具等一系列骚操作合集
		</el-col>
	</el-row>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
