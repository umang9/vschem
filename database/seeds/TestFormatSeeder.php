<?php

use Illuminate\Database\Seeder;

class TestFormatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\TestFormat::class,50)->create();
    }
}
