<template>
    <webview id="foo" :src="urls[getSocialNetwor].url" style="display:inline-flex; width:100%; height:100%"></webview>
</template>
<script>
export default {
  data(){
    return {
      socialNetwork: "dafault value",
      urls: {
        'WhatsApp': {url:'https://web.whatsapp.com'},
        'Instagram': {url:'https://www.instagram.com/'},
        'Twitter': {url:'https://twitter.com/'},
        'Telegram': {url:'https://web.telegram.org/'},
        'Facebook': {url:'https://www.facebook.com/'},

      }
    }
  },
  computed:{
    getSocialNetwor(){
      return this.$route.params.socialNetworkName
    }
  }
}
</script>
