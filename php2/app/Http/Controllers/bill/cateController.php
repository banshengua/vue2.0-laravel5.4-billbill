<?php

namespace App\Http\Controllers\bill;

use Illuminate\Http\Request;

class cateController extends Controller
{
    public function addcate()
    {
        return view('addBill');
    }
}
