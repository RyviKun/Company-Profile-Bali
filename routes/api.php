<?php

use App\Mail\HelloMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;

Route::post('/mail', function (Request $request) {
    $validated = $request->validate([
        'businessName' => 'required|string',
        'fullName' => 'required|string',
        'number' => 'required|string',
        'email' => 'required|email',
        'subject' => 'required|string',
        'userMessage' => 'required|string',
    ]);

    try {
            Mail::to(env('MAIL_TO_ADDRESS'))->send(
                new HelloMail(
                    $validated['businessName'],
                    $validated['fullName'],
                    $validated['number'],
                    $validated['email'],
                    $validated['subject'],
                    $validated['userMessage'],
                )
            );
            return response()->json(['status' => 'Email sent']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Mail failed', 'details' => $e->getMessage()], 500);
    }

});


