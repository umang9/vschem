<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth',['except' => 'homepage']);
    }

    public function index()
    {
        return view('welcome-react');
    }

    public function homepage()
    {
        return view('homepage');
    }

}
