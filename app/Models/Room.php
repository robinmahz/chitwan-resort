<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $fillable = [
        'name',
        'description',
        'image',
        'area',
        'guests',
        'price',
        'furniture',
        'amenities',
    ];

    protected $casts = [
        'amenities' => 'array',
    ];

    protected $appends = [
        'image_url',
    ];

    public function getImageUrlAttribute(): ?string
    {
        return $this->image
            ? asset('/storage/' . $this->image)
            : null;
    }
}
