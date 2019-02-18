<template>
	<div class="ebook-reader">
		<div id="read"></div>
	</div>
</template>

<script>
	import {ebookMixin} from '../../utils/mixin'
	import Epub from 'epubjs'
	global.epub = Epub
	export default{
		mixins:[ebookMixin],
		mounted(){
			const fileName = this.$route.params.fileName.split('|').join('/');
			this.setFileName(fileName).then(()=>{
				this.initEpub()
			});
			/*this.setFileName(this.$route.params.fileName.split('|').join('/')).then(()=>{
				this.initEpub()
			});*/
		},
		methods:{
			initEpub(){
				const url = 'http://192.168.0.114:8000/epub/'+this.fileName+'.epub';
				this.book = new Epub(url);
				this.setCurrentBook(this.book);
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
					if(time<500 && offsetX>40){
						this.prevPage();
					}else if(time<500 && offsetX<-40){
						this.nextPage();
					}else{
						this.toggleTitleAndMenu();
					}
					event.preventDefault();
					event.stopPropagation();
				});
				this.rendition.hooks.content.register(contents => {
					contents.addStylesheet("http://192.168.0.114:8000/fonts/cabin.css");
				})
			},
			prevPage(){
				if(this.rendition){
					this.rendition.prev();
					this.hideTitleAndMenu();
				}
			},
			nextPage(){
				if(this.rendition){
					this.rendition.next();
					this.hideTitleAndMenu();
				}
			},
			toggleTitleAndMenu(){
				if(this.menuVisible){
					this.setSettingVisible(-1);
					this.setFontFamilyVisible(false);
				}
				this.setMenuVisible(!this.menuVisible);
			},
			hideTitleAndMenu(){
				this.setMenuVisible(false);
				this.setSettingVisible(-1);
				this.setFontFamilyVisible(false);
			}
		}
	}
</script>

<style>
</style>

