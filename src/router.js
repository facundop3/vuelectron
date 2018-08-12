import SocialNetwork from './components/SocialNetwork.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
  {path: '/', component: HelloWorld, name: 'home'},
  {path: '/socialNetwork/:socialNetworkName', component: SocialNetwork, name: 'socialNetwork'}

]
export default routes