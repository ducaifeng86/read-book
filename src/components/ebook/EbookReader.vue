<template>
	<div class="ebook-reader">
		<div id="read">{{this.$route.params.fileName}}</div>
		{{this.$store.state}}
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import Epub from 'epubjs'
	global.epub = Epub
	export default{
		computed:{
			//...mapGetters([fileName])
		},
		methods:{
			initEpub(){
				/*const url = 'http://192.168.0.114:8000/epub/'+this.fileName+'.epub';
				this.book = new Epub(url);*/
				console.log("1");
			}
		},
		mounted(){
			/*const fileName = this.$route.params.fileName.split('|').join('/')
			this.$store.dispatch('setFileName',fileName).then(()=>{
				console.log(fileName);
				this.initEpub()
			});*/
			console.log("1:"+this.$store);
		}
	}
</script>

<style>
</style>

