<?php

namespace App\Models; 

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use SoftDeletes;

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'gallery' => 'array', // <-- JSON becomes array of objects
    ];
}