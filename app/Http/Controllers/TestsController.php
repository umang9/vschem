<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App;
include_once '../ud-utils/ApiUtil.php';
include_once '../ud-constants/database.php';

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
            \ApiUtil::printFailureResponse('Invalid test type');
        } else {
            $spCall = 'call '.\SPCalls::TESTS_API.'(@user_id:='.$request->user()->id.',@type:="'.$testType.'")';
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
