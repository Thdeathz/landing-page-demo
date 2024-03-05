<?php

namespace App\Http\Controllers;

use App\Enums\ResponseStatus;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    // Default response message
    protected $message = '';
    protected $status = ResponseStatus::Fail;

    protected function response($data): JsonResponse
    {
        return response()->json([
            'status' => $this->status,
            'message' => $this->message,
            'data' => $data
        ]);
    }
}