<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Illuminate\Support\Facades\DB;

Route::get('/', function () {
    print_r(DB::select('call USER_INFO'));
//    return view('welcome');
});
Route::get('/mytests/{section}/{id}','TestsController@show');
Route::post('/mytests/{section}', 'TestsController@store');

Route::get('/questions', function () {
    $questions = DB::table('question_bank')->first();
    echo $questions->question;
    return;
    return view('questions', [
        'question' => $questions->question
    ]);
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/react', function () {
    return view('welcome-react');
});
