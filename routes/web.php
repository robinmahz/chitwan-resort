<?php

use App\Http\Controllers\RouteController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

// Route::get('/experiences/{slug}', function () {
//     return Inertia::render('ExperienceDetail',);
// })->name('home');

Route::get('/experiences/{slug}', [App\Http\Controllers\RouteController::class, 'show'])->name('experience.detail');
// Route::get('/rooms/{slug}', [App\Http\Controllers\RouteController::class, 'room'])->name('room.detail');

Route::post('/contacts', [RouteController::class, 'saveContact'])->name('contact.store');
