@extends('homepage')

@section('content')


<section class="section" style="margin-top:50px">
    <div class="container">
        <div class="row">

            <div class="col-md-6 col-lg-7 col-xl-8 pt-3 offset-md-1 offset-lg-2">
                <span class="top-sub-title">NEW USER</span>
                <h2 class="font-weight-bold text-4 mb-1">Don't have an account? Register Now!</h2>
                <p class="lead mb-4">Register student.</p>
                <form id="shopLoginRegister" action="#" method="post">
                    <div class="form-row">
                        <div class="form-group col-lg-6">
                            <label class="text-color-dark" for="name">NAME:</label>
                            <input type="text" value="" class="form-control bg-light-5 border-0 rounded" name="name" id="name" required>
                        </div>
                        <div class="form-group col-lg-6">
                            <label class="text-color-dark" for="email_address">EMAIL ADDRESS:</label>
                            <input type="email" value="" class="form-control bg-light-5 border-0 rounded" name="email" id="email_address" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-lg-6">
                            <label class="text-color-dark" for="fist_name">FIRST NAME:</label>
                            <input type="text" value="" class="form-control bg-light-5 border-0 rounded" name="fist_name" id="fist_name" required>
                        </div>
                        <div class="form-group col-lg-6">
                            <label class="text-color-dark" for="last_name">LAST NAME:</label>
                            <input type="email" value="" class="form-control bg-light-5 border-0 rounded" name="last_name" id="last_name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-lg-6">
                            <label class="text-color-dark" for="user_name">USERNAME:</label>
                            <input type="text" value="" class="form-control bg-light-5 border-0 rounded" name="username" id="user_name" required>
                        </div>
                        <div class="form-group col-lg-6">
                            <label class="text-color-dark" for="phone">PHONE:</label>
                            <input type="tel" value="" class="form-control bg-light-5 border-0 rounded" name="phone" id="phone" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-lg-12 col-md-12">
                            <label class="text-color-dark" for="user_name">Test Type:</label>
                            <select name="test_type" id="test_type" style="height:50px !important" class="form-control bg-light-5 border-0 rounded">
                                <option value="">Select option</option>
                                <option value="cet">CET</option>
                                <option value="jee">JEE</option>
                                <option value="neet">NEET</option>
                            </select> 
                        </div>
                    </div>
                    <div class="form-row mb-4">
                        <div class="form-group col-lg-6">
                            <label class="text-color-dark" for="password">PASSWORD:</label>
                            <input type="password" value="" class="form-control bg-light-5 border-0 rounded" name="password" id="password" required>
                        </div>
                        <div class="form-group col-lg-6">
                            <label class="text-color-dark" for="confirm_password">RE-ENTER PASSWORD:</label>
                            <input type="password" value="" class="form-control bg-light-5 border-0 rounded" name="password" id="confirm_password" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col text-right">
                            <button type="submit" class="btn btn-primary btn-rounded btn-v-3 btn-h-3 font-weight-bold">REGISTER NOW</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<section class="section bg-dark-4 py-5">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-2">
                <h2 class="text-color-light text-4">NEWSLETTER</h2>
            </div>
            <div class="col-md-4">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidun.</p>
            </div>
            <div class="col-md-6">
                
                <form class="newsletter-form" action="php/newsletter-subscribe.php" method="POST">
                    <div class="newsletter-form-success alert alert-success d-none">
                        <strong>Success!</strong> You've been added to our email list.
                    </div>
                    <div class="newsletter-form-error alert alert-danger d-none">
                        <strong>Error!</strong> There was an error to add your email.
                    </div>
                    
                    <div class="input-group bg-light rounded">
                        <input type="email" class="newsletter-email form-control border-0 rounded" placeholder="Enter Email address" aria-label="Enter Email address" required>
                        <span class="input-group-btn p-1">
                            <button class="btn btn-primary font-weight-semibold btn-h-2 rounded h-100" type="submit">SUBSCRIBE</button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
@stop