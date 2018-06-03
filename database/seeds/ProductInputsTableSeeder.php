<?php

use Illuminate\Database\Seeder;

class ProductInputsTableSeeder extends Seeder
{
    public function run()
    {
        $products = \CodeShopping\Models\Product::all();
        factory(\CodeShopping\Models\ProductInput::class,150)
            ->make() //gera um new da instância ProductInput
            ->each(function($input) use($products){
                $product = $products->random();
                $input->product_id = $product->id;
                $input->save();
            });
    }
}
