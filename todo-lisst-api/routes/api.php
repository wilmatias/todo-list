<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/list', [TodoController::class, 'index']);
Route::get('/todo/{id}', [TodoController::class, 'show']);
Route::delete('/delete/{id}', [TodoController::class, 'destroy']);
Route::post('/create', [TodoController::class, 'store']);
Route::put('/update/{id}', [TodoController::class, 'update']);
