<template>
    <v-alert
      :value="alert"
      :type="typeNotification"
      transition="scale-transition">
      {{alertMessage}}
    </v-alert>
</template>
<script>
  export default {
    data () {
      return {
        alert: false,
        alertMessage: '',
        typeNotification: 'success'
      }
    },
    methods:{
      showNotification(message, type){
        this.typeNotification = type
        this.alertMessage = message
        this.alert = true
        setTimeout(()=> {this.alert= false}, 10000)
      }
    }
  }
</script>