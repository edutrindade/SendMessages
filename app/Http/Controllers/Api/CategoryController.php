<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\CategoryRequest;
use CodeShopping\Models\Category;
use Illuminate\Http\Request;
use CodeShopping\Http\Resources\CategoryResource;
use CodeShopping\Http\Filters\CategoryFilter;
use Mnabialek\LaravelEloquentFilter\Traits\Filterable;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        /** @var CategoryFilter $filter */
        $filter = app(CategoryFilter::class);
        /** @var Builder $filterQuery */
        $filterQuery = Category::filtered($filter);
        $categories = $request->has('all') ? $filterQuery->get() : $filterQuery->paginate(10);
        return CategoryResource::collection($categories);
    }

    public function store(CategoryRequest $request)
    {
        $category = Category::create($request->all() + ['slug' => 'teste']);
        $category->refresh();
        return new CategoryResource($category); //return $category
    }

    public function show(Category $category)
    {
        return new CategoryResource($category); //return $category
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $category->fill($request->all());
        $category->save();
        //return $category; // return new CategoryResource($category);
        return response()->json([], 200); 
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json([], 204);
    }
}
