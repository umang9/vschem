<?php

use Faker\Generator as Faker;

$factory->define(App\TestFormat::class, function (Faker $faker) {
    return [
        "test_id" => $faker->numberBetween(1, 4),
        "question_id" => $faker->unique()->numberBetween(1, 50)
    ];
});
