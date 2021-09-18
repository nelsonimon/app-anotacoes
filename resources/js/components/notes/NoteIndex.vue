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
     <v-fade-transition
          class="py-0"
          group
          tag="v-list"
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
            <v-list-item-action>
              <v-btn icon @click="deleteNote(note.id)">
                <v-icon color="grey lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>

     </v-fade-transition>

    </v-list-item-group>
    </v-list>
</template>

<script>
import NoteDataService from "@/services/NoteDataService";

export default {
    name:'note-index',
    data(){
        return{
            notes: [],
            checkbox:true,
            nota:{
                id:null
            }
        };
    },
    methods:{
      deleteNote:function(id){

        NoteDataService.delete(id)
        .then(response => {

           //Encontra o array que ira remove pelo id
          let noteRemove = this.notes.find((notaa) => {
                      return notaa.id === id;
                  });
          //encontra o indice (index)
          let noteIndex = this.notes.indexOf(noteRemove);
          //remove o item
          this.notes.splice(noteIndex, 1);

        })
        .catch(e => {
          console.log(e);
        });
      }
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