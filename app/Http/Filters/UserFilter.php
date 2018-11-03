<?php

namespace CodeShopping\Http\Filters;

use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

class UserFilter extends SimpleQueryFilter
{
    //protected $simpleFilters = ['id', 'name'];                     // filtro
    protected $simpleFilters = ['search'];                          
    protected $simpleSorts = ['id', 'name', 'created_at'];          // ordenação

    protected function applySearch($value){
        $this->query->where('name','LIKE',"%$value%");               //column //operator // value
    }
}