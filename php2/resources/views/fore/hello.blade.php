<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="X-CSRF-TOKEN" content="{{ csrf_token() }}">
    <title>bilibili</title>
    <style>
        body{margin: 0;padding: 0;}
    </style>
</head>
<body>
<div id="app">
    <example></example>
</div>
<script src="{{ asset('public/js/app.js') }}"></script>

</body>
</html>