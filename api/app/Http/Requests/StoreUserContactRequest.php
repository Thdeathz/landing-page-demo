<?php

namespace App\Http\Requests;

use App\Enums\ResponseStatus;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class StoreUserContactRequest extends FormRequest
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
            'fullname' => ['required', 'string', 'max:50'],
            'email' => ['required', 'email', 'max:200'],
            'phone' => ['required', 'string', 'max:20'],
            'address' => ['required', 'string', 'max:200']
        ];
    }


    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'required' => ':attribute field is required.',
            'email' => 'Invalid email address.',
            'max' => ':attribute field is too long.',
        ];
    }


    /**
     * Custom validation error response
     *
     * @return void
    */
    protected function failedValidation(Validator $validator)
    {
        $errors = (new ValidationException($validator))->errors();

        throw new HttpResponseException(response()->json(
            [
                'success' => ResponseStatus::Fail,
                'error' => $errors,
            ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY), 422);
    }
}