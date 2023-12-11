//ResponseFormatter
<?php

namespace Traits;

//DISIMULASIKAN INI TRAIT UNTUK FORMATER JSON RESPONSE 
trait ResponseFormatter
{
    public function responseFormatter($code, $message, $data = null)
    {
        return json_encode([
            "code" => $code,
            "massage" => $message,
            "data" => $data 
        ]);
    }
}
