<?php

if (!function_exists('get_setting')) {
    /**
     * Get a setting value by key from the site_settings table
     *
     * @param string $key           The setting key (e.g., 'resort_name', 'resort_phone')
     * @param mixed  $default       Default value if key doesn't exist
     * @return mixed
     */
    function get_setting($key, $default = null)
    {
        // Use Laravel's cache to avoid hitting DB on every request
        return cache()->rememberForever("setting.{$key}", function () use ($key, $default) {
            $setting = \App\Models\SiteSetting::where('key', $key)->first();

            return $setting?->value ?? $default;
        });
    }
}
