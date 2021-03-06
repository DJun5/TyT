import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/vuex/store';
import Index from '@/components/Home/Index'
import Campus from '@/components/School/Campus'
import Message from '@/components/Message/Message'
import User from '@/components/Personal/User'
import Login from '@/components/Login/login'
import AddDynamic from '@/components/AddDynamic/addDynamic'
import Address from '@/components/Message/Address'
import Addfriend from '@/components/Message/Addfriend'
import Attention from '@/components/Home/attention'
import Find from '@/components/Home/find'
import Detail from '@/components/Home/detail'
import FindPeople from  '@/components/School/People/FindPeople'
import FindMajor from  '@/components/School/FindMajor'
import FindOrganziation from  '@/components/School/FindOrganziation'
import WorkProcess from  '@/components/School/WorkProcess'
import Setting from '@/components/Personal/Setting'
import Chat  from '@/components/Message/Chat'
import Inform  from '@/components/Message/inform'
import alterUserMessage  from '@/components/settingdetail/alterUserMessage'
import privateSetting  from '@/components/settingdetail/privateSetting'
import moreSetting  from '@/components/settingdetail/moreSetting'
import Blacklist  from '@/components/settingDetail/blacklist'
import Rank  from '@/components/settingDetail/rank'
import ChangePassword  from '@/components/settingDetail/ChangePassword'

Vue.use(VueRouter);
const routes =  [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: { keepAlive: true }
    },
    {
      path: '/',
      name: 'Campus',
      component: Campus,
      meta: { keepAlive: true }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: { keepAlive: true }
    },
  {
    path: '/message/address',
    name: 'Address',
    component: Address

  },
  {
    path: '/message/addfriend',
    name: 'Addfriend',
    component: Addfriend

  },
  {
    path: '/message/chat',
    name: 'Chat',
    component: Chat

  },
  {
    path: '/message/inform',
    name: 'Inform',
    component: Inform

  },

  {
      path: '/user',
      name: 'User',
      component: User,
      meta: { keepAlive: true }

    },
    {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { keepAlive: true }
  },
  {
    path: '/addDynamic',
    name: 'AddDynamic',
    component: AddDynamic,
    meta: { keepAlive: true}
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
    meta: { keepAlive: true }
  },
  {
    path: '/attention',
    name: 'Attention',
    component: Attention,
    meta: { keepAlive: true }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/Campus/FindPeople',
    name: 'FindPeople',
    component: FindPeople
  },
  {
    path: '/Campus/FindMajor',
    name: 'FindMajor',
    component: FindMajor
  },
  {
    path: '/Campus/FindOrganziation',
    name: 'FindOrganziation',
    component: FindOrganziation
  },
  {
    path: '/Campus/WorkProcess',
    name: 'WorkProcess',
    component: WorkProcess
  },
  {
    path: '/user/setting',
    name: 'Setting',
    component: Setting,

  },
  {
    path: '/setting/alterUserMessage',
    name: 'alterUserMessage',
    component: alterUserMessage
  },
  {
    path: '/setting/privateSetting',
    name: 'privateSetting',
    component: privateSetting
  },
  {
    path: '/setting/moreSetting',
    name: 'moreSetting',
    component: moreSetting
  },
  {
    path: '/settingDetail/blacklist',
    name: 'Blacklist',
    component: Blacklist

  },
  {
    path: '/settingDetail/rank',
    name: 'Rank',
    component: Rank

  },
  {
    path: '/settingDetail/ChangePassword',
    name: 'ChangePassword',
    component: ChangePassword

  },



  ];


// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes: routes
})

router.beforeEach((to, from, next) => {
    // 判断配置的路由中是否存在needLogin存在则做出对应的判断
    if (to.matched.some(record => record.meta.needLogin)) {
        // 从状态管理器（vuex）中获取登录状态，如果未登录过的跳转至登录页
        if (!store.state.user.is_login) {
            next({
                path: '/user/login',
            });
        } else {
          // 如果已经登录了的就可以访问该页面
            next();
        }
    } else {
        next();
    }
});

export default router
