@extends('homepage')

@section('content')
<div class="slider-container slider-container-height-870 rev_slider_wrapper bg-light-5">
    <div id="revolutionSlider" class="slider rev_slider" data-version="5.4.7" data-plugin-revolution-slider data-plugin-options="{'delay': 9000, 'gridwidth': [1140,960,720,540], 'gridheight': [870,870,870,870], 'disableProgressBar': 'on', 'responsiveLevels': [4096,1200,992,576], 'navigation' : {'arrows': { 'enable': false, 'style': 'slider-arrows-style-1 slider-arrows-dark' }, 'bullets': {'enable': false, 'style': 'bullets-style-1', 'h_align': 'center', 'v_align': 'bottom', 'space': 7, 'v_offset': 35, 'h_offset': 0}}}">
        <ul>
            <li data-transition="fade">
                <img src="{{asset('app/img/slides/multi-purpose/slide-7-1.jpg')}}"  
                    alt=""
                    data-bgposition="center center" 
                    data-bgfit="cover" 
                    data-bgrepeat="no-repeat" 
                    class="rev-slidebg">

                <h1 class="tp-caption text-color-dark font-primary font-weight-thin"
                    data-x="center" data-hoffset="['62','62','62','62']"
                    data-y="center" data-voffset="['-140','-140','-140','-140']"
                    data-start="1400"
                    data-fontsize="['32','32','32','32']"
                    data-basealign="slide"
                    data-transform_in="y:[100%];opacity:0;s:500;"
                    data-transform_out="y:[100%];opacity:0;s:500;">World-Class Technology</h1>

                <div class="tp-caption text-color-dark font-primary font-weight-bold"
                    data-frames='[{"from":"opacity:0;","speed":500,"to":"o:1;","delay":1500,"split":"chars","splitdelay":0.1,"ease":"Power4.easeOut"},{"delay":2000,"speed":500,"to":"sX:0.9;sY:0.9;opacity:0;","split":"chars","splitdelay":0.03,"ease":"Power3.easeIn"}]'
                    data-type="text"
                    data-whitespace="nowrap"
                    data-x="center" data-hoffset="['15','15','15','30']"
                    data-y="center" data-voffset="['-95','-95','-95','-95']"
                    data-start="1000"
                    data-fontsize="['44','44','44','40']">/DIGITAL CLASSES</div>

                <div class="tp-caption text-color-dark font-primary font-weight-bold"
                    data-frames='[{"from":"opacity:0;","speed":500,"to":"o:1;","delay":6000,"split":"chars","splitdelay":0.1,"ease":"Power4.easeOut"},{"delay":2000,"speed":500,"to":"sX:0.9;sY:0.9;opacity:0;","split":"chars","splitdelay":0.03,"ease":"Power3.easeIn"}]'
                    data-type="text"
                    data-whitespace="nowrap"
                    data-x="center" data-hoffset="['30','30','30','45']"
                    data-y="center" data-voffset="['-95','-95','-95','-95']"
                    data-start="1000"
                    data-fontsize="['44','44','44','40']">/AWESOME TEAM</div>

                <div class="tp-caption text-color-dark font-primary font-weight-bold"
                    data-frames='[{"from":"opacity:0;","speed":500,"to":"o:1;","delay":10000,"split":"chars","splitdelay":0.1,"ease":"Power4.easeOut"},{"delay":"wait","speed":500,"to":"sX:0.9;sY:0.9;opacity:0;","split":"chars","splitdelay":0.03,"ease":"Power3.easeIn"}]'
                    data-type="text"
                    data-whitespace="nowrap"
                    data-x="center" data-hoffset="['-15','-15','-15','4']"
                    data-y="center" data-voffset="['-95','-95','-95','-95']"
                    data-start="1000"
                    data-fontsize="['44','44','44','40']">/CREATIVE CLASSES</div>

                <a class="tp-caption btn btn-rounded btn-primary font-weight-semibold"
                    href="#start"
                    data-hash
                    data-hash-offset="120"
                    data-x="center" data-hoffset="['125','125','125','110']"
                    data-y="center" data-voffset="['0','0','0','0']"
                    data-start="1600"
                    data-whitespace="nowrap"
                    data-fontsize="['13','14','14','14']"
                    data-paddingtop="['13','14','14','14']"
                    data-paddingbottom="['13','13','13','16']"
                    data-paddingleft="['65','65','65','75']"
                    data-paddingright="['65','65','65','75']"	 
                    data-transform_in="y:[-50%];opacity:0;s:500;"
                    data-transform_out="y:[50%];opacity:0;s:500;">GET STARTED</a>

                <a class="tp-caption btn btn-link font-weight-semibold text-color-dark text-decoration-none d-flex align-items-center"
                    href="portfolio-grid-4-columns.html"
                    data-x="center" data-hoffset="['162','162','162','155']"
                    data-y="center" data-voffset="['55','55','55','55']"
                    data-start="1900"
                    data-whitespace="nowrap"
                    data-fontsize="14"
                    data-transform_in="y:[-50%];opacity:0;s:500;"
                    data-transform_out="y:[50%];opacity:0;s:500;">OUR PORTFOLIO <i class="fas fa-angle-right text-color-primary text-4 ml-2"></i></a>
                    
            </li>
        </ul>
    </div>
</div>
<section class="section section-content-pull-top-3 pull-top-always bg-light appear-animation" data-appear-animation="fadeInUpShorter" data-plugin-options="{'accY': 150}">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mb-4 mb-lg-0">
                <span class="top-sub-title">GET TO KNOW US</span>
                <h2 class="font-weight-bold text-5">Online exam classes Based in South Mumbai</h2>
            </div>
            <div class="col-lg-4">
                <div class="icon-box icon-box-style-1">
                    <div class="icon-box-icon">
                        <i class="lnr lnr-phone-handset text-color-dark"></i>
                    </div>
                    <div class="icon-box-info">
                        <div class="icon-box-info-title">
                            <h3 class="font-weight-bold text-4 mb-0">Phone Number</h3>
                        </div>
                        <p class="mb-0"><a class="text-decoration-none" href="tel:+00112304567" target="_blank" title="Call Us Now">(123) 456-7890</a> - <a class="text-decoration-none" href="tel:+00112304567" target="_blank" title="Call Us Now">(123) 456-7890</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="start" class="section section-height-2 bg-light pb-0">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="steps steps-primary steps-style-3">
                    <div class="dots appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="600">
                        <img class="dots-mask" src="{{asset('app/img/svg/steps-dots-bg-light.svg')}}" alt="" />
                        <div class="dots-color"></div>
                        <div class="dots-color-dark"></div>
                    </div>
                    <div class="item appear-animation" data-appear-animation="stepsFadeInLeft" data-appear-animation-delay="200">
                        <h2 class="item-title"><span>100+</span>CLIENTS</h2>
                    </div>
                    <div class="item appear-animation" data-appear-animation="stepsFadeInUp">
                        <h2 class="item-title"><span>20+</span>MEMBERS</h2>
                    </div>
                    <div class="item appear-animation" data-appear-animation="stepsFadeInRight" data-appear-animation-delay="200">
                        <h2 class="item-title"><span>15+</span>AWARDS</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-lg-8 mx-auto overflow-hidden">
                <p class="text-color-dark text-center text-4 mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="600">“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma - which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice.”</p>
            </div>
        </div>
        <div class="row text-center">
            <div class="col">
                <a href="about-us-3.html" class="btn btn-primary btn-outline btn-4 btn-pull-down text-0 font-weight-semibold bg-light">MORE ABOUT US</a>
            </div>
        </div>
    </div>
</section>
<section class="section section-height-4 bg-light-5">
    <div class="container">
        <div class="row text-center">
            <div class="col">
                <div class="overflow-hidden">
                    <span class="top-sub-title text-color-primary d-block appear-animation" data-appear-animation="maskUp">LOREM IPSUM DOLOR SIT</span>
                </div>
                <div class="overflow-hidden mb-3">
                    <h2 class="font-weight-bold mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">Selected Projects</h2>
                </div>
                <div class="overflow-hidden mb-5">
                    <p class="lead mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa<br> enim. Nullam id varius nunc id varius nunc.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-10 col-sm-8 col-md-12 mx-auto d-flex overflow-hidden p-0 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-duration="700ms">
                <div class="owl-carousel carousel-center-active-items carousel-center-active-items-style-3" data-plugin-carousel data-plugin-options="{'autoplay': false, 'dots': false, 'nav': true, 'loop': true, 'margin': 40, 'responsive': { '0': {'items': 1}, '576': {'items': 1}, '768': {'items': 3}, '992': {'items': 3}, '1200': {'items': 5}}}">

                    <div class="appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                        <article class="card rounded bg-light border-0 p-0">
                            <a href="portfolio-detail-1.html"><img src="{{asset('app/img/projects/generic/project-1-wide.jpg')}}" class="card-img-top hover-effect-2" alt=""></a>
                            <div class="card-body">
                                <h3 class="font-weight-bold text-4 mb-1"><a href="portfolio-detail-1.html" class="link-color-dark">EZ Card</a></h3>
                                <span class="text-color-dark mb-3"><i class="fas fa-tag text-color-primary"></i> brands</span>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>
                            </div>
                        </article>
                    </div>

                    <div class="appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                        <article class="card rounded bg-light border-0 p-0">
                            <a href="portfolio-detail-1.html"><img src="{{asset('app/img/projects/photos/project-2-wide.jpg')}}" class="card-img-top hover-effect-2" alt=""></a>
                            <div class="card-body">
                                <h3 class="font-weight-bold text-4 mb-1"><a href="portfolio-detail-1.html" class="link-color-dark">Fashion Model</a></h3>
                                <span class="text-color-dark mb-3"><i class="fas fa-tag text-color-primary"></i> design</span>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>
                            </div>
                        </article>
                    </div>

                    <div class="appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                        <article class="card rounded bg-light border-0 p-0">
                            <a href="portfolio-detail-1.html"><img src="{{asset('app/img/projects/generic/project-3-wide.jpg')}}" class="card-img-top hover-effect-2" alt=""></a>
                            <div class="card-body">
                                <h3 class="font-weight-bold text-4 mb-1"><a href="portfolio-detail-1.html" class="link-color-dark">Style Bag</a></h3>
                                <span class="text-color-dark mb-3"><i class="fas fa-tag text-color-primary"></i> web</span>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>
                            </div>
                        </article>
                    </div>

                    <div class="appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                        <article class="card rounded bg-light border-0 p-0">
                            <a href="portfolio-detail-1.html"><img src="{{asset('app/img/projects/photos/project-3-wide.jpg')}}" class="card-img-top hover-effect-2" alt=""></a>
                            <div class="card-body">
                                <h3 class="font-weight-bold text-4 mb-1"><a href="portfolio-detail-1.html" class="link-color-dark">Shoes EZ</a></h3>
                                <span class="text-color-dark mb-3"><i class="fas fa-tag text-color-primary"></i> web</span>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>
                            </div>
                        </article>
                    </div>

                    <div class="appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                        <article class="card rounded bg-light border-0 p-0">
                            <a href="portfolio-detail-1.html"><img src="{{asset('app/img/projects/generic/project-4-wide.jpg')}}" class="card-img-top hover-effect-2" alt=""></a>
                            <div class="card-body">
                                <h3 class="font-weight-bold text-4 mb-1"><a href="portfolio-detail-1.html" class="link-color-dark">Sport Watch</a></h3>
                                <span class="text-color-dark mb-3"><i class="fas fa-tag text-color-primary"></i> ads</span>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>
                            </div>
                        </article>
                    </div>

                    <div class="appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                        <article class="card rounded bg-light border-0 p-0">
                            <a href="portfolio-detail-1.html"><img src="{{asset('app/img/projects/photos/project-6-wide.jpg')}}" class="card-img-top hover-effect-2" alt=""></a>
                            <div class="card-body">
                                <h3 class="font-weight-bold text-4 mb-1"><a href="portfolio-detail-1.html" class="link-color-dark">Tattoo Show</a></h3>
                                <span class="text-color-dark mb-3"><i class="fas fa-tag text-color-primary"></i> design</span>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>
                            </div>
                        </article>
                    </div>

                    <div class="appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                        <article class="card rounded bg-light border-0 p-0">
                            <a href="portfolio-detail-1.html"><img src="{{asset('app/img/projects/photos/project-12-wide.jpg')}}" class="card-img-top hover-effect-2" alt=""></a>
                            <div class="card-body">
                                <h3 class="font-weight-bold text-4 mb-1"><a href="portfolio-detail-1.html" class="link-color-dark">Mobile Tech</a></h3>
                                <span class="text-color-dark mb-3"><i class="fas fa-tag text-color-primary"></i> ads</span>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>
                            </div>
                        </article>
                    </div>

                    <div class="appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                        <article class="card rounded bg-light border-0 p-0">
                            <a href="portfolio-detail-1.html"><img src="{{asset('app/img/projects/generic/project-6-wide.jpg')}}" class="card-img-top hover-effect-2" alt=""></a>
                            <div class="card-body">
                                <h3 class="font-weight-bold text-4 mb-1"><a href="portfolio-detail-1.html" class="link-color-dark">EZ Book</a></h3>
                                <span class="text-color-dark mb-3"><i class="fas fa-tag text-color-primary"></i> design</span>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>
                            </div>
                        </article>
                    </div>

                    <div class="appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                        <article class="card rounded bg-light border-0 p-0">
                            <a href="portfolio-detail-1.html"><img src="{{asset('app/img/projects/generic/project-7-wide.jpg')}}" class="card-img-top hover-effect-2" alt=""></a>
                            <div class="card-body">
                                <h3 class="font-weight-bold text-4 mb-1"><a href="portfolio-detail-1.html" class="link-color-dark">Laptop Concept</a></h3>
                                <span class="text-color-dark mb-3"><i class="fas fa-tag text-color-primary"></i> web</span>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>
                            </div>
                        </article>
                    </div>

                    <div class="appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                        <article class="card rounded bg-light border-0 p-0">
                            <a href="portfolio-detail-1.html"><img src="{{asset('app/img/projects/photos/project-5-wide.jpg')}}" class="card-img-top hover-effect-2" alt=""></a>
                            <div class="card-body">
                                <h3 class="font-weight-bold text-4 mb-1"><a href="portfolio-detail-1.html" class="link-color-dark">Pink Ad</a></h3>
                                <span class="text-color-dark mb-3"><i class="fas fa-tag text-color-primary"></i> brands</span>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>
                            </div>
                        </article>
                    </div>

                    <div class="appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                        <article class="card rounded bg-light border-0 p-0">
                            <a href="portfolio-detail-1.html"><img src="{{asset('app/img/projects/generic/project-8-wide.jpg')}}" class="card-img-top hover-effect-2" alt=""></a>
                            <div class="card-body">
                                <h3 class="font-weight-bold text-4 mb-1"><a href="portfolio-detail-1.html" class="link-color-dark">Shirt Box</a></h3>
                                <span class="text-color-dark mb-3"><i class="fas fa-tag text-color-primary"></i> ads</span>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>
                            </div>
                        </article>
                    </div>

                    <div class="appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="400">
                        <article class="card rounded bg-light border-0 p-0">
                            <a href="portfolio-detail-1.html"><img src="{{asset('app/img/projects/photos/project-7-wide.jpg')}}" class="card-img-top hover-effect-2" alt=""></a>
                            <div class="card-body">
                                <h3 class="font-weight-bold text-4 mb-1"><a href="portfolio-detail-1.html" class="link-color-dark">Montaing Woman</a></h3>
                                <span class="text-color-dark mb-3"><i class="fas fa-tag text-color-primary"></i> web</span>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row mt-4">
            <div class="col d-flex justify-content-center">
                <a href="portfolio-grid-4-columns.html" class="btn btn-primary btn-rounded btn-h-5 btn-v-3 font-weight-semibold">VIEW ALL</a>	
            </div>
        </div>
    </div>
</section>
<div class="section parallax" data-plugin-parallax data-plugin-options="{'speed': 1.5, 'parallaxHeight': '180%'}" data-image-src="{{asset('app/img/parallax/parallax-5.jpg')}}" data-appear-animation="fadeIn" data-appear-animation-duration="1s">
    <div class="container">
        <div class="row appear-animation" data-appear-animation="fadeInRightShorter">
            
            <div class="owl-carousel owl-theme dots-style-3 nav-style-3 mb-0" data-plugin-options="{'items': 1, 'dots': true, 'nav': false, 'navtext': []}">
                <div>
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-9 text-center">
                            <div class="testimonial testimonial-style-1">
                                <blockquote>
                                    <p class="text-light">" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna purus, aliquet vitae nisi ac, aliquet consectetur est. Suspendisse mattis eu urna eget sodales. "</p>
                                </blockquote>
                                <div class="testimonial-author mb-4">
                                    <span>
                                        <span class="text-light">- John Doe. Okler Themes</span>
                                    </span>
                                </div>
                            </div>		
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-9 text-center">
                            <div class="testimonial testimonial-style-1">
                                <blockquote>
                                    <p class="text-light">" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna purus, aliquet vitae nisi ac, aliquet consectetur est. Suspendisse mattis eu urna eget sodales. "</p>
                                </blockquote>
                                <div class="testimonial-author mb-4">
                                    <span>
                                        <span class="text-light">- Bob Doe. EZY Theme</span>
                                    </span>
                                </div>
                            </div>		
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-9 text-center">
                            <div class="testimonial testimonial-style-1">
                                <blockquote>
                                    <p class="text-light">" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna purus, aliquet vitae nisi ac, aliquet consectetur est. Suspendisse mattis eu urna eget sodales. "</p>
                                </blockquote>
                                <div class="testimonial-author mb-4">
                                    <span>
                                        <span class="text-light">Monica Doe. Themes Inc</span>
                                    </span>
                                </div>
                            </div>		
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 d-lg-flex flex-lg-column justify-content-lg-center px-4 mb-5 mb-lg-0 order-lg-2">
                <div class="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="400" data-appear-animation-duration="700ms">
                    <span class="top-sub-title text-color-primary d-block text-center">LOREM IPSUM DOLOR SIT</span>
                    <h2 class="font-weight-bold text-center mb-4">Our Blog</h2>
                </div>
                <div class="text-center appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="600" data-appear-animation-duration="700ms">
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#" class="badge badge-dark badge-md badge-pill mb-2">DESIGN</a></li>
                        <li class="list-inline-item"><a href="#" class="badge badge-dark badge-md badge-pill mb-2">NEWS</a></li>
                        <li class="list-inline-item"><a href="#" class="badge badge-dark badge-md badge-pill mb-2">INNOVATION</a></li>
                        <li class="list-inline-item"><a href="#" class="badge badge-dark badge-md badge-pill mb-2">JOBS</a></li>
                        <li class="list-inline-item"><a href="#" class="badge badge-dark badge-md badge-pill mb-2">PHOTOS</a></li>
                    </ul>
                    <a href="#" class="btn btn-dots btn-dark btn-outline btn-rounded">...</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4 mb-md-0 order-lg-1">
                <article class="blog-post">
                    <header class="mb-2">
                        <div class="image-frame hover-effect-2">
                            <a href="blog-single-post.html" class="d-block appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-duration="700ms">
                                <img src="{{asset('app/img/blog/generic/blog-1.jpg')}}" class="img-fluid mb-3" alt="" />
                            </a>
                        </div>
                        <div class="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500" data-appear-animation-duration="700ms">
                            <h3 class="font-weight-bold text-4 mb-1"><a href="blog-single-post.html" class="link-color-dark">Amazing things are coming</a></h3>
                            <i class="far fa-clock pt-1"></i>
                            <time class="font-tertiary text-1" datetime="2018-01-17">Jan 17, 2018</time>
                        </div>
                    </header>
                    <p class="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="600" data-appear-animation-duration="700ms">Phasellus blandit massa enim. Nullam id varius nunc. Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                </article>
            </div>
            <div class="col-md-6 col-lg-4 order-lg-3">
                <article class="blog-post">
                    <header class="mb-2">
                        <div class="image-frame hover-effect-2">
                            <a href="blog-single-post.html" class="d-block appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200" data-appear-animation-duration="700ms">
                                <img src="{{asset('app/img/blog/generic/blog-2.jpg')}}" class="img-fluid mb-3" alt="" />
                            </a>
                        </div>
                        <div class="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="300" data-appear-animation-duration="700ms">
                            <h3 class="font-weight-bold text-4 mb-1"><a href="blog-single-post.html" class="link-color-dark">Benefits of Home Office</a></h3>
                            <i class="far fa-clock pt-1"></i>
                            <time class="font-tertiary text-1" datetime="2018-01-17">Jan 17, 2018</time>
                        </div>
                    </header>
                    <p class="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="800" data-appear-animation-duration="700ms">Phasellus blandit massa enim. Nullam id varius nunc. Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                </article>
            </div>
        </div>
    </div>
</section>
<section class="parallax section section-height-4 call-to-action overlay overlay-color-primary overlay-show overlay-op-8 call-to-action-text-light call-to-action-text-background" data-plugin-parallax data-plugin-options="{'speed': 1.5}" data-image-src="{{asset('app/img/parallax/parallax-1.jpg')}}">
    <span class="text-background font-primary font-weight-bold appear-animation" data-appear-animation="textBgFadeInUp" data-appear-animation-delay="800">IT'S EASY</span>
    <div class="container">
        <div class="row">
            <div class="col-md-9 col-lg-9">
                <div class="call-to-action-content text-center text-md-left appear-animation" data-appear-animation="fadeInLeftShorter">
                    <h2 class="font-weight-semibold">Discover Vschem. It's easier than you think.</h2>
                    <p class="font-weight-light mb-0">Start right now to create an amazing website.</p>
                </div>
            </div>
            <div class="col-md-3 col-lg-3">
                <div class="call-to-action-btn appear-animation" data-appear-animation="fadeInRightShorter">
                    
                </div>
            </div>
        </div>
    </div>
</section>
@stop