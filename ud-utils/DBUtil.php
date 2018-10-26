<?php

include_once '../ud-utils/LoggerUtil.php';

/**
 * Created by PhpStorm.
 * User: monish.c
 * Date: 08/09/18
 * Time: 1:32 PM
 */
class DBUtil
{
    public static function getSPResult($spCall, $dontJsonEncDec = false)
    {
        \LoggerUtil::logDataToFile('spcall', $spCall);
        if ($dontJsonEncDec) {
            return DB::select($spCall);
        }
        return json_decode(json_encode(DB::select($spCall)), true);
    }
}