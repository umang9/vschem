<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

include_once '../ud-utils/ApiUtil.php';
include_once '../ud-utils/LoggerUtil.php';
include_once '../ud-utils/DBUtil.php';
include_once '../ud-constants/database.php';

class TestResponseController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function store(Request $request, $test_id)
    {
        \LoggerUtil::logDataToFile('postdata', $_POST);
        $answers = $request['user_response'];
        $responseXml = "<rt>";
        foreach ($answers as $i => $response) {
            $questionId = $response['question_id'];
            $selectedOptionId = $response['selected_option'];
            $selectedOption = $selectedOptionId == null ? 'null' : "option_" . $selectedOptionId;
            $responseXml .= '<r><q>' . $questionId . '</q><a>' . $selectedOption . '</a></r>';
        }
        $responseXml .= "</rt>";
        $spCall = 'call ' . \SPCalls::TEST_SUBMIT_API . '(@xml:="' . $responseXml . '",@user_id:=' . $request->user()->id . ',@test_id:=' . $test_id . ',@start_time:="' . $request->start_time . '",@end_time:="' . $request->end_time . '")';

        $dbResponse = \DBUtil::getSPResult($spCall);
        $output['success'] = true;
        $output['data'] = $dbResponse;
        echo json_encode($output);
    }
}
