<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

include_once '../ud-utils/ApiUtil.php';
include_once '../ud-constants/database.php';

class TestResponseController extends Controller
{
    public function store(Request $request, $test_id)
    {
        $answers = $request['user_response'];
        $responseXml = "<rt><r>";
        foreach ($answers as $questionId => $selectedOptionId) {
            $selectedOption = strtolower($selectedOptionId) == 'null' ? 'null' : "option_" . $selectedOptionId;
            $responseXml .= '<q>' . $questionId . '</q><a>' . $selectedOption . '</a>';
        }
        $responseXml .= "</r></rt>";
        $spCall = 'call ' . \SPCalls::TEST_SUBMIT_API . '(@user_id:=' . $request->user()->id . ',@test_id:="' . $test_id . ',@start_time:="' . $request->start_time . ',@end_time:="' . $request->end_time . '")';
        echo json_encode(DB::select($spCall));
    }
}
