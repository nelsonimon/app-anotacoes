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
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newNotel">Add</button>
    </div>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

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

      DataService.create(data)
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
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>