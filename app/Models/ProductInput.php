<?php

namespace CodeShopping\Models;

use Illuminate\Database\Eloquent\Model;

class ProductInput extends Model
{
    protected $fillable = ['amount', 'product_id'];

    //many-to-one: Um produto terá várias entradas, mas a entrada está relacionada a apenas um produto 
    public function product()
    {   
        return $this->belongsTo(Product::class); // retorna método que pertence ao model relacionado 
    }

}
