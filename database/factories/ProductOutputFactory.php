<?php

use Faker\Generator as Faker;

$factory->define(CodeShopping\Models\ProductOutput::class, function (Faker $faker) {
    return [
        'amount' => $faker->numberBetween(1,2) // gera um número de 1 a 2
    ];
});
