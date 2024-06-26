<?php

namespace App\Exceptions;

use Exception;

class UserException extends Exception
{
    public $message = 'User don\'t create';

    public function render()
    {
        return response()->json([
            'error' => class_basename($this),
            'message' => $this->message
        ], 401);
    }
}
