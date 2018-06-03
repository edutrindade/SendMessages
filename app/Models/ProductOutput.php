<?php

namespace CodeShopping\Models;

use Illuminate\Database\Eloquent\Model;

class ProductOutput extends Model
{
    protected $fillable = ['amount', 'product_id'];

    public function product()
    {   
        return $this->belongsTo(Product::class); // retorna método que pertence ao model relacionado 
    }
}
