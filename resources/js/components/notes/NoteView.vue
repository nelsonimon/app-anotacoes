<template>
  <div>
    <h2>Detalhes {{notes.id}}</h2>
    <h1>{{notes.title}}</h1>
    <p>{{notes.note}}</p>
  </div>
</template>

<script>
//import api from '../../api';
import NoteDataService from "../../services/NoteDataService";
export default {
    name:'note-view',

    data(){
        return{
            notes: [],
            id:""
        };
    },
    //api,
    mounted() { // when the Vue app is booted up, this is run automatically.
        //console.log(this.$route.params.id)
        this.id=this.$route.params.id;

        // var self = this // create a closure to access component in the callback below
        // $.getJSON(api+'/'+this.id, function(data) {
        // self.notes = data;

        // });

        NoteDataService.get(this.id)
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