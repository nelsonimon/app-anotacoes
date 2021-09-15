<template>
    <v-list
      flat
      subheader
      three-line
    >
    <v-subheader>Notas</v-subheader>
    <v-list-item-group
        multiple
        active-class=""
     >
      <div v-for="note in notes" :key="note.id">
        <v-list-item >
          <template >
            <v-list-item-action>
              <v-checkbox
                v-model="note.done"
                true-value="1"
                false-value="0"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{note.title}}</v-list-item-title>
              <v-list-item-subtitle>{{note.note}}</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>

    </v-list-item-group>
    </v-list>
</template>

<script>
import NoteDataService from "@/services/NoteDataService";

export default {
    name:'note-index',
    data(){
        return{
            notes: []
            ,checkbox:true
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