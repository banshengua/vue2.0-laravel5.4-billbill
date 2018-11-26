<?php

namespace App\Http\Controllers\bill;
//use Illuminate\Http\Request;
use App\Http\Requests;
use App\model\Bill;
use App\model\Picture;
use Request;
use Symfony\Component\Console\Input\Input;

class billController extends Controller
{
    //add bill
    public function add()
    {
        return view('addBill');
    }
    //addHandle bill
    public function addHandle()
    {
        $data=new Bill();
        $newData=Request::except('_token');
        $result=Bill::where('aid',$newData['aid'])->first();
        if(isset($result)){
            return redirect('/admin/add');
        }
        function GrabImage($url, $dir='', $filename='')
        {
            $ext = strrchr($url, '.');
            if(empty($dir))
                $dir = './uploads';
            $dir = realpath($dir);
            $filename=time().$ext;
            $pic='uploads/'.$filename;
            $filename = $dir .'\\'.$filename;
            ob_start();
            readfile($url);
            $img = ob_get_contents();
            ob_end_clean();
            $size = strlen($img);
            $fp2 = fopen($filename , "a");
            fwrite($fp2, $img);
            fclose($fp2);
            return $pic;
        }
       $pic= GrabImage($newData['pic']);
        $face=GrabImage($newData['face']);
        $data->aid=$newData['aid'];
        $data->cate=$newData['cate'];
        $data->catename=$newData['catename'];
        $data->pic=$pic;
        $data->title=$newData['title'];
        $data->ctime=$newData['ctime'];
        $data->desc=$newData['desc'];
        $data->duration=$newData['duration'];
        $data->name=$newData['name'];
        $data->face=$face;
        $data->view=$newData['view'];
        $data->favorite=$newData['favorite'];
        $data->coin=$newData['coin'];

        if($data->save()){
           return  redirect('/admin/add');
        }else{
            dd('添加失败');
        }
    }
    //list
    public function list()
    {
        if($data= Request::all()){
         if(isset($data['Keyword'])){
        if($data=$data['Keyword']){
            $datas=Bill::where('title','like','%'.$data.'%')->orderBy('id', 'desc')->paginate(2);
            return view('list',['datas'=>$datas,'Keyword'=>$data]);
        }
        }
        }
        $datas=Bill::orderBy('id', 'desc')->paginate(7);
        return view('list', ['datas' => $datas]);
    }

    public function listVideo($id)
    {
        $data=Bill::where('id','=',$id)->first();

        return view('video',['data'=>$data]);
    }
    public function update($id)
    {
        $data=Bill::where('id','=',$id)->first();
        return view('update',['data'=>$data]);
    }

    public function updateHandle()
    {
        $newData =Request::all();
        $data=Bill::where('id','=',$newData['id'])->first();
        $data->catename=$newData['catename'];
        $data->title=$newData['title'];
        $data->ctime=$newData['ctime'];
        $data->desc=$newData['desc'];
        $data->duration=$newData['duration'];
        $data->name=$newData['name'];
        $data->view=$newData['view'];
        $data->favorite=$newData['favorite'];
        $data->coin=$newData['coin'];
        if($data->save()){
           return redirect('/admin/list');
        }else{
            dd('更新失败');
        }
    }

    public function delete()
    {
        $data=Request::all();
        function delImage($url, $dir='', $filename='')
        {
            $ext = explode('/',$url );
            $filename=$ext[1];
            $dir = './uploads';
            $dir = realpath($dir);
            $filename = $dir .'\\'.$filename;
            if(unlink($filename)){
                $result=true;
            }else{
                $result=false;
            }

            return $result;
        }
        if($data['pic']==$data['face']);
       $pic=delImage($data['pic']);
        $face=$pic;
        $id=$data['id'];
        $rel=Bill::where('id','=',$id)->delete();
        if($rel&&$pic&&$face){
            $data=['staus'=>1,'msg'=>'删除成功'];
            return $data;
        }else{
            $data=['staus'=>0,'msg'=>'删除失败'];
            return $data;
        }
    }
}
