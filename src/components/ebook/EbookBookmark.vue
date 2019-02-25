<template>
	<div class="ebook-bookmark" ref="bookmark">
		<div class="ebook-bookmark-text-wrapper">
			<div class="ebook-bookmark-down-wrapper">
				<span class="icon-down"></span>
			</div>
			<div class="ebook-bookmark-text">{{text}}</div>
		</div>
		<div class="ebook-bookmark-icon-wrapper">
			<bookmark :color="color" :width="15" :height="35"></bookmark>
		</div>
	</div>
</template>

<script>
	import {realPx} from '../../utils/utils'
	import Bookmark from '../common/Bookmark'
	import {ebookMixin} from '../../utils/mixin'
	const BLUE = '#346cbc'
	const WHITE = '#fff'
	export default{
		mixins:[ebookMixin],
		data(){
			return {
				text:'',
				color:WHITE
			}
		},
		computed:{
			height(){
				return realPx(35)
			},
			threshold(){
				return realPx(55)
			}
		},
		components:{
			Bookmark
		},
		watch:{
			offsetY(v){
				if(v >= this.height && v<this.threshold){
					this.$refs.bookmark.style.top = `${-v}px`;
					this.text = this.$t('book.pulldownAddMark');
					this.color = WHITE;
				}else if(v >= this.threshold){
					this.$refs.bookmark.style.top = `${-v}px`;
					this.text = this.$t('book.releaseAddMark');
					this.color = BLUE;
				}
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '../../assets/styles/global';
.ebook-bookmark{
	position: absolute;
	top:px2rem(-35);
	left:0;
	z-index: 200;
	width:100%;
	height: px2rem(35);
	.ebook-bookmark-text-wrapper{
		position:absolute;
		right:px2rem(45);
		bottom:0;
		display:flex;
		.ebook-bookmark-down-wrapper{
			font-size:px2rem(14);
			color:white;
			transition:all .2s linear;
			@include center;
		}
		.ebook-bookmark-text{
			font-size:px2rem(14);
			color:white;
		}
	}
	.ebook-bookmark-icon-wrapper{
		position: absolute;
		top:0;
		right:0;
		margin-right:px2rem(15);
	}
}
	
</style>