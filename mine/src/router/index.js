import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
import project1 from '@/components/project1'
import project2 from '@/components/project2'
import project3 from '@/components/project3'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      redirect:"/about",
      component: Home,
      children:[
        {
          path: '/about',
          name: 'about',
          component: about
        },
        {
          path: '/project1',
          name: 'project1',
          component: project1
        },
        {
          path: '/project2',
          name: 'project2',
          component: project2
        },
        {
          path: '/project3',
          name: 'project3',
          component: project3
        }
      ]
    },

  ]
})
