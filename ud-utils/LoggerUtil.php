<?php

/**
 * Created by PhpStorm.
 * User: monish.c
 * Date: 31/08/18
 * Time: 4:19 AM
 */
class LoggerUtil
{
    private static function getFileHandle($fileName)
    {
        $fileHandle = fopen($fileName, 'ab+');
        if (!$fileHandle) {
            error("FILEWRITEERROR: Error opening file " . $fileName, NULL, LOG_ALERT);
        }
        return $fileHandle;
    }

    /**
     * @param $fileName  {String}
     * @param $dataToLog {String|Object}
     */
    public static function logDataToFile($fileName, $dataToLog)
    {
        $filePath = $_SERVER ['DOCUMENT_ROOT'] . '/logs/' . $fileName;
        $fileHandle = self::getFileHandle($filePath);
        if ($fileHandle != FALSE) {
            if (gettype($dataToLog) === "object" || gettype($dataToLog) === "array") {
                $dataToLog = json_encode($dataToLog);
            }
            if (!fwrite($fileHandle, PHP_EOL . $dataToLog)) {
                error("Error writing content to log file :: " . $fileName . "::" . $dataToLog, NULL, LOG_DEBUG);
            }
            fclose($fileHandle);
        } else {
            error("Error opening log file :: " . $fileName . "::" . $dataToLog, NULL, LOG_DEBUG);
        }
    }
}