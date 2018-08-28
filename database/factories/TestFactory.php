<?php

use Faker\Generator as Faker;

$factory->define(App\Test::class, function (Faker $faker) {
    return [
        'test_name'=>$faker->name,
        'chapters'=>$faker->company,
        'duration_in_min'=>$faker->randomElement(array(30,45,60)),
        'type'=>$faker->randomElement(array('JEE','NEET')),
        'per_ques_score'=>4,
        'per_wrong_score'=>-1
    ];
});
