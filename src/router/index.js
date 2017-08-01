import Vue from 'vue'
import Router from 'vue-router'

import Musiclist from 'components/music-list/music-list'
import Recommendation from 'components/Recommendation/recommendation'
import Society from 'components/society/society'
import List from 'components/list/list'
import Radio from 'components/radio/radio'
import Personality from 'components/personality/personality'
import Top from 'components/top/top'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/music-list',
      name: 'music-list',
      component: Musiclist
    },
    {
      path: '/recommendation',
      name: 'recommendation',
      component: Recommendation
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
        }
      ]
    },
    {
      path: '/recommendation',
      name: 'recommendation',
      component: Recommendation,
      children: [
        {
          path: '/recommendation/radio',
          component: Radio
        }
      ]
    },
    {
      path: '/recommendation',
      name: 'recommendation',
      component: Recommendation,
      children: [
        {
          path: '/recommendation/personality',
          component: Personality
        }
      ]
    },
    {
      path: '/recommendation',
      name: 'recommendation',
      component: Recommendation,
      children: [
        {
          path: '/recommendation/top',
          component: Top
        }
      ]
    }
  ]
})
