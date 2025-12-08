<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $fillable = ['name', 'image', 'order'];
    protected $casts = ['order' => 'boolean'];

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
