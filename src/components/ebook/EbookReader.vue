<template>
	<div class="ebook-reader">
		<div id="read">{{this.$route.params.fileName}}</div>
	</div>
</template>

<script>
	export default{
		mounted(){
			const baseUrl = 'http://192.168.0.114:8000/epub/'
			const fileName = this.$route.params.fileName.split('|').join('/')
			console.log(`${baseUrl}${fileName}.epub`);
		}
	}
</script>

<style>
</style>