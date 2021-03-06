<?php

namespace CodeShopping\Providers;

use CodeShopping\Models\User;
use Illuminate\Support\Facades\Event;
use CodeShopping\Events\UserCreatedEvent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'CodeShopping\Events\Event' => [
            'CodeShopping\Listeners\EventListener',
        ],
        'CodeShopping\Events\UserCreatedEvent' => [
            'CodeShopping\Listeners\SendMailToDefinePassword'
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
