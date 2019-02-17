const actions = {
	setFileName: ({commit}, fileName) => {
		return commit('SET_FILENAME', fileName);
	},
	setMenuVisible: ({commit}, menuVisible) => {
		return commit('SET_MENUVISIBLE', menuVisible);
	},
	setSettingVisible: ({ commit }, settingVisible) => {
   	 	return commit('SET_SETTING_VISIBLE', settingVisible)
  	},
  	setDefaultFontSize:({commit},defaultFontSize) => {
  		return commit('SET_DEFAULT_FONT_SIZE',defaultFontSize);
  	},
  	setCurrentBook:({commit},currentBook) => {
  		return commit('SET_CURRENT_BOOK',currentBook);
  	},
  	setDefaultFontFamily: ({ commit }, font) => {
    	return commit('SET_DEFAULT_FONT_FAMILY', font)
  	},
}
export default actions