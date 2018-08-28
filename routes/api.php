<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('authacl')->get('/user', function (Request $request) {
    dd(Auth::user());
    return $request->user();
});

Route::middleware('auth')->get('/getuser', function (Request $request) {
    return var_dump($request->user()->id);
    print_r(DB::select('call USER_INFO'));
});
*/