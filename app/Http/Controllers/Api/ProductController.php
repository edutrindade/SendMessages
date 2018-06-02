<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\ProductRequest;
use CodeShopping\Models\Product;
use Illuminate\Http\Request;
use CodeShopping\Http\Resources\ProductResource;

class ProductController extends Controller
{
    public function index()
    {
        return ProductResource::collection(Product::paginate(15));
    }

    public function store(ProductRequest $request)
    {
        $product = Product::create($request->all() + ['slug' => 'teste']);
        $product->refresh();
        return new ProductResource($product);
    }

    public function show(Product $product)
    {
        return new ProductResource($product); // return  $product
    }

    public function update(ProductRequest $request, Product $product)
    {
        $product->fill($request->all());
        $product->save();
        //return $product; //return new ProductResource($product);
        return response()->json([], 204); //Não exibe dados atualizados
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json([], 204);
    }
}
