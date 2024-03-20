<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::orderBy('created_at', 'desc')->get();

        return response()->json(['data' => $todos]);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'task' => ['required', 'string'],
            ]);

            $todo = Todo::create($request->all());

            return response()->json([
                'status' => true,
                'code' => 201,
                'message' => 'Task created successfully',
                'data' => $todo,
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'status' => false,
                'code' => 422,
                'message' => 'Validation failed',
                'data' => $e->errors(),
            ]);
        }
    }

    public function destroy($id)
    {
        try {
            $todo = Todo::findOrFail($id);

            $todo->delete();

            return response()->json([
                'status' => true,
                'code' => 200,
                'message' => 'Task deleted successfully',
            ]);

        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'code' => 404,
                'message' => 'Task request not found',
                'data' => null,
            ], 404);
        }
    }
}
