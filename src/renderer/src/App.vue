<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          @click="showSocialNetwork(socialNetworkObj.title)"
          v-for="(socialNetworkObj, i) in socialNetworksObjects"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon color="white">{{socialNetworkObj.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="socialNetworkObj.title" class="white-color"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
      style="-webkit-app-region: drag"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <!-- <router-view/> -->
      <template v-for="(socialNetwork, i) in socialNetworksObjects">
        <webview v-show="(isClicked === socialNetwork.title)" :id="socialNetwork.title" :key="i" :src="socialNetwork.url" v-if="socialNetwork.url" style="display:inline-flex; width:100%; height:100%"></webview>
      </template>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      socialNetworksObjects: [
        {
          icon: 'fab fa-whatsapp',
          title: 'WhatsApp',
          url: 'https://web.whatsapp.com',
        },
        {
          icon: 'fab fa-instagram',
          title: 'Instagram',
          url: 'https://www.instagram.com/',
        },
        {
          icon: 'fab fa-twitter',
          title: 'Twitter',
          url: 'https://twitter.com/',
        },
        {
          icon: 'fab fa-telegram',
          title: 'Telegram',
          url: 'https://web.telegram.org/'
        },
        {
          icon: 'fab fa-facebook-f',
          title: 'Facebook',
          url: 'https://www.facebook.com/',
        },
        {
          icon: 'far fa-envelope',
          title: 'Gmail',
          url: 'https://mail.google.com/',
        },
        {
          icon: 'fa-plus-square',
          title: 'Add new',
          url: ''
        }
      ],
      clickedSocialNetwork: '',
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '👻'
    }
  },
  methods: {
    showSocialNetwork(socialNetworkName){
      this.clickedSocialNetwork = socialNetworkName
    }
  },
  created() {
    this.clickedSocialNetwork = this.socialNetworksObjects[0].title
  },
  computed: {
    isClicked () {
      return this.clickedSocialNetwork
    }
  }
}
</script>
<style scoped>
  .white-color{
    color: white !important;
  }
  a{
    text-decoration: none;
  }
</style>
