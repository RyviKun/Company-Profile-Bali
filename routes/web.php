<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Event;
use App\Http\Controllers\EventController;

Route::get('/', function () {
    $events = Event::where('status', 'published')
        ->latest('start_date') // Order by newest first
        ->paginate(6);
    return Inertia::render('homepage', ['events' => $events] );
})->name('home');

Route::get('/aboutus', function ()  {
    return Inertia::render('aboutus');
})->name('aboutus');

Route::get('/event', [EventController::class, 'index'])->name('event');

Route::get('/event/{slug}', [EventController::class, 'show'])->name('event.show');