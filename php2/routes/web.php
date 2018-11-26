<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//  cate CRUD
Route::group(['namespace' => 'bill','middleware'=>'checkLogin'], function(){
    //add
    Route::get('/admin/add', 'billController@add');
    Route::post('/admin/addHandle', 'billController@addHandle');
    //list
    Route::match(['get', 'post'],'/admin/list', 'billController@list');
    //listVedio
    Route::get('/admin/listVideo/{id}', 'billController@listVideo');
    //update
    Route::get('/admin/update/{id}', 'billController@update');
    Route::post('/admin/updateHandle', 'billController@updateHandle');
    Route::post('/admin/delete', 'billController@delete');
    //index
    Route::get('/admin/index', 'IndexController@admin');
    Route::get('/admin/tips', 'IndexController@tips');
    Route::get('/admin/cancel', 'IndexController@cancel');
});
//api  douga/fashion/life/music/technology/ent/game/dance/ad/kichiku/bangumi
Route::get('/api/douga','bill\IndexController@douga');
Route::get('/api/fashion', 'bill\IndexController@fashion');
Route::get('/api/life', 'bill\IndexController@life');
Route::get('/api/music','bill\IndexController@music');
Route::get('/api/technology','bill\IndexController@technology');
Route::get('/api/ent','bill\IndexController@ent');
Route::get('/api/game','bill\IndexController@game');
Route::get('/api/dance','bill\IndexController@dance');
Route::get('/api/kichiku','bill\IndexController@kichiku');
Route::get('/api/ad','bill\IndexController@ad');
Route::get('/api/bangumi','bill\IndexController@bangumi');
Route::get('/api/{id}','bill\IndexController@getmovie');
//search
Route::get('/api/all/{keywords}','bill\IndexController@all');
Route::get('/api/all/{keywords}/{duration?}','bill\IndexController@Duration');
//end
//first
Route::get('/', function () {
    return view('welcome');
});
Route::get('/index', function () {
    return view('fore/hello');
});
Route::post('/admin/loginHaddle', 'bill\IndexController@loginHaddle');
Route::get('/admin/login', 'bill\IndexController@login');
