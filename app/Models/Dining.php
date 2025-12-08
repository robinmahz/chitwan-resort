<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dining extends Model
{
    protected $fillable = [
        'name',
        'category',
        'image',
        'description',
        'hours',
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
