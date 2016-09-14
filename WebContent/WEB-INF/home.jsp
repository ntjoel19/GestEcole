<%@ page language="java" contentType="text/html; charset=utf8"
    pageEncoding="utf8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Les pyramides</title>

        <!-- Bootstrap Core CSS -->
        <link href="./bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Font Awesome CSS -->
        <link href="./css/font-awesome.min.css" rel="stylesheet">
		
		<!-- Custom CSS -->
        <link href="./css/animate.css" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="./css/style.css" rel="stylesheet">

        <!-- Custom Fonts -->
        <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>


        <!-- Template js -->
        <script src="./js/jquery-2.1.1.min.js"></script>
        <script src="./bootstrap/js/bootstrap.min.js"></script>
        <script src="./js/jquery.appear.js"></script>
        <script src="./js/contact_me.js"></script>
        <script src="./js/jqBootstrapValidation.js"></script>
        <script src="./js/modernizr.custom.js"></script>
        <script src="./js/script.js"></script>

        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

    </head>
    
    <body>
        
        <!-- Start Logo Section -->
        <section id="logo-section" class="text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="logo text-center">
                            <h1>Les Pyramides</h1>
                            <span>Gestion des élèves</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Logo Section -->
        
        
        <!-- Start Main Body Section -->
        <div class="mainbody-section text-center">
            <div class="container">
                <div class="row">
                    
                    <div class="col-md-3">
                        
                        <div class="menu-item blue">
                            <a href="/GestEcole/eleves" data-toggle="modal">
                                <i class="fa fa-child"></i>
                                <p>Elèves</p>
                            </a>
                        </div>
                        
                        <div class="menu-item green">
                            <a href="/GestEcole/matieres" data-toggle="modal">
                                <i class="fa fa-book"></i>
                                <p>Matières</p>
                            </a>
                        </div>
                        
                        <div class="menu-item color responsive">
                            <a href="/GestEcole/notes" data-toggle="modal">
                                <i class="fa fa-sort-numeric-desc"></i>
                                <p>Notes</p>
                            </a>
                        </div> 
                        
                    </div>
                    
                    <div class="col-md-6">
                        
                        <!-- Start Carousel Section -->
                        <div class="home-slider">
                            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" style="padding-bottom: 30px;">
                                <!-- Indicators -->
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                </ol>

                                <!-- Wrapper for slides -->
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <img src="images/about-03.jpg" class="img-responsive" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="images/about-02.jpg" class="img-responsive" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="images/about-01.jpg" class="img-responsive" alt="">
                                    </div>

                                </div>

                            </div>
                        </div>
                        <!-- Start Carousel Section -->
                        
                        <div class="row">
                            <div class="col-md-6">
                                <div class="menu-item light-red">
		                            <a href="#testimonial-modal" data-toggle="modal">
		                                <i class="fa fa-comment-o"></i>
		                                <p>Comptes</p>
		                            </a>
		                        </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="menu-item light-orange responsive-2">
                                    <a href="#team-modal" data-toggle="modal">
                                        <i class="fa fa-cogs"></i>
                                        <p>Parametres</p>
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    <div class="col-md-3">
                        <div class="menu-item light-red">
                            <a href="/GestEcole/enseignants" data-toggle="modal">
                                <i class="fa fa-users"></i>
                                <p>Enseignants</p>
                            </a>
                        </div>
                        
                        <div class="menu-item color">
                            <a href="/GestEcole/classes" data-toggle="modal">
                                <i class="fa fa-comment-o"></i>
                                <p>Classes</p>
                            </a>
                        </div> 
                        
                        <div class="menu-item blue responsive">
                            <a hhref="/GestEcole/bulletins" data-toggle="modal">
                                <i class="fa fa-graduation-cap"></i>
                                <p>Bulletins</p>
                            </a>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <!-- End Main Body Section -->
        
        <!-- Start Copyright Section -->
        <div class="copyright text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div>LYCEE TECHNIQUE DE NTUI - copyright © 2016<a href="https://www.lytent.cm" target="_blank">site web</a></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Copyright Section -->
        
    </body>
    
</html>