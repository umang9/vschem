<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

include_once '../ud-utils/ApiUtil.php';
include_once '../ud-utils/LoggerUtil.php';
include_once '../ud-constants/database.php';

class TestResponseController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function store(Request $request, $test_id)
    {
        $answers = $request['user_response'];
        $responseXml = "<rt><r>";
        foreach ($answers as $i=>$response) {
            $questionId = $response['question_id'];
            $selectedOptionId = $response['selected_option'];
            $selectedOption = $selectedOptionId == null ? 'null' : "option_" . $selectedOptionId;
            $responseXml .= '<q>' . $questionId . '</q><a>' . $selectedOption . '</a>';
        }
        $responseXml .= "</r></rt>";
        $spCall = 'call ' . \SPCalls::TEST_SUBMIT_API . '(@xml:="' . $responseXml .'",@user_id:=' . $request->user()->id . ',@test_id:=' . $test_id .  ',@start_time:="' . $request->start_time . '",@end_time:="' . $request->end_time . '")';

        \LoggerUtil::logDataToFile($_SERVER ['DOCUMENT_ROOT'] .'../logs/spcall', $spCall);
        $dbResponse = json_decode(json_encode(DB::select($spCall)),true);
        $output['success'] = true;
        $output['data'] = $dbResponse;
        echo json_encode($output);
    }
}
