<?php

namespace CodeShopping\Http\Filters;

use Illuminate\Database\Query\Builder;
use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

class ProductInputFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search'];                           // filtro para o nome do produto
    protected $simpleSorts = ['id', 'product_name', 'created_at'];           // ordenação

    protected function applySearch($value){
        $this->query->where('name','LIKE',"%$value%");               //column //operator // value
    }

    protected function applySortProductName($order){
        $this->query->orderBy('name', $order);
    }

    protected function applySortCreatedAt($order){
        $this->query->orderBy('product_outputs.created_at', $order);
    }

    /**
    * @param Builder $query
    * @return \Illuminate\Database\Eloquent\Builder 
    */

    public function apply($query)
    {
        $query = $query
                ->select('product_outputs.*')
                ->join('products', 'products.id', '=', 'product_outputs.product_id');
        return parent::apply($query);
    }
}