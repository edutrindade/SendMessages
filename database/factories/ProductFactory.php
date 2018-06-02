<?php

use Faker\Generator as Faker;

$factory->define(CodeShopping\Models\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->city,
        'description' => $faker->text(100),
        'price' => $faker->randomFloat(2,10,100) //nbMaxDecimals, valorMin, valorMax
    ];
});
