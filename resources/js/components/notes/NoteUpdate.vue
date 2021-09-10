<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Atualizar</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="nota.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="note">Note</label>
        <input
          class="form-control"
          id="note"
          required
          v-model="nota.note"
          name="note"
        />
      </div>

      <button @click="updateNote" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>Sucesso!</h4>
      <router-link :to="{ name: 'home'}">
        <button class="btn btn-success" >Voltar</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import NoteDataService from "../../services/NoteDataService";

export default {
  name: "note-update",
  data() {
    return {
      nota: {
        id: null,
        title: "",
        note: ""
      },
      submitted: false
    };
  },
  methods: {
    updateNote() {
      var data = {
        title: this.nota.title,
        note: this.nota.note
      };

      NoteDataService.update(this.nota.id, data)
        .then(response => {
          this.nota.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newNote() {
      this.submitted = false;
      this.nota = {};
    }
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
        //console.log(this.$route.params.id)
        this.nota.id=this.$route.params.id;

        // var self = this // create a closure to access component in the callback below
        // $.getJSON(api+'/'+this.id, function(data) {
        // self.notes = data;

        // });

        NoteDataService.get(this.nota.id)
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
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>