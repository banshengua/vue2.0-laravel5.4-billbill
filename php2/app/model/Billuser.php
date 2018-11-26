<?php

namespace App\model;

use Illuminate\Database\Eloquent\Model;

class Billuser extends Model
{
    protected $table = 'tb_user';
    protected $primaryKey='id';
    public $timestamps = false;
}
