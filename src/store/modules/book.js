const book = {
	state:{
		fileName:'',
		menuVisible:false,
		settingVisible: -1,
		defaultFontSize:16,
		currentBook:null,
		defaultFontFamily: 'Default',
		fontFamilyVisible: false,
		defaultTheme: 'Default',
		progress: 0,
		bookAvailable: false,
		section: 0,
		cover: null,
		metadata: null,
		navigation: null,
		offsetY: 0,
	},
	mutations:{
		'SET_FILENAME':(state,fileName) => {
			state.fileName = fileName;
		},
		'SET_MENUVISIBLE':(state,menuVisible) => {
			state.menuVisible = menuVisible;
		},
		'SET_SETTING_VISIBLE': (state, settingVisible) => {
      		state.settingVisible = settingVisible;
    	},
    	'SET_DEFAULT_FONT_SIZE':(state,defaultFontSize) => {
    		state.defaultFontSize = defaultFontSize;
    	},
    	'SET_CURRENT_BOOK':(state,currentBook) => {
    		state.currentBook = currentBook
    	},
    	'SET_DEFAULT_FONT_FAMILY': (state, font) => {
      		state.defaultFontFamily = font
    	},
    	'SET_FONT_FAMILY_VISIBLE': (state, visible) => {
      		state.fontFamilyVisible = visible
    	},
    	 'SET_DEFAULT_THEME': (state, theme) => {
      		state.defaultTheme = theme
    	},
    	'SET_PROGRESS': (state, progress) => {
      		state.progress = progress
   		},
   		'SET_BOOK_AVAILABLE': (state, bookAvailable) => {
      		state.bookAvailable = bookAvailable
    	},
    	'SET_SECTION': (state, section) => {
      		state.section = section
    	},
    	'SET_COVER': (state, cover) => {
      		state.cover = cover
    	},
    	'SET_METADATA': (state, metadata) => {
      		state.metadata = metadata
    	},
    	'SET_NAVIGATION': (state, navigation) => {
      		state.navigation = navigation
    	},
    	'SET_OFFSETY': (state, offsetY) => {
      		state.offsetY = offsetY
    	},
	}
}
export default book


