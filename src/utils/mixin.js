import { mapGetters, mapActions } from 'vuex'
export const ebookMixin = {
	computed: {
		...mapGetters([
			'fileName',
			'menuVisible',
			'settingVisible',
			'defaultFontSize',
			'currentBook'
		])
	},
	methods: {
		...mapActions([
			'setMenuVisible',
			'setFileName',
			'setSettingVisible',
			'setDefaultFontSize',
			'setCurrentBook'
			])
	}
}