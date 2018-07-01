<?php
declare(strict_types=1);

namespace CodeShopping\Models;

use Illuminate\Support\Facades\Event;
use Illuminate\Auth\EloquentUserProvider;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
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

    public function getJWTIdentifier()
    {
        return $this->id;
    }

    public function getJWTCustomClaims()
    {
        return [
            'email' => $this->email,
            'name' => $this->name
        ];
    }
}
