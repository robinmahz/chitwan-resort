<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::firstOrCreate(
            ['email' => 'admin@chitwanresort.com.np'],
            [
                'name' => 'Admin',
                'password' => 'Ch!tw@nRes@_@rt',
                'email_verified_at' => now(),
            ]
        );

        $this->call([SiteSettingSeeder::class]);
    }
}
