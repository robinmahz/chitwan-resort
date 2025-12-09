<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $siteSettings = [
            'address' => '123 Paradise Avenue, Coastal Bay, CA 90210',
            'phone' => '+123456789',
            'phone2' => '+123456789',
            'email' => 'chitwan@gmail.com',
            'email2' => 'chitwan@gmail.com',
            'reception_hour' => '24/7 Front Desk Service',
            'reception_hour_text' => 'Check-in: 3:00 PM | Check-out: 11:00 AM',
            'facebook_link' => "https://facebook.com",
            'instagram' => "https://instagram.com",
            'twitter' => "https://twitter.com"
        ];
        foreach ($siteSettings as $key => $value) {
            SiteSetting::updateOrCreate(['key' => $key], ['value' => $value]);
        }
    }
}
