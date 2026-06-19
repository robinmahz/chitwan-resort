<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $fillable = ['name', 'image', 'order'];
    protected $casts = [
        'order' => 'boolean',
        'image' => 'array',
    ];

    protected $appends = [
        'image_url',
        'image_urls',
    ];

    public function getImageUrlAttribute(): ?string
    {
        $images = $this->image;
        if (empty($images) || !is_array($images)) {
            return null;
        }
        $first = $images[0] ?? null;
        return $first ? asset('/storage/' . $first) : null;
    }

    public function getImageUrlsAttribute(): array
    {
        $images = $this->image;
        if (empty($images) || !is_array($images)) {
            return [];
        }
        return array_map(function ($path) {
            return asset('/storage/' . $path);
        }, $images);
    }
}
