<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'updation_date';
    protected $table='test';
}
