<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App;
use Constants;//Todo-m

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
            $spCall = 'call '.'GET_USER_TEST_DETAILS'.'(@user_id:='.$request->user()->id.',@type:="'.$testType.'")';
//            echo $spCall;
//            return;
            echo json_encode(DB::select($spCall));
        }
    }

    public function store(Request $request)
    {
        var_dump($request);
    }
}
