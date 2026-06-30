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
        if (!$first) {
            return null;
        }
        if (str_starts_with($first, 'http://') || str_starts_with($first, 'https://') || str_starts_with($first, 'images/')) {
            return asset($first);
        }
        return asset('/storage/' . $first);
    }

    public function getImageUrlsAttribute(): array
    {
        $images = $this->image;
        if (empty($images) || !is_array($images)) {
            return [];
        }
        return array_map(function ($path) {
            if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://') || str_starts_with($path, 'images/')) {
                return asset($path);
            }
            return asset('/storage/' . $path);
        }, $images);
    }
}
