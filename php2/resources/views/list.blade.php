<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="renderer" content="webkit">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>列表页</title>
    <link rel="stylesheet" href="{{asset('resources/assets/backcss/pintuer.css')}}">
    <link rel="stylesheet" href="{{asset('resources/assets/backcss/admin.css')}}">
    <script src="{{asset('resources/assets/backjs/jquery.js')}}"></script>
    <script src="{{asset('resources/assets/backjs/pintuer.js')}}"></script>
</head>
<body>
<form method="post" action="{{url('/admin/list')}}" id="listform" name="listform">
    <div class="panel admin-panel">
        <div class="panel-head"><strong class="icon-reorder"> 内容列表</strong></div>
        <div class="padding border-bottom">
            <ul class="search" style="padding-left:10px;">
                <li> <a class="button border-main icon-plus-square-o" href="{{url('/admin/add')}}" target="_blank"> 添加内容</a> </li>
                <li>
                    <input type="hidden" name="_token" value="{{csrf_token()}}">
                    <input type="hidden" name="test" value="1">
                    <input type="text" placeholder="请输入标题关键字" name="Keyword" class="input" style="width:250px; line-height:17px;display:inline-block" />
                    <a href="javascript:void(document.listform.submit())" class="button border-main icon-search" > 搜索</a></li>
            </ul>
        </div>
        <table class="table table-hover text-center">
            <tr>
                <th width="20" style="text-align:left; padding-left:20px;">aid</th>
                <th width="10%">分类名</th>
                <th>pic</th>
                <th>描述</th>
                <th>标题</th>
                <th width="10%">用户名</th>
                <th width="10%">用户头像</th>
                <th>观看次数</th>
                <th>视频</th>
                <th>硬币数</th>
            </tr>
            @if(isset($datas))
                @foreach($datas as $data)
                <tr class="notfind">
                    <td style="width:50px; text-align:center; border:1px solid #ddd; padding:7px 0;" >{{$data['aid']}}</td>
                    <td>{{$data['catename']}}</td>
                    <td width="10%"><img src="{{asset($data['pic'])}}"  class="lazy"   alt="" width="70" height="50" /></td>
                    <td>{{$data['desc']}}</td>
                    <td>{{$data['title']}}}</td>
                    <td>{{$data['name']}}</td>
                    <td><img src="{{asset($data['face'])}}"  class="lazy" alt="" width="70" height="50" /></td>
                    <td>{{$data['view']}}</td>
                    <td><a class="button border-main " href="{{url('/admin/listVideo/'.$data['id'])}}" target="_blank">点我观看</a></td>
                    <td>{{$data['coin']}}</td>
                    <td><div class="button-group"> <a class="button border-main" href="{{url('/admin/update/'.$data['id'])}}"><span class="icon-edit"></span> 修改</a> <a class="button border-red" id="del" href="javascript:void(0)" onclick=" return del('{{$data['id']}}','{{$data['pic']}}','{{$data['face']}}')"><span class="icon-trash-o"></span> 删除</a> </div></td>

                </tr>

                @endforeach
                <tr>
                    <td colspan="15">  <div class="pagelist" id="Pagelist">
                            {{ $datas->appends(['Keyword' => isset($Keyword)?$Keyword:null])->links() }}</div>
                </td></tr>
            @endif
        </table>
    </div>
</form>
<script type="text/javascript">
window.onload=function(){
var notfind=document.getElementsByClassName('notfind');
       if(notfind.length>0){

       }else{
           Pagelist.innerHTML="对不起，没有找到你想要的内容<a  href='list'>返回列表</a>"
       }


}


      function  del(id,pic,face){
            var datas={'_token':'{{csrf_token()}}','id':id,'pic':pic,'face':face};
          var url='{{url('/admin/delete')}}';
          $.ajax({
              type: "post",
              url: url,
              dataType: "json",
              data: datas,
              success: function(data){
                  if(data['staus']==1){
                      alert(data['msg'])
                  }else {
                      alert(data['msg'])
                  }
                  window.location.reload();
              }
          });



        }



</script>
</body>
</html>