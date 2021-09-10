<template>
    <v-list
      flat
      subheader
      three-line
    >
    <v-subheader>Notas</v-subheader>
    <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
     >
        <v-list-item v-for="note in notes" :key="note.id">
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{note.title}}</v-list-item-title>
              <v-list-item-subtitle>{{note.note}}</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
    </v-list-item-group>
    </v-list>
</template>

<script>
import NoteDataService from "../../services/NoteDataService";

export default {
    name:'note-index',
    data(){
        return{
            notes: []
        };
    },
   // api,
    mounted() {

        NoteDataService.getAll()
        .then(response => {
          this.notes=response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
}
</script>

<style>

</style>