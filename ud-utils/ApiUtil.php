<?php

/**
 * Created by PhpStorm.
 * User: monish.c
 * Date: 29/08/18
 * Time: 10:24 PM
 */
class ApiUtil
{
    public static function printFailureResponse($message = '')
    {
        echo '{"success":"false","message":"' . $message . '"}';
    }
}