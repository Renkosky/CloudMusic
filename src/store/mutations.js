import * as types from './mutation-types'

const mutations = {
  [types.SET_PLAYLIST](state, playList) {
    state.playList = playList
  }
}

export default mutations