<?php

namespace CodeShopping\Http\Filters;

use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;
use Illuminate\Database\Query\Builder;

class UserFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search', 'role'];                           // filtro
    protected $simpleSorts = ['id', 'email', 'name', 'created_at'];          // ordenação

    protected function applySearch($value)
    {
        $this->query
            ->where('name','LIKE',"%$value%")               //column //operator // value
            ->orWhere('email', 'LIKE', "%$value%"); 
    }

    protected function applyRole($value)
    {
        $role = $value == 'customer' ? User::ROLE_CUSTOMER : User::ROLE_SELLER;
        $this->query->where('role', $role);
    }

    public function hasFilterParameter()
    {
        $contains = $this->parser->getFilters()->contains(function ($filter) {
            return $filter->getField() === 'search' && !empty($filter->getValue());
        });
        return $contains;
    }



}