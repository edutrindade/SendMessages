<?php

namespace CodeShopping\Rules;

use CodeShopping\Models\Product;
use Illuminate\Contracts\Validation\Rule;

class HasStock implements Rule
{
    private $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function passes($attribute, $value)
    {
        return $this->product->stock - $value >=0;
    }

    public function message()
    {
        return "O produto {$this->product->name} não possui estoque suficiente para esta saída.";
    }
}
