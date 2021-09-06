<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index()
    {
        return response()->json(Note::all());
    }

    public function show($id)
    {
        $note = Note::findOrFail($id);
        return response()->json($note);
    }

    public  function store(Request $request)
    {
        $note = Note::create($request->all());
        return response()->json($note);
    }

    public function update(Request $request, $id)
    {
        $note =  Note::findOrFail($id);
        $note->fill($request->all());
        $note->save();

        return response()->json($note);
    }

    public function destroy($id)
    {
        $note = NOte::findOrFail($id);
        $note->delete();
        return response()->json(['message'=>'Removido com sucesso!']);
    }
}
