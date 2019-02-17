const book = {
	state:{
		fileName:'',
		menuVisible:false,
		settingVisible: -1,
		defaultFontSize:16,
		currentBook:null
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
    	}
	}
}
export default book


