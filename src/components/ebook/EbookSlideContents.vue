<template>
	<div class="ebook-slide-contents">
		<div class="ebook-contents-search-wrapper">
			<div class="ebook-contents-search-input-wrapper">
				<div class="ebook-contents-search-icon">
					<span class="icon-search"></span>
				</div>
				<input  class="slide-contents-search-input"
					type="text"
					:placeholder="$t('book.searchHint')"/>
			</div>
			<div class="slide-contents-search-cancel">{{$t('book.cancel')}}</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang='scss' scoped>
@import '../../assets/styles/global';
</style>