<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="renderer" content="webkit">
<title>添加页面</title>
  <link rel="stylesheet" href="{{asset('resources/assets/backcss/pintuer.css')}}">
  <link rel="stylesheet" href="{{asset('resources/assets/backcss/admin.css')}}">
  <script src="{{asset('resources/assets/backjs/jquery.js')}}"></script>
  <script src="{{asset('resources/assets/backjs/pintuer.js')}}"></script>
  <script  src="{{asset('resources/assets/backjs/addbill.js')}}" ></script>
</head>
<body>
<div class="panel admin-panel">
  <div class="panel-head" id="add"><strong><span class="icon-pencil-square-o"></span>增加内容</strong></div>
  <div class="body-content">
    <form method="post" class="form-x" action="{{url('/admin/addHandle')}}">
      <input  type="hidden" name="_token" value="{{csrf_token()}}">
      <div class="form-group">
        <div class="label">
          <label>billapi自动<br>添加数据：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" id="bill"  />输入关键字douga,kichiku,dance,
          bangumi,fashion,life,ad,movie,music,<br>technology,game,ent和0-9中间用*分隔比如douga*2(即可自动填入数据)

        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>分类：</label>
        </div>
        <div class="field">
          <input type="text" id="cate" name="cate" value=""/>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>aid：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" id="aid" name="aid" data-validate="required:请输入分类标题" />
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>分类标题：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" id="tname" name="catename" data-validate="required:请输入分类标题" />
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>播放图片：</label>
        </div>
        <div class="field">
          <input type="text" class="input" id="pic" name="pic" data-validate="required:请输入图片" />
        </div>
      </div>

      <div class="form-group">
        <div class="label">
          <label>标题：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" id="title" name="title" data-validate="required:请输入标题" />
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>创建时间：</label>
        </div>
        <div class="field">
          <input type="text" class="laydate-icon input w50" id="ctime" name="ctime"  value=""  data-validate="required:日期不能为空" style="padding:10px!important; height:auto!important;border:1px solid #ddd!important;" />
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>描述：</label>
        </div>
        <div class="field">
          <textarea class="input" name="desc"   id="desc" style=" height:90px;"></textarea>
          <div class="tips"></div>
        </div>
      </div>
      <div class="clear"></div>
      <div class="form-group">
        <div class="label">
          <label>播放时间：</label>
        </div>
        <div class="field">
          <input type="text" class="laydate-icon input w50" id="Duration" name="duration"  data-validate="required:日期不能为空" style="padding:10px!important; height:auto!important;border:1px solid #ddd!important;" />
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>发布人：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="name"  id="name" value=""/>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>发布人头像：</label>
        </div>
        <div class="field">
          <input type="text" class="input" name="face"  id="face" value=""/>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>播放次数：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" name="view"  id="view" value=""  data-validate="number:排序必须为数字" />
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>收藏数：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" name="favorite"  id="favorite" value=""  data-validate="number:排序必须为数字" />
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>硬币数：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" name="coin"  id="coin" value=""  data-validate="number:排序必须为数字" />
          <div class="tips"></div>
        </div>
      </div>

      <div class="form-group">
        <div class="label">
          <label></label>
        </div>
        <div class="field">
          <button class="button bg-main icon-check-square-o" type="submit"> 提交</button>
        </div>
      </div>
    </form>
  </div>
</div>
</body></html>