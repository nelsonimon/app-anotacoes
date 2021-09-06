<template>
<div>{{message}}</div>
</template>

<script>
import DataService from "../../services/DataService";

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

        // var self = this // create a closure to access component in the callback below
        // $.getJSON(api+'/'+this.id, function(data) {
        // self.notes = data;

        // });

        DataService.delete(this.nota.id)
        .then(response => {
          this.nota=response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
};
</script>

<style>

</style>