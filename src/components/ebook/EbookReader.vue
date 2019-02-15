<template>
	<div class="ebook-reader">
		<div id="read"></div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import Epub from 'epubjs'
	global.epub = Epub
	export default{
		computed:{
			...mapGetters(['fileName'])
		},
		methods:{
			initEpub(){
				const url = 'http://192.168.0.114:8000/epub/'+this.fileName+'.epub';
				this.book = new Epub(url);
				this.rendition = this.book.renderTo('read',{
					width:innerWidth,
					height:innerHeight,
					method:'default'
				})
				this.rendition.display();
				this.rendition.on('touchstart',event => {
					this.touchStartX = event.changedTouches[0].clientX;
					this.touchStartTime = event.timeStamp;
				});
				this.rendition.on('touchend',event => {
					const offsetX = event.changedTouches[0].clientX - this.touchStartX;
					const time = event.timeStamp - this.touchStartTime;
					console.log(offsetX,time);
				});
			}
		},
		mounted(){
			const fileName = this.$route.params.fileName.split('|').join('/');
			this.$store.dispatch('setFileName',fileName).then(()=>{
				this.initEpub()
			});
		}
	}
</script>

<style>
</style>

