<?php

use Faker\Generator as Faker;

$factory->define(\App\Question::class, function (Faker $faker) {
    return [
        "question" => $faker->sentence(20),
        "option_1" => "OPTION 1",
        "option_2" => "OPTION 2",
        "option_3" => "OPTION 3",
        "option_4" => "OPTION 4",
        "answer" => $faker->randomElement(array('OPTION 1', 'OPTION 2', 'OPTION 3', 'OPTION 4')),
        "solution" => $faker->sentence(20),
        "difficulty" => $faker->randomElement(array('EASY', 'MEDIUM', 'DIFFICULT')),
        "chapter" => $faker->words(3,true)
    ];
});
