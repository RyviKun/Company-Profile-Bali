<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/aboutus', function ()  {
    return Inertia::render('aboutus');
})->name('aboutus');

