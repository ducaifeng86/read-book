<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
		<span class="text">ABC</span>
    <router-view/>
  </div>
</template>
<script>
  export default {}
	document.addEventListener('DOMContentLoaded', () => {
	  // 获取html元素
	  const html = document.querySelector('html')
	  // 根据屏幕宽度动态计算fontSize
	  let fontSize = window.innerWidth / 10
	  // 当fontSize大于50时，设置最大值为50
	  fontSize = fontSize > 50 ? 50 : fontSize
	  // 设置html的fontSize属性，使rem生效，1rem = fontSize + 'px'
	  html.style.fontSize = fontSize + 'px'
	})
</script>
<style lang="scss"  scoped>
	.text{
		font-family: 'Days One';
		color:red;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
