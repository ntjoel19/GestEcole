<%@ page language="java" contentType="text/html; charset=utf8"
    pageEncoding="utf8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="Ntepp" content="">

        <title>Gestion des Notes</title>

        <!-- Bootstrap Core CSS -->
        <link href="./bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Font Awesome CSS -->
        <link href="./css/font-awesome.min.css" rel="stylesheet">
		

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

       <style type="text/css">
	      .btn-home{
			  box-shadow: 8px 8px 12px #aaa;
			  border-radius : 1000px;
			  transition:background 1000ms,color 1000ms,border-color 500ms;
	      }
	      div.bg-primary{
			  border-radius : 0px 0px 5px 5px;
			  color:white;
	      }
	      .btn-home:hover{
			  background: #497d94;
	      }
	      .option_lecon{
	      	background : #fff;
	      }
	      
	      div ul li{
	      	width : 100%;
	      }
	      
	      span[style='display:block;']{
	      	background: #dbdbdb url(../ressources/main.png) repeat-x scroll 0 0;  
			background: -webkit-gradient(linear,left bottom,left top,color-stop(0, #d4d4d4),color-stop(1, #e6e6e6));
			background: -webkit-linear-gradient(center bottom , #d4d4d4 0%, #e6e6e6 100%) repeat scroll 0 0 #dbdbdb;  
			background: -moz-linear-gradient(center bottom , #d4d4d4 0%, #e6e6e6 100%) repeat scroll 0 0 #dbdbdb;
	      }
    </style>
</head>
<body>
	 <!-- Start Logo Section -->
        <section id="logo-section" class="text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="logo text-center">
                            <h1>Gestion des Notes</h1>
                            <span>Année scolaire : </span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="logo text-center">
                            <a href='/GestEcole/home' class='btn btn-info'><i class='fa fa-home'></i> Accueil</a>
                            <a href='/GestEcole/connexion' class='btn btn-info'><i class='fa fa-power-off'></i> deconnexion</a>
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
                	
                	<div class="col-sm-5 col-md-2 col-lg-2 affix-sidebar">
						<div class="sidebar-nav">
						  <div class="navbar navbar-default" role="navigation">
						    <div class="navbar-header">
						      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
							      <span class="sr-only">Toggle navigation</span>
							      <span class="icon-bar"></span>
							      <span class="icon-bar"></span>
							      <span class="icon-bar"></span>
						      </button>
						      <span class="visible-xs navbar-brand">Sidebar menu</span>
						    </div>
						    <div class="navbar-collapse collapse sidebar-navbar-collapse">
						      <ul class="nav navbar-nav" id="sidenav01">
						        <li class="active">
						          <a href="#"  data-toggle="collapse" data-target="#toggleDemo0" data-parent="#sidenav01" class="collapsed">
							          <h4>
							          		Opérations
							          </h4>
						          </a>
						        </li>
						        <li>
						            <a href="#" class='btn btn-default' data-toggle="collapse" data-target="#toggleDemo2" data-parent="#sidenav01">
						          		<i class='fa fa-plus-circle'></i> Ajouter
						            </a>
						        </li>
						        <li>
						            <a href="#" class='btn btn-default btn-block collapsed' data-toggle="collapse" data-target="#toggleDemo2" data-parent="#sidenav01">
						          		<i class='fa fa-recycle'></i> Supprimer
						            </a>
						        </li>
						        <li>
						        	<a href="#" class='btn btn-default btn-block collapsed' data-toggle="collapse" data-target="#toggleDemo2" data-parent="#sidenav01">
						        		<i class='fa fa-pencil-square-o'></i> Modifier 
						        	</a>
						        </li>
						        <li>
						        	<a href="#" class='btn btn-default btn-block collapsed' data-toggle="collapse" data-target="#toggleDemo2" data-parent="#sidenav01">
						        		<i class='fa fa-print'></i> Imprimer
						        	</a>
						        </li>

						      </ul>
						    </div><!--/.nav-collapse -->
					    </div>
					  </div>
					</div>
					
					<div class="col-sm-7 col-md-10 col-lg-10 option_lecon" id='c1' style='border:1px solid black; border-radius: 5px;margin-top : 5px;'>
							</br>
							<div class='bg-primary'>
					          	<form class="form-inline">
								  <div class="form-group">
								      <select class="form-control" id="sel1">
									    <option>--sequence--</option>
									    <option>1</option>
									  </select>
								  </div>
								  <div class="form-group">
								      <select class="form-control" id="sel2">
									    <option>--classe--</option>
									    <option>6eme</option>
									  </select>
								  </div>
								  <div class="form-group">
								      <select class="form-control" id="sel3">
									    <option>--Matiere--</option>
									    <option>Electricité</option>
									  </select>
								  </div>
								  <button type="submit" class="btn btn-info"><i class='fa fa-check-square-o'></i> Valider</button>
								</form>
					        </div>
					        </br>
					        <div class='row'>
								<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 mise-en-forme'>
					        		<div class="table-responsive">
									  <table class="table table-bordered">
									    <thead>
									      <tr>
									      	<th>
									      		<div class="checkbox">
												  <input type="checkbox" value="">
												</div>
									      	</th>
									        <th>#</th>
									        <th>Noms et Prenoms</th>
									        <th>note /20</th>
									        <th>note * coeft</th>
									        <th>Professeur</th>
									        <th>rang</th>
									      </tr>
									    </thead>
									    <tbody>
									      <tr>
									      	<td>
									      		<div class="checkbox">
												  <input type="checkbox" value="">
												</div>
									      	</td>
									        <td>1</td>
									        <td>Ntepp</td>
									        <td>12</td>
									        <td>48</td>
									        <td>NJAMPOU</td>
									        <td>2eme</td>
									      </tr>
									      <tr>
									      	<td>
									      		<div class="checkbox">
												  <input type="checkbox" value="">
												</div>
									      	</td>
									        <td>1</td>
									        <td>Ntepp</td>
									        <td>12</td>
									        <td>48</td>
									        <td>NJAMPOU</td>
									        <td>2eme</td>
									      </tr>
									    </tbody>
									  </table>
								   </div>
					        	</div>
					        </div>
					</div>
                	
                	
                </div>
            </div>
        </div>
        <!-- End Main Body Section -->
</body>
</html>