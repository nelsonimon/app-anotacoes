<template>

  <div v-if="!submitted">
    <h1>Nova Nota</h1>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="nota.title"
        :counter="10"
        :rules="nameRules"
        label="Titulo"
        name="title"
        required
      ></v-text-field>

      <v-text-field
        v-model="nota.note"
        :counter="10"
        :rules="nameRules"
        label="Descrição"
        name="note"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
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
    <h4>Sucesso!</h4>
     <v-btn
        to="/home">Voltar</v-btn>
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
        note: ""
      },
      submitted: false
      ,valid: true,
      nameRules: [
        v => !!v || 'Campo é obrigatório',
        v => (v && v.length >= 10) || 'Campo precisa ter no mínimo 10 letras',
      ]
    };
  },
  methods: {
    validate () {
        this.$refs.form.validate()
      },
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