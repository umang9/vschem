<?php

/**
 * Created by PhpStorm.
 * User: monish.c
 * Date: 31/08/18
 * Time: 4:19 AM
 */
class LoggerUtil
{
    private static function getFileHandle( $fileName )
    {
        $fileHandle = fopen( $fileName , 'ab+');
        if( !$fileHandle )
        {
            error("FILEWRITEERROR: Error opening file " . $fileName , NULL , LOG_ALERT);
        }
        return $fileHandle;
    }

    public static function logDataToFile($fileName, $dataToLog)
    {
        $fileHandle = self::getFileHandle( $fileName );
        if( $fileHandle != FALSE )
        {
            if( !fwrite( $fileHandle , $dataToLog ) )
            {
                error( "Error writing content to log file :: " . $fileName . "::" . $dataToLog , NULL , LOG_DEBUG );
            }
            fclose( $fileHandle);
        }
        else
        {
            error( "Error opening log file :: " . $fileName . "::" . $dataToLog , NULL , LOG_DEBUG );
        }
    }
}