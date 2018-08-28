<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App;

class TestsController extends Controller
{
    public function __construct()
    {
//        $this->middleware('auth');
    }

    public function show(Request $request)
    {
        $testType = strtoupper($request->query('type'));
        if (!in_array($testType, array('JEE', 'NEET'))) {
            echo '{"success":"false"}';
        } else {
            echo App\Test::where('type', $testType)->get()->toJson();
        }
    }

    public function store(Request $request)
    {
        var_dump($request);
    }
}
