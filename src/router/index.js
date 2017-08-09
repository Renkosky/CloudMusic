import Vue from 'vue'
import Router from 'vue-router'

import Musiclist from 'components/music-list/music-list'
import Recommendation from 'components/Recommendation/recommendation'
import Society from 'components/society/society'
import List from 'components/list/list'
import Radio from 'components/radio/radio'
import Personality from 'components/personality/personality'
import Top from 'components/top/top'
import playList from 'components/playList/playList'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/recommendation/personality' },
    {
      path: '/music-list',
      name: 'music-list',
      component: Musiclist
    },
    {
      path: '/society',
      name: 'society',
      component: Society
    },
    {
      path: '/recommendation',
      name: 'recommendation',
      component: Recommendation,
      children: [
        {
          path: '/recommendation/list',
          component: List
        },
        {
          path: '/recommendation/radio',
          component: Radio
        },
        {
          path: '/recommendation/personality',
          component: Personality,
          children: [
            {
              path: '/playList/:id',
              component: playList
            }
          ]
        },
        {
          path: '/recommendation/top',
          component: Top
        }
      ]
    }
  ]
})
