<?php

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

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
