<template>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card

            light
          >
            <v-card-title class="text-h5">
              Sobre
            </v-card-title>

            <v-card-subtitle>Este é apenas um exemplo de crud em Laravel 8 + Vue 2 + Vuetivy.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
               <a href="https://github.com/nelsonimon" target="blank">Meu Git</a>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
