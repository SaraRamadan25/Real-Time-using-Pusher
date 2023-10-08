<?php

use App\Events\OrderStatusUpdate;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

class Order{
    public $id;
    public function __construct($id){
        $this->id = $id;
    }
}
Route::get('/', function () {

    OrderStatusUpdate::dispatch(new Order(1));

    return view('welcome');
});
