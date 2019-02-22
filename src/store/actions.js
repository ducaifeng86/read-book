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
  	setFontFamilyVisible: ({ commit }, visible) => {
    	return commit('SET_FONT_FAMILY_VISIBLE', visible)
  	},
  	setDefaultTheme: ({ commit }, theme) => {
    	return commit('SET_DEFAULT_THEME', theme)
  	},
  	setProgress: ({ commit }, progress) => {
    	return commit('SET_PROGRESS', progress)
  	},
  	setBookAvailable: ({ commit }, bookAvailable) => {
    	return commit('SET_BOOK_AVAILABLE', bookAvailable)
  	},
  	setSection: ({ commit }, section) => {
    	return commit('SET_SECTION', section)
  	},
  	setCover: ({ commit }, cover) => {
    	return commit('SET_COVER', cover)
  	},
  	setMetadata: ({ commit }, metadata) => {
    	return commit('SET_METADATA', metadata)
  	},
  	setNavigation: ({ commit }, navigation) => {
    	return commit('SET_NAVIGATION', navigation)
  	},
}
export default actions