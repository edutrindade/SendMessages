<?php

namespace CodeShopping\Rules;

use Illuminate\Contracts\Validation\Rule;
use CodeShopping\Models\UserProfile;
use CodeShopping\Firebase\Auth as FirebaseAuth;

class PhoneNumberUnique implements Rule
{
    private $ignoreUserId;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($ignoreUserId = null)
    {
        $this->ignoreUserId = $ignoreUserId;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $firebaseAuth = app(FirebaseAuth::class);
        try{
            $phoneNumber = $firebaseAuth->phoneNumber($value);
            UserProfile::where('phone_number', $phoneNumber)>first();
            return $profile == null || $this->ignoreUserId != null && $this->ignoreUserId == $profile->user->id;
        } catch (\Exception $e){
            return false;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'O número de telefone informado já está em uso.';
    }
}
