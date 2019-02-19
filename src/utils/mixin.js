import { mapGetters, mapActions } from 'vuex'
import {themeList,addCss,removeAllCss} from './book'
export const ebookMixin = {
	computed: {
		...mapGetters([
			'fileName',
			'menuVisible',
			'settingVisible',
			'defaultFontSize',
			'currentBook',
			'defaultFontFamily',
			'fontFamilyVisible',
			'defaultTheme',
			'progress',
			'bookAvailable',
		]),
		themeList(){
				return themeList(this);
			}
	},
	methods: {
		...mapActions([
			'setMenuVisible',
			'setFileName',
			'setSettingVisible',
			'setDefaultFontSize',
			'setCurrentBook',
			'setDefaultFontFamily',
			'setFontFamilyVisible',
			'setDefaultTheme',
			'setProgress',
			'setBookAvailable',
		]),
		initGlobalStyle(){
			removeAllCss();
			switch(this.defaultTheme){
				case 'Default':
					addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`);
					break;
				case 'Eye':
					addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_eye.css`);
					break;
				case 'Gold':
					addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_gold.css`);
					break;
				case 'Night':
					addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_night.css`);
					break;
				default:
					addCss(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`);
					break;
			}
				
		},
		displayProgress() {
	      const cfi = this.currentBook.locations.cfiFromPercentage(this.progress / 100)
	      this.currentBook.rendition.display(cfi).then(() => {
	        this.refreshLocation()
	      })
    	},
	}
}