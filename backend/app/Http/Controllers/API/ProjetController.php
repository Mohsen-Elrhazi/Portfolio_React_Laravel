<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjetRequest;
use App\Models\Projet;
use Illuminate\Http\Request;

class ProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projets = Projet::all();
        return response()->json([
            'message' => 'List of projets',
            'projets' => $projets,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProjetRequest $request)
    {
       $projet= new Projet();
        $projet->nom = $request->nom;
        $projet->description = $request->description;
        $projet->lien_github = $request->lien_github;

        $image = $request->file('image');
        $path = $image->store('public/projet');
        $projet->image = $path;
            
        $projet->save();
        
        return response()->json([
            'message' => 'Projet created successfully',
            'projet' => $projet,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}