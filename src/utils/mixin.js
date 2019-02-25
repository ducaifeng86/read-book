import { mapGetters, mapActions } from 'vuex'
import {themeList,addCss,removeAllCss,getReadTimeByMinute} from './book'
import {saveLocation,getBookmark} from './localStorage'
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
			'section',
			'cover',
			'metadata',
			'navigation',
			'offsetY',
			'isBookmark',
		]),
		themeList(){
			return themeList(this);
		},
		getSectionName(){
			return this.section ? this.navigation[this.section].label:'';
		},
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
			'setSection',
			'setCover',
			'setMetadata',
			'setNavigation',
		 	'setOffsetY',
	 	    'setIsBookmark',
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
		/*displayProgress() {
	      const cfi = this.currentBook.locations.cfiFromPercentage(this.progress / 100)
	      this.currentBook.rendition.display(cfi).then(() => {
	        this.refreshLocation()
	      })
    	},*/
    	refreshLocation(){
			const currentLocation = this.currentBook.rendition.currentLocation();
			if(currentLocation && currentLocation.start){
				const startCfi = currentLocation.start.cfi;
				const progress = this.currentBook.locations.percentageFromCfi(startCfi);
				this.setProgress(Math.floor(progress*100));
				this.setSection(currentLocation.start.index);
				saveLocation(this.fileName,startCfi);
				const bookmark = getBookmark(this.fileName);
				if(bookmark){
					if(bookmark.some(item => item.cfi === startCfi)){
						this.setIsBookmark(true);
					}else{
						this.setIsBookmark(false);
					}
				}else{
					this.setIsBookmark(false);
				}
			}
    	},
		display(target,cb){
			if(target){
				this.currentBook.rendition.display(target).then(()=>{
					this.refreshLocation();
					if(cb) cb();
				});
			}else{
				this.currentBook.rendition.display().then(()=>{
					this.refreshLocation();
					if(cb) cb();
				});
			}
		},
		hideTitleAndMenu(){
			this.setMenuVisible(false);
			this.setSettingVisible(-1);
			this.setFontFamilyVisible(false);
		},
		getReadTimeText(){
			return this.$t('book.haveRead').replace('$1',getReadTimeByMinute(this.fileName));
		}
	}
}