<?php

namespace App\Http\Controllers\bill;

use App\Http\Requests;
use App\model\Bill;
use App\model\Billuser;
use Illuminate\Support\Facades\Session;
use Request;

class IndexController extends Controller
{
    public function index()
    {


    }
    public function admin()
    {

        return view('backindex');
    }
   // login
    public function login()
    {
        return view('login');
    }
    //跳转
    public function tips()
    {
        return view('tips');
    }
    //login handle
    public function loginHaddle(Request $request)
    {
        $data=Request::except('_token');
       $rel= Billuser::where([
            ['name','=',$data['name']],
            ['password','=',$data['password']]
        ])->first();
        if($rel){
            if($rel['root']>10){
                session(['msg'=>'1']);
                return view('tips');
            }else{
                $data=['msg'=>'登录成功','status'=>'1'];
                return  $data;
            }
        }else{
            $data=['msg'=>'登录失败','status'=>'0'];
          return  $data;
        }
    }
    //login cancel
    public function cancel()
    {
        session(['msg'=>null]);
        return redirect('admin/login');
    }
    //api  douga/fashion/life/music/technology/ent/game/dance/ad/kichiku/bangumi
    public function douga()
    {

        $data=Bill::where('cate','=','douga')->take(50)->get();
        return $data;
    }
    public function fashion()
    {

        $data=Bill::where('cate','=','fashion')->take(50)->get();
        return $data;
    }
    public function life()
    {

        $data=Bill::where('cate','=','life')->take(50)->get();
        return $data;
    }
    public function music()
    {

        $data=Bill::where('cate','=','music')->take(50)->get();
        return $data;
    }
    public function technology()
    {
    $data=Bill::where('cate','=','technology')->take(50)->get();
    return $data;
    }
    public function ent()
    {

        $data=Bill::where('cate','=','ent')->take(50)->get();
        return $data;
    }
    public function game()
    {

    $data=Bill::where('cate','=','game')->take(50)->get();
    return $data;
    }
    public function dance()
    {

        $data=Bill::where('cate','=','dance')->take(50)->get();
        return $data;
    }
    public function kichiku()
    {

        $data=Bill::where('cate','=','kichiku')->take(50)->get();
        return $data;
    }
    public function bangumi()
    {

        $data=Bill::where('cate','=','bangumi')->take(50)->get();
        return $data;
    }

    public function Duration($keyword,$duration=1)
    {
        if($duration){
            if($duration==1){
                 $data=Bill::where([['title','like','%'.$keyword.'%']])->orderBy('id', 'desc')->paginate(12);
        if(isset($data))
            return $data;
        else{
            $data=['status'=>0,'msg'=>'找不到相关视频'];
            return $data;
        }
            }
            elseif($duration==2)
            {
                 $data=Bill::where([['title','like','%'.$keyword.'%']])->orderBy('view', 'desc')->paginate(12);
        if(isset($data))
            return $data;
        else{
            $data=['status'=>0,'msg'=>'找不到相关视频'];
            return $data;
        }
            }
            else{
         $data=Bill::where([['title','like','%'.$keyword.'%']])->orderBy('coin', 'desc')->paginate(12);
        if(isset($data))
            return $data;
        else{
            $data=['status'=>0,'msg'=>'找不到相关视频'];
            return $data;
        }
            }
        }
     
    }
    public function all($keyword)
    {

        $data=Bill::where('title','like','%'.$keyword.'%')->orderBy('id', 'desc')->paginate(12);
        if(isset($data))
            return $data;
        else{
            $data=['status'=>1,'msg'=>'找不到相关视频'];
            return $data;
        }
    }
    public function getmovie($id){
       $data=Bill::where('aid','=',$id)->first();
       return $data;

    }
}
