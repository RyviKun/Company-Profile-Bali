<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    protected $fillable = [
        'event_id',
        'title',
        'name',
        'email',
        'company_name',
        'address',
        'province',
        'telephone',
        'mobile',
        'language',
        'job_position',
        'status',
        'checked_in_at',
        'qr_token',
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}