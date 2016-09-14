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

        <title>Gestion des eleves</title>

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
	      	margin-top : 10px;
	      	margin-bottom : 10px;
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
                            <h1>Gestion des élèves</h1>
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
						          		<button class='btn btn-default btn-block collapsed' data-toggle="modal" data-target="#myModal-add"><i class='fa fa-plus-circle'></i> Ajouter</button>
						        </li>
						        <li>
						          		<button disabled class='btn btn-default btn-block collapsed supprimer' data-toggle="modal" data-target="#myModal-del"><i class='fa fa-recycle'></i> Supprimer</button>
						        </li>
						        <li>
						        		<button disabled class='btn btn-default btn-block collapsed modifier' data-toggle="modal" data-target="#myModal-edit"><i class='fa fa-pencil-square-o'></i> Modifier</button>
						        </li>
						        <li>
						        		<button class='btn btn-default btn-block collapsed imprimer' data-toggle="modal" data-target="#myModal-print"><i class='fa fa-print'></i> Imprimer</button>
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
										    <option>--classe--</option>
										    <% 
												String liste_classes = (String)request.getAttribute("liste_classe"); 
												if(liste_classes == null)
													out.print("");
												else
													out.print(liste_classes);
											%>
										  </select>
								  </div>
								</form>
					        </div>
					        </br>
					        <div class='row'>
								<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 mise-en-forme'>
					        		<div class="table-responsive">
					        			<form class="form-inline" id="form_tab">
										  <table class="table table-bordered">
										    <thead>
										      <tr>
										      	<th>
													  <input id='checkall' type="checkbox" value="">
										      	</th>
										        <th>#</th>
										        <th>Matricule</th>
										        <th>Noms</th>
										        <th>Prénoms</th>
										        <th>Age</th>
										        <th>Sexe</th>
										        <th>Classe</th>
										        <th>num</th>
										      </tr>
										    </thead>
										    <tbody id='tbody'>
										      <% 
										      	String liste_elv = (String)request.getAttribute("liste_elv"); 
										      	if(liste_elv == null)
										      		out.print("");
										      	else
										      		out.print(liste_elv);
										      %>
										    </tbody>
										  </table>
										</form>
								   </div>
					        	</div>
					        </div>
					</div>
	
                </div>
            </div>
        </div>
        <!-- End Main Body Section -->
        
        <!-- Modal -->
		<div id="myModal-add" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <!-- Modal content-->
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal">&times;</button>
		        <h4 class="modal-title" id="myModalLabel">Ajouter un élève</h4>
		      </div>
		      <div class="modal-body">
		        	<form role="form" class="form-horizontal" action="/GestEcole/add_eleve" method="post">
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="noms">Noms</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="noms" name="noms" placeholder="Entrer le nom" required>
					    </div>
					  </div>
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="prenoms">Prenoms</label>
					    <div class="col-sm-10"> 
					      <input type="text" class="form-control" id="prenoms" name='prenoms' placeholder="Entrer le prenom" required>
					    </div>
					  </div>
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="datenais">Date Naissance</label>
					    <div class="col-sm-10"> 
					      <input type="date" class="form-control" name='date_nais' id="datenais" required>
					    </div>
					  </div>
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="matricule">Matricule</label>
					    <div class="col-sm-10"> 
					      <input type="text" class="form-control" name='matricule' id="matricule" required>
					    </div>
					  </div>
					  <div class="form-group">
					  	<label class="control-label col-sm-2" for="classe">Classe : </label>
					  	<div class="col-sm-10"> 
					      <select class="form-control" id="classe" name='classe'>
					      	<option value=""></option>
						    <% 
								liste_classes = (String)request.getAttribute("liste_classe"); 
								if(liste_classes == null)
									out.print("");
								else
									out.print(liste_classes);
							%>
						  </select>
					    </div>
					  </div>
					  <div class="form-group">
					  	<label class="control-label col-sm-2" for="option">Option : </label>
					  	<div class="col-sm-10"> 
					      <select class="form-control" id="option" name='option'>
						    <option value=''></option>
						  </select>
					    </div>
					  </div>
					  <div class="form-group"> 
					  	<label class="control-label col-sm-2" for="optradio">Sexe </label>
					    <label class="radio-inline"><input type="radio" name="sexe" value='m' checked="checked">M</label>
						<label class="radio-inline"><input type="radio" name="sexe" value='f'>F</label>
					  </div>
					  
					  <div class="form-group"> 
					    <div class="col-sm-offset-2 col-sm-10">
					      <button type="submit" class="btn btn-info"><i class='fa fa-floppy-o'></i> Enregistrer</button>
					    </div>
					  </div>
					</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
		      </div>
		    </div>
		
		  </div>
		</div>
		
		<!-- Modal -->
		<div id="myModal-edit" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel3" aria-hidden="true">
		  <div class="modal-dialog">
		    <!-- Modal content-->
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal">&times;</button>
		        <h4 class="modal-title" id="myModalLabel3">Modifier les informations d'un élève</h4>
		      </div>
		      <div class="modal-body">
		        	<form role="form" class="form-horizontal" action="/GestEcole/add_eleve" method="get">
		        		<input type="hidden" class="form-control" id="matricule_hidden" name="matricule_hidden" placeholder="Entrer le nom" required>
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="noms2">Noms</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="noms2" name="noms" placeholder="Entrer le nom" required>
					    </div>
					  </div>
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="prenoms2">Prenoms</label>
					    <div class="col-sm-10"> 
					      <input type='text' class='form-control' id='prenoms2' name='prenoms' placeholder='Entrer le prenom' required>
					    </div>
					  </div>
					  <div class='form-group'>
					    <label class='control-label col-sm-2' for='datenais2'>Date Naissance</label>
					    <div class='col-sm-10'> 
					      <input type='date' class='form-control' name='date_nais' id='datenais2' required>
					    </div>
					  </div>
					  <div class='form-group'>
					    <label class='control-label col-sm-2' for='matricule2'>Matricule</label>
					    <div class='col-sm-10'> 
					      <input type='text' class='form-control' name='matricule' id='matricule2' required>
					    </div>
					  </div>
					  <div class='form-group'>
					  	<label class='control-label col-sm-2' for='classe2'>Classe : </label>
					  	<div class='col-sm-10'> 
					      <select class="form-control" id="classe2" name='classe'>
					      	<option value=""></option>
						    <% 
								liste_classes = (String)request.getAttribute("liste_classe"); 
								if(liste_classes == null)
									out.print("");
								else
									out.print(liste_classes);
							%>
						  </select>
					    </div>
					  </div>
					  <div class="form-group">
					  	<label class="control-label col-sm-2" for="option2">Option : </label>
					  	<div class="col-sm-10"> 
					      <select class="form-control" id="option2" name='option2'>
						    <option value=''></option>
						  </select>
					    </div>
					  </div>
					  <div class="form-group"> 
					  	<label class="control-label col-sm-2" for="optradio">Sexe </label>
					    <label class="radio-inline"><input classe='sexe' type="radio" name="sexe" value='m'>M</label>
						<label class="radio-inline"><input classe='sexe' type="radio" name="sexe" value='f'>F</label>
					  </div>
					  
					  <div class="form-group"> 
					    <div class="col-sm-offset-2 col-sm-10">
					      <button type="submit" class="btn btn-info" value='sauvegarder'><i class='fa fa-floppy-o'></i> Sauvegarder</button>
					    </div>
					  </div>
					</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
		      </div>
		    </div>
		
		  </div>
		</div>
		
		<!-- Modal -->
		<div id="myModal-print" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel4" aria-hidden="true">
		  <div class="modal-dialog">
		    <!-- Modal content-->
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal">&times;</button>
		        <h4 class="modal-title" id="myModalLabel4"><i class='fa fa-print'></i>Impression</h4>
		      </div>
		      <div class="modal-body">
		        	<form role="form" class="form-horizontal" action="/GestEcole/add_eleve" method="get">
					  
					</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
		      </div>
		    </div>
		
		  </div>
		</div>
		
		<div id="myModal-del" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
		  <div class="modal-dialog">
		    <!-- Modal content-->
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal">&times;</button>
		        <h4 class="modal-title" id="myModalLabel2"><i class='fa fa-warning'></i> ATTENTION</h4>
		      </div>
		      <div class="modal-body">
		      	Vous êtes sur le point de supprimer. <br>Etes-vous sûre?
		      </div>  	
		      <div class="modal-footer">
		      	<button type="button" class="btn btn-info" data-dismiss="modal" id='valider_suppr_eleve'>Oui</button>
		        <button type="button" id='annuler' class="btn btn-default" data-dismiss="modal">Annuler</button>
		      </div>
		    </div>
		
		  </div>
		</div>
</body>

<script type="text/javascript">
		$(document).on('ready',function(){
			var nb_case_cochee=0;
			$("#classe").on('change',function(e){
				e.preventDefault();
				var donnees="";
				
				donnees="param="+$("#classe option:selected").text();
				donnees+="&btn=maj_option_classe";
				//donnees+="&intitule="+$("#choix_intitule").val();
				//$("#tbody").replaceWith("<tbody id='tbody'><tr><td colspan='12' align='center'><img src='././ressources/loading-circle.gif'/></td></tr></tbody");
				
				$.ajax({
					url : '/GestEcole/requeteAjax',
					type : 'GET',
					data : donnees,
					dataType : 'html',
					success : function(data, result, jqXHR){
						//var datas=data.split("--");
						$("#option").replaceWith("<select class='form-control' id='option' name='option'>"+data+"</select>");
						
					}
				});
			});
			
			$("#classe2").on('change',function(e){
				e.preventDefault();
				var donnees="";
				
				donnees="param="+$("#classe2 option:selected").text();
				donnees+="&btn=maj_option_classe";
				//donnees+="&intitule="+$("#choix_intitule").val();
				//$("#tbody").replaceWith("<tbody id='tbody'><tr><td colspan='12' align='center'><img src='././ressources/loading-circle.gif'/></td></tr></tbody");
				
				$.ajax({
					url : '/GestEcole/requeteAjax',
					type : 'GET',
					data : donnees,
					dataType : 'html',
					success : function(data, result, jqXHR){
						//var datas=data.split("--");
						$("#option2").replaceWith("<select class='form-control' id='option2' name='option2'>"+data+"</select>");
						
					}
				});
			});
			
			$(".modifier").on('click',function(e){
				e.preventDefault();
				var donnees="param=";
				
				$(".checkbox input").each(function() {
		  	    	if(($(this).is(':checked'))===true){
		  	    		donnees+=$(this).attr("id");
		  	    	}
				});
				
				donnees+="&btn=modifier_eleve";
				
				$.ajax({
					url : '/GestEcole/requeteAjax',
					type : 'GET',
					data : donnees,
					dataType : 'html',
					success : function(data, result, jqXHR){
						var datas=data.split("--");
						//nom_elv+"--"+pren_elv+"--"+date_nais+"--"+matr+"--"+classe+"--"+option+"--"+num_classe+"--"+sexe
						$("#matricule_hidden").replaceWith("<input type='hidden' class='form-control' name='matricule_hidden' id='matricule_hidden' value='"+datas[3]+"' required>");
						$("#noms2").replaceWith("<input type='text' class='form-control' id='noms' name='noms' placeholder='Entrer le nom' value='"+datas[0]+"' required>");
						$("#prenoms2").replaceWith("<input type='text' class='form-control' id='prenoms2' name='prenoms' placeholder='Entrer le prenom' value='"+datas[1]+"' required>");
						$("#datenais2").replaceWith("<input type='date' class='form-control' name='date_nais' id='datenais2' value='"+datas[2]+"' required>");
						$("#matricule2").replaceWith("<input type='text' class='form-control' name='matricule' id='matricule2' value='"+datas[3]+"' required>");
						$("#classe2 option[value='"+datas[4]+"-"+datas[6]+"']").attr('selected','selected');
						$("#option2 option").replaceWith("<option value='"+datas[5]+"' selected>"+datas[5]+"</option>");
						$("input[value='"+datas[7]+"']").attr('checked','checked');
					}
				});
			});
			
			$("#sel1").on('change',function(e){
				e.preventDefault();
				var donnees="";
	
				donnees="param="+$("#sel1 option:selected").text();
				donnees+="&btn=filtrer_eleves";
				//donnees+="&intitule="+$("#choix_intitule").val();
				//$("#tbody").replaceWith("<tbody id='tbody'><tr><td colspan='12' align='center'><img src='././ressources/loading-circle.gif'/></td></tr></tbody");
				
				$.ajax({
					url : '/GestEcole/requeteAjax',
					type : 'GET',
					data : donnees,
					dataType : 'html',
					success : function(data, result, jqXHR){
						//var datas=data.split("??");
						$("#tbody").replaceWith("<tbody id='tbody'>"+data+"</tbody>");	
					}
				});
			});
			
			$("#checkall").on('click',function(e){
				//alert(($(this).is(':checked')));
				//identifiant = $(this).attr("id");
				if(($(this).is(':checked'))===true){
					$(".checkbox input").attr("checked","checked");
					$(".supprimer").removeAttr("disabled");
				}else{
					nb_case_cochee=0;
					$(".checkbox input").removeAttr("checked");
					$(".supprimer").attr("disabled","disabled");
				}
				
			});
			
			$("#valider_suppr_eleve").on('click',function(e){
				var donnees="matricule=";
				var i=0;
				
				$(".checkbox input").each(function(i) {
			  	    	if(($(this).is(':checked'))===true){
			  	    		nb_case_cochee++;
			  	    		donnees+=$(this).attr("id")+"--";
			  	    	}
				});
				
				donnees+="rien&btn=suppr_eleve";
				
				//donnees+="&intitule="+$("#choix_intitule").val();
				//$("#tbody").replaceWith("<tbody id='tbody'><tr><td colspan='12' align='center'><img src='././ressources/loading-circle.gif'/></td></tr></tbody");
				
				$.ajax({
					url : '/GestEcole/requeteAjax',
					type : 'GET',
					data : donnees,
					dataType : 'html',
					success : function(data, result, jqXHR){
						//var datas=data.split("??");
						$("#tbody").replaceWith("<tbody id='tbody'>"+data+"</tbody>");	
					}
				});
				nb_case_cochee=0;
				$(".modifier,.supprimer").attr("disabled","disabled");
			});
			
			
			$(".checkbox input").on('click',function(e){
				//alert(($(this).is(':checked')));
				//identifiant = $(this).attr("id");
				$(".checkbox input").each(function() {
		  	    	if(($(this).is(':checked'))===true){
			  	    	nb_case_cochee++;
			  	    	//donnees+=$(this).attr("id")+"--";
			  	    }
				});
				//alert(nb_case_cochee);
				if(($(this).is(':checked'))===true){
					if(nb_case_cochee==1){
						$(".modifier,.supprimer").removeAttr("disabled");
					}else{
						$(".supprimer").removeAttr("disabled");
						$(".modifier").attr("disabled","disabled");
					}
				}else{
					$(".modifier,.supprimer").attr("disabled","disabled");
				}
			});
			
			$("#annuler").on('click',function(e){
				$(".checkbox input").removeAttr("checked");
				$(".supprimer,.modifier").removeAttr("disabled");
			});
		});
</script>
</html>