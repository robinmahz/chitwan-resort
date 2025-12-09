<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    protected $fillable = [
        'key',
        'value',
    ];

    protected static function booted()
    {
        // When a setting is saved (created or updated)
        static::saved(function ($model) {
            cache()->forget('setting.' . $model->key);
            cache()->forget('inertia.site_settings'); // clear the shared Inertia cache too
        });

        // When a setting is deleted
        static::deleted(function ($model) {
            cache()->forget('setting.' . $model->key);
            cache()->forget('inertia.site_settings');
        });
    }
}
