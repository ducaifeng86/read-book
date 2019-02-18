import { mapGetters, mapActions } from 'vuex'
import {themeList,addCss} from './book'
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
			'defaultTheme'
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
			'setDefaultTheme'
		]),
		initGlobalStyle(){
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
				
		}
	}
}