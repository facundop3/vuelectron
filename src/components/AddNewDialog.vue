<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Add new social network</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="* Name" required v-model="newTitle"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="* Url" required v-model="newUrl"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="* Icon" required v-model="newIcon"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="addNewJson">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      newTitle:'',
      newUrl:'',
      newIcon: ''
    }),
    methods:{
    addNewJson(){
      let jsonToAdd = {"title": this.newTitle, "icon": this.newIcon, "url": this.newUrl}
      this.$emit("addNew", jsonToAdd)
      this.switchDialog()
      },
      switchDialog(){
        this.dialog = !this.dialog
      }
    }
  }
</script>