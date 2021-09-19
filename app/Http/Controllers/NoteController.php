<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class NoteController extends Controller
{
    public function index()
    {
        return response()->json(Note::all(), Response::HTTP_OK);
    }

    public function show($id)
    {
        $note = Note::findOrFail($id);
        return response()->json($note, Response::HTTP_OK);
    }

    public  function store(Request $request)
    {
        $note = Note::create($request->all());
        return response()->json($note, Response::HTTP_CREATED);
    }

    public function update(Request $request, $id)
    {
        try {
            $note =  Note::findOrFail($id);
            $note->fill($request->all());
            $note->save();

            return response()->json(['message'=>'Atualizado com sucesso!'], Response::HTTP_OK);
        } catch(ModelNotFoundException $mException) {
            return response()->json($mException->getMessage(), Response::HTTP_NOT_FOUND);
        }
    }

    public function destroy($id)
    {
        $note = Note::findOrFail($id);
        $note->delete();
        return response()->json(['message'=>'Removido com sucesso!'], Response::HTTP_OK);
    }
}
