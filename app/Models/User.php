<?php
declare(strict_types=1);

namespace CodeShopping\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function fill(array $attributes)
    {
        !isset($attributes['password'])?:$attributes['password'] = bcrypt($attributes['password']); //se não tiver password, não faz nada. Se tiver, faz atribuição
        return parent::fill($attributes);
    }
}
