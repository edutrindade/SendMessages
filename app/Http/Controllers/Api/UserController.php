<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = User::query();
        $query = $this->onlyTrashedIfRequested($request, $query);
        $users = $query->paginate(15);
        return UserResource::collection($users);
    }

    public function store(UserRequest $request)
    {
        $user = User::create($request->all() + ['name' => 'Admin']);
        $user->refresh();
        return new UserResource($user);
    }

    public function show(User $user)
    {
        return new UserResource($user); 
    }

    public function update(UserRequest $request, User $user)
    {
        $user->fill($request->all());
        $user->save();
        return response()->json([], 204); //Não exibe dados atualizados
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([], 204);
    }

    private function onlyTrashedIfRequested(Request $request, Builder $query)
    {
        if($request->get('trashed') == 1) {
            $query = $query->onlyTrashed();
        }
        return $query;
    }
}
