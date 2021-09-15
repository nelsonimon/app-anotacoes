<template>

  <div v-if="!submitted">
    <v-subheader>Nova Nota</v-subheader>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="nota.title"
        :rules="[v => !!v || 'Campo é obrigatório',
                 v => (v && v.length >= 5) || 'Campo precisa ter no mínimo 5 letras',]"
        label="Titulo"
        name="title"
        required
      ></v-text-field>

      <v-text-field
        v-model="nota.note"

        label="Descrição"
        name="note"
        required
      ></v-text-field>

      <v-checkbox
        v-model="nota.done"
        true-value="1"
        false-value="0"
        label="Realizada?"
        name="done"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="saveNote"
      >
        Cadastrar
      </v-btn>
    </v-form>
  </div>
  <div v-else>
    <v-subheader>Nova Nota</v-subheader>
    <v-btn
        to="/notes">Voltar</v-btn>
  </div>
  <!-- <div v-else >
    <h4>Sucesso!</h4>
    <router-link :to="{ name: 'home'}">
      <button class="btn btn-success">Voltar</button>
    </router-link>
  </div> -->
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
        note: "",
        done:"0"
      },
      submitted: false
      ,valid: true,

    };
  },
  methods: {
    validate () {
        this.$refs.form.validate()
      },
    saveNote() {
      var data = {
        title: this.nota.title,
        note: this.nota.note,
        done: this.nota.done,
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