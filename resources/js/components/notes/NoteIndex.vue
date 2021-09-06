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
                        <button class="btn btn-primary">Ver</button>
                        <button class="btn btn-primary">Editar</button>
                        <button class="btn btn-primary">Deletar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</template>

<script>
var dataURL = 'http://127.0.0.1:8000/note';

export default {
    name:'note-index',
    data(){
        return{
            notes: []
        };
    },
    mounted() { // when the Vue app is booted up, this is run automatically.
        var self = this // create a closure to access component in the callback below
        $.getJSON(dataURL, function(data) {
        self.notes = data;
        });
    }
}
</script>

<style>

</style>