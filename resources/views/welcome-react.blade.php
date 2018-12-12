<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>VSCHEM application</title>
    {{--This is use for react file--}}
    <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    <link rel="manifest" href="{{asset("mix-manifest.json")}}">
    <link rel="shortcut icon" href="{{asset("favicon.ico")}}">

    <link rel="stylesheet" href="{{asset("css/all.css")}}">
    {{--<link rel="stylesheet" href="{{asset("assets/plugins/bootstrap/css/bootstrap.min.css")}}">--}}
    {{--<link href="{{asset("assets/plugins/morrisjs/morris.css")}}" rel="stylesheet">--}}
    <link href="{{asset("css/style.css")}}" rel="stylesheet">
    <link href="{{asset("css/colors/default-dark.css")}}" id="theme" rel="stylesheet">
    {{--<link href="{{asset("assets/plugins/horizontal-timeline/css/horizontal-timeline.css")}}" rel="stylesheet">--}}
</head>
<body class="fix-header fix-sidebar card-no-border">
<noscript>
    You need to enable JavaScript to run this app.
</noscript>
<div class="preloader">
    <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
    </svg>
</div>
<div id="root">

</div>

    <script src="{{asset('js/app.js')}}"></script>
    <script src="{{asset('js/all.js')}}"></script>

    {{--<script src="{{asset("assets/plugins/jquery/jquery.min.js")}}"></script>--}}
    {{--<script src="{{asset("assets/plugins/bootstrap/js/popper.min.js")}}"></script>--}}
    {{--<script src="{{asset("assets/plugins/bootstrap/js/bootstrap.min.js")}}"></script>--}}
    {{--<script src="{{asset("js/jquery.slimscroll.js")}}"></script>--}}
    {{--<script src="{{asset("js/waves.js")}}"></script>--}}
    {{--<script src="{{asset("js/sidebarmenu.js")}}"></script>--}}
    {{--<script src="{{asset("assets/plugins/sticky-kit-master/dist/sticky-kit.min.js")}}"></script>--}}
    {{--<script src="{{asset("js/custom.min.js")}}"></script>--}}
    {{--<script src="{{asset("assets/plugins/sparkline/jquery.sparkline.min.js")}}"></script>--}}
    {{--<script src="{{asset("assets/plugins/raphael/raphael-min.js")}}"></script>--}}
    {{--<script src="{{asset("assets/plugins/morrisjs/morris.min.js")}}"></script>--}}
    {{--<script src="{{asset("js/dashboard.js")}}"></script>--}}
    {{--<script src="{{asset("assets/plugins/wizard/jquery.steps.min.js")}}"></script>--}}
    {{--<script src="{{asset("assets/plugins/wizard/jquery.validate.min.js")}}"></script>--}}
    {{--<script src="{{asset("assets/plugins/horizontal-timeline/js/horizontal-timeline.js")}}"></script>--}}
    {{--<script src="{{asset("assets/plugins/styleswitcher/jQuery.style.switcher.js")}}"></script>--}}

</body>
</html>
