<template>
<div class="row">
    <div class="col-12">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nota</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="note in notes" :key="note.id">
                    <td>
                        {{note.title}}<br/>
                        {{note.note}}
                    </td>
                    <td>
                        <router-link :to="{ name: 'note-view', params:{'id':note.id}}">
                            <button class="btn btn-primary">Ver</button>
                        </router-link>
                        <router-link :to="{ name: 'note-update', params:{'id':note.id}}">
                            <button class="btn btn-primary">Editar</button>
                        </router-link>
                        <router-link :to="{ name: 'note-delete', params:{'id':note.id}}">
                            <button class="btn btn-primary">Deletar</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</template>

<script>
// var dataURL = 'http://127.0.0.1:8000/note';
import api from '../../api';

export default {
    name:'note-index',
    data(){
        return{
            notes: []
        };
    },
    api,
    mounted() { // when the Vue app is booted up, this is run automatically.
    console.log(api);
        var self = this // create a closure to access component in the callback below
        $.getJSON(api, function(data) {
        self.notes = data;

        });
    }
}
</script>

<style>

</style>