<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
include_once '../ud-utils/ApiUtil.php';

class Api
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!Auth::check()) {
            \ApiUtil::printFailureResponse('Unauthorized api request');
            die();//If you return from here without $next($request) then error is thrown
        }
        return $next($request);
    }
}
