import * as types from './mutation-types'

const mutations = {
  [types.SET_PLAYLIST](state, payload) {
    state.playList = payload
  }
}

export default mutations