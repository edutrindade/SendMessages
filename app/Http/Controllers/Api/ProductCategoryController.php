<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Models\Product;
use CodeShopping\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;
use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\ProductCategoryRequest;
use CodeShopping\Http\Resources\ProductCategoryResource;

class ProductCategoryController extends Controller
{
    public function index(Product $product)
    {
        return new ProductCategoryResource($product);
    }

    public function store(ProductCategoryRequest $request, Product $product)
    {
        // incluir categories com sync ao inves de attach, e retorná-las
        $changed = $product->categories()->sync($request->categories);
        $categoriesAttachedId = $changed['attached']; //pegar ID das categorias inclusas
        $categories = Category::whereIn('id', $categoriesAttachedId)->get(); //consultar todas as categorias que os ID estão presentes no ARRAY
        // return $categories;
        //return $categories->count() ? response()->json($categories, 201) : []; // retorna vazio se não tiver categorias adicionadas, ou 201 caso contrário
        return $categories->count() ? response()->json(new ProductCategoryResource($product), 201) : [];
    }

    public function destroy(Product $product, Category $category)
    {
        $product->categories()->detach($category->id);
        return response()->json([], 204);
    }
}
