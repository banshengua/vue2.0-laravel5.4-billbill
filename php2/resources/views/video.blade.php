<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="renderer" content="webkit">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>预览视频和图片</title>
</head>
<body>
<img src="{{asset($data['pic'])}}" alt="" width="800" height="500" style="display: inline-block">
<img src="{{asset($data['pic'])}}" alt="" width="600"  height="400" style="display: inline-block">
<iframe height=1000 width=1000 src='http://static.hdslb.com/miniloader.swf?aid={{$data['aid']}}&page=1'    frameborder="0"

        scrolling="no"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"></iframe>

</body>
</html>
