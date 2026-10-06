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
        'inquire_url',
        'amenities',
        'order',
    ];

    protected $casts = [
        'amenities' => 'array',
        'order' => 'integer',
    ];

    protected $appends = [
        'image_url',
    ];

    public function getImageUrlAttribute(): ?string
    {
        if (!$this->image) {
            return null;
        }
        if (str_starts_with($this->image, 'http://') || str_starts_with($this->image, 'https://') || str_starts_with($this->image, 'images/')) {
            return asset($this->image);
        }
        return asset('/storage/' . $this->image);
    }
}
