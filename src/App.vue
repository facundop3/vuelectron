<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :right="right"
      :mini-variant="miniVariant"
      :clipped="clipped"
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
        <add-new-dialog ref="addNewDialog"/>
        <v-list-tile
          value="true"
          @click="showAddNewDialog">
          <v-list-tile-action>
            <v-icon color="white">fa-plus-square</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white-color">Add new</v-list-tile-title>
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
      <template v-for="(socialNetwork, i) in socialNetworksObjects">
        <webview v-show="(isClicked === socialNetwork.title)" :id="socialNetwork.title" :key="i" :src="socialNetwork.url" v-if="socialNetwork.url" style="display:inline-flex; width:100%; height:100%"></webview>
      </template>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AddNewDialog from './components/AddNewDialog'
import SocialNetworkJson from './assets/SocialNetworks.json'
// require('devtron').install()
export default {
  name: 'App',
  components: {
    HelloWorld,
    AddNewDialog
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      socialNetworksObjects: SocialNetworkJson['SocialNetworksList'],
      clickedSocialNetwork: '',
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: '👻'
    }
  },
  methods: {
    showSocialNetwork(socialNetworkName){
      this.clickedSocialNetwork = socialNetworkName
    },
    showAddNewDialog(){
      this.$refs.addNewDialog.switchDialog()
    }
  },
  mounted() {
    // Use window.require to require electrons stuff on vue's components -> https://github.com/parcel-bundler/parcel/issues/1244
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
