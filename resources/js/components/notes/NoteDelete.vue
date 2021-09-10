<template>
<div>{{message}}</div>
</template>

<script>
import NoteDataService from "../../services/NoteDataService";

export default {
  name: "note-delete",
  data() {
    return {
     message:"",
        nota:{
            id:null
        }
    };
  },
  methods: {

  },
  mounted() { // when the Vue app is booted up, this is run automatically.
        //console.log(this.$route.params.id)
        this.nota.id=this.$route.params.id;

        NoteDataService.delete(this.nota.id)
        .then(response => {
          this.nota=response.data;
          this.$router.push({ name: 'home' })
        })
        .catch(e => {
          console.log(e);
        });
    }
};
</script>

<style>

</style>