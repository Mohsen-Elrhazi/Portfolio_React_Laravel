<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjetRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nom' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',
            'lien_github' => 'nullable|string|max:255',
        ];
    }

    public function messages(){
        return [
            'nom.required' => 'Le nom est requis.',
            'description.required' => 'La description est requise.',
            'image.image' => 'Le fichier doit être une image.',
            'image.mimes' => 'L\'image doit être au format jpeg, png, jpg, gif ou svg.',
            // 'image.max' => 'L\'image ne doit pas dépasser 2 Mo.',
            'lien_github.string' => 'Le lien GitHub doit être une chaîne de caractères.',
        ];
    }
}