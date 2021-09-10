<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
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

      <button @click="saveNote" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>Sucesso!</h4>
      <router-link :to="{ name: 'home'}">
        <button class="btn btn-success">Voltar</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import NoteDataService from "../../services/NoteDataService";

export default {
  name: "note-add",
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
    saveNote() {
      var data = {
        title: this.nota.title,
        note: this.nota.note
      };

      NoteDataService.create(data)
        .then(response => {
          this.nota.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>