<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

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
        'language',
        'job_position',
        'status',
        'qr_token',
        'isVip'
    ];

 

    protected static function booted()
    {
        static::creating(function ($registration) {
            $registration->qr_token = Str::uuid()->toString();
        });
    }
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}