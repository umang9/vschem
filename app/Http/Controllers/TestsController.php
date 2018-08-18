<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function show($section, $id)
    {
        echo $section . '-ID: ' . $id;
//        echo DB::table('test')->get();
//    return view('test');
    }

    public function store(Request $request) {
        var_dump($request);
    }
}
