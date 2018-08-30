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
        $questions = DB::select($spCall);
        $outputQuestions = array();
//        var_dump($questions[0]);
//        die();
        foreach ($questions as $i => $question) {
//            dd($question);
            $outputQuestion = array();
            $outputQuestion['question_id'] = $question->question_id;
            $outputQuestion['text'] = $question->question;
            $outputQuestion['isActive'] = 'disabled';//For front-end css;
            $optionsArray = array();
            for ($i = 1; $i <= 4; $i++) {
                $optionColumn = 'option_' . $i;
                $options = array(
                    'id' => $i,
                    'text' => $question->$optionColumn
                );
                array_push($optionsArray, $options);
            }
            $outputQuestion['options'] = $optionsArray;
            array_push($outputQuestions, $outputQuestion);
        }
        $outputQuestions[0]['isActive'] = 'active';//We want to display the first question
        echo json_encode($outputQuestions);
    }
}
