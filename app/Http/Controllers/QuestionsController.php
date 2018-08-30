<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

include_once '../ud-constants/database.php';

class QuestionsController extends Controller
{
//Umang [11:01 PM]
//call GET_TEST_INTERFACE_DETAILS(@user_id:={user},@test_id:={test},@test_flag:={flag})
    public function show(Request $request, $test_id)
    {
        $spCall = 'call ' . \SPCalls::QUESTIONS_API . '(@user_id:=' . $request->user()->id . ',@test_id:="' . $test_id . '",@test_flag:="TAKE TEST")';//Other option is "REVIEW TEST"
        echo json_encode(DB::select($spCall));
    }
}
