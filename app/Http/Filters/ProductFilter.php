<?php

namespace CodeShopping\Http\Filters;

use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

class ProductFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search'];                                   // filtro
    protected $simpleSorts = ['id', 'name', 'price', 'created_at'];          // ordenação

    protected function applySearch($value){
        $this->query
                ->where('name', 'LIKE', "%$value%")                         //column //operator // value
                ->orWhere('description', 'LIKE', "%$value%");               // realiza busca pelo nome ou pela descrição
    }
    
    public function hasFilterParameter(){
        $contains = $this->parser->getFilters()->contains(function ($filter){
            return $filter->getField() === 'search' && !empty($filter->getValue()); 
        });
        return $contains;
    }

}