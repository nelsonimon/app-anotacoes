<template>
		<v-list
			flat
			subheader
			three-line
		>
		<!-- <v-subheader>Notas</v-subheader> -->

    <v-divider class="mt-1"></v-divider>
		<v-row
      align="center"
    >
			<v-col
				col="6"
			>
				<strong class=" text--darken-2">
					Total:
					<v-fade-transition leave-absolute>
						<span :key="`notas-${notes.length}`">
							{{ notes.length }}
						</span>
					</v-fade-transition>
				</strong>

				<v-divider vertical></v-divider>

				<strong class=" info--text text--darken-2">
					Restantes: {{ remainingTasks }}
				</strong>

				<v-divider vertical></v-divider>

				<strong class="success--text text--darken-2">
					Realizadas: {{ completedTasks }}
				</strong>
			</v-col>
			<v-col
				col="3"
				class="text-right"
			>

				<v-progress-circular
					:value="progress"
					:rotate="360"
					:size="75"
					:width="3"
					color="teal"
				>
				{{progress||0}}%
				</v-progress-circular>
			</v-col>
    </v-row>

    <v-divider class="mb-4"></v-divider>

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
								@change=updateNote(note.id)
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
			},

			updateNote(id) {
				//recupera a nota a ser atualizada
				let notaAtulizar = this.notes.find((notaa) => {
											return notaa.id === id;
									});

				//console.log(notaAtulizar.done);
				var data = {
					done: notaAtulizar.done
				};

				NoteDataService.update(id, data)
					.then(response => {

						console.log(response.data);
					})
					.catch(e => {
						console.log(e);
					});
			},
		},
		computed: {
      completedTasks () {
        return this.notes.filter(notes => notes.done=="1").length
      },
      progress () {
        return this.completedTasks / this.notes.length * 100
      },
      remainingTasks () {
        return this.notes.length - this.completedTasks
      },
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

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>