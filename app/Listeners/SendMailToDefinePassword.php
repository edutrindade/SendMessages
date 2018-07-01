<?php

namespace CodeShopping\Listeners;

use CodeShopping\Events\UserCreatedEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use CodeShopping\Models\User;

class SendMailToDefinePassword
{
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  UserCreatedEvent  $event
     * @return void
     */
    public function handle(UserCreatedEvent $event)
    {
        $user = $event->getUser();
        $token = \Password::broker()->createToken($user);
        $user->sendPasswordResetNotification($token);
        //$user->notify(new Notification($token));
    }
}
