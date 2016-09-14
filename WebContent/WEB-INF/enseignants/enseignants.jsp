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

        <title>Gestion des enseignants</title>

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
	      
	      .table-fixed thead {
			  width: 97%;
			}
			.table-fixed tbody {
			  height: 230px;
			  overflow-y: auto;
			  width: 100%;
			}
			.table-fixed thead, .table-fixed tbody, .table-fixed tr, .table-fixed td, .table-fixed th {
			  display: block;
			}
			.table-fixed tbody td, .table-fixed thead > tr> th {
			  float: left;
			  border-bottom-width: 0;
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
                            <h1>Gestion des enseignants</h1>
                            <span>Année scolaire</span>
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
						      <span class="visible-xs navbar-brand">Opérations (menu)</span>
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
									    <option>6eme</option>
									  </select>
								  </div>
								  <div class="form-group">
								      <select class="form-control" id="sel2">
									    <option>--matieres--</option>
									    <option>08V0658</option>
									  </select>
								  </div>
								  <div class="form-group">
								      <select class="form-control" id="sel3">
									    <option>--nom--</option>
									    <option>Ntepp</option>
									  </select>
								  </div>
								  
								  <button type="submit" class="btn btn-info"><i class='fa fa-search'></i> Rechercher</button>
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
									        <th>Noms</th>
									        <th>Prénoms</th>
									        <th>Adresse</th>
									        <th>Tel</th>
									        <th>Specialites</th>
									      </tr>
									    </thead>
									    <tbody id='tbody'>
									      <% 
										      	String liste_prof = (String)request.getAttribute("liste_prof"); 
										      	if(liste_prof == null)
										      		out.print("");
										      	else
										      		out.print(liste_prof);
										   %>
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
        
        <!-- Modal -->
		<div id="myModal-add" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <!-- Modal content-->
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal">&times;</button>
		        <h4 class="modal-title" id="myModalLabel">Ajouter un enseignant</h4>
		      </div>
		      <div class="modal-body">
		        	<form role="form" class="form-horizontal" action="/GestEcole/add_prof" method="post">
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
					    <label class="control-label col-sm-2" for="tel">telephone</label>
					    <div class="col-sm-10"> 
					      <input type="number" class="form-control" name='tel' id="tel" required>
					    </div>
					  </div>
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="adresse">Adresse</label>
					    <div class="col-sm-10"> 
					      <input type="text" class="form-control" placeholder="Entrer l'adresse" name='adresse' id="adresse" required>
					    </div>
					  </div>
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="specialites">Specialites</label>
					    <div class="col-sm-10"> 
					      <input type="text" class="form-control" placeholder="Entrer les spécialités" name='specialites' id="specialites" required>
					    </div>
					  </div>
		      </div>
		      <div class="modal-footer" data-spy="scroll" data-target=".navbar" data-offset="10">
					      <div class="panel panel-default table-responsive">
					        <div class="panel-heading">
					          <h4>
					            Fixed Header Scrolling Table 
					          </h4>
					        </div>
					        <table class="table table-fixed table-bordered">
					          <thead>
					            <tr>
					              <th class="col-xs-7">Classes</th><th class="col-xs-5">Matiere</th>
					            </tr>
					          </thead>
					          <tbody>
					            <tr>
					              <td class="col-xs-7">1</td><td class="col-xs-5">23</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">2</td><td class="col-xs-5">44</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">3</td><td class="col-xs-5">86</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">4</td><td class="col-xs-5">23</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">5</td><td class="col-xs-5">44</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">6</td><td class="col-xs-5">26</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">7</td><td class="col-xs-5">56</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">8</td><td class="col-xs-5">96</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">9</td><td class="col-xs-5">13</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">10</td><td class="col-xs-5">16</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">11</td><td class="col-xs-5">44</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">12</td><td class="col-xs-5">6</td>
					            </tr>
					          </tbody>
					        </table>
					      </div>
		      </div>
		      <div class="modal-footer">
			      <div class="form-group"> 
					<button type="submit" class="btn btn-info"><i class='fa fa-floppy-o'></i> Enregistrer</button>
			        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
			      </div>
			     </form>
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
		        <h4 class="modal-title" id="myModalLabel3">Modifier les informations d'un Enseignant</h4>
		      </div>
		      <div class="modal-body">
		        	<form role="form" class="form-horizontal" action="/GestEcole/add_prof" method="post">
		        	  <input type="hidden" class="form-control" id="hidden2" name="hidden2" placeholder="Entrer le nom" required>
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="noms2">Noms</label>
					    <div class="col-sm-10">
					      <input type="text" class="form-control" id="noms2" name="noms2" placeholder="Entrer le nom" required>
					    </div>
					  </div>
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="prenoms2">Prenoms</label>
					    <div class="col-sm-10"> 
					      <input type="text" class="form-control" id="prenoms2" name='prenoms2' placeholder="Entrer le prenom" required>
					    </div>
					  </div>
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="tel2">telephone</label>
					    <div class="col-sm-10"> 
					      <input type="number" class="form-control" name='tel2' id="tel2" placeholder='Numero de telephone' required>
					    </div>
					  </div>
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="adresse2">Adresse</label>
					    <div class="col-sm-10"> 
					      <input type="text" class="form-control" placeholder="Entrer l'adresse" name='adresse2' id="adresse2" required>
					    </div>
					  </div>
					  <div class="form-group">
					    <label class="control-label col-sm-2" for="specialites2">Specialites</label>
					    <div class="col-sm-10"> 
					      <input type="text" class="form-control" placeholder="Entrer les spécialités" name='specialites2' id="specialites2" required>
					    </div>
					  </div>
					
		      </div>
		      <div class="modal-footer" data-spy="scroll" data-target=".navbar" data-offset="10">
					      <div class="panel panel-default table-responsive">
					        <div class="panel-heading">
					          <h4>
					            Fixed Header Scrolling Table 
					          </h4>
					        </div>
					        <table class="table table-fixed table-bordered">
					          <thead>
					            <tr>
					              <th class="col-xs-7">Classes</th><th class="col-xs-5">Matiere</th>
					            </tr>
					          </thead>
					          <tbody>
					            <tr>
					              <td class="col-xs-7">1</td><td class="col-xs-5">23</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">2</td><td class="col-xs-5">44</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">3</td><td class="col-xs-5">86</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">4</td><td class="col-xs-5">23</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">5</td><td class="col-xs-5">44</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">6</td><td class="col-xs-5">26</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">7</td><td class="col-xs-5">56</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">8</td><td class="col-xs-5">96</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">9</td><td class="col-xs-5">13</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">10</td><td class="col-xs-5">16</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">11</td><td class="col-xs-5">44</td>
					            </tr>
					            <tr>
					              <td class="col-xs-7">12</td><td class="col-xs-5">6</td>
					            </tr>
					          </tbody>
					        </table>
					      </div>
		      </div>
		      <div class="modal-footer">
		      	<div class="col-sm-offset-2 col-sm-10">
					<button type="submit" class="btn btn-info"><i class='fa fa-floppy-o'></i> Sauvegarder</button>
		        	<button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
		         </div>
		      </div>
		    </div>
			</form>
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
					url : '/GestEcole/requeteAjaxProf',
					type : 'GET',
					data : donnees,
					dataType : 'html',
					success : function(data, result, jqXHR){
						//var datas=data.split("--");
						$("#option").replaceWith("<select class='form-control' id='option' name='option'>"+data+"</select>");	
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
				
				donnees+="&btn=modifier_enseignant";
				alert(donnees);
				$.ajax({
					url : '/GestEcole/requeteAjaxProf',
					type : 'GET',
					data : donnees,
					dataType : 'html',
					success : function(data, result, jqXHR){
						var datas=data.split("--");
						//nom+"--"+prenom+"--"+adresse+"--"+tel+"--"+specialite
						$("#hidden2").replaceWith("<input type='hidden' class='form-control' name='hidden2' id='hidden2' value='"+datas[3]+"' required>");
						$("#noms2").replaceWith("<input type='text' class='form-control' id='noms2' name='noms2' placeholder='Entrer le nom' value='"+datas[0]+"' required>");
						$("#prenoms2").replaceWith("<input type='text' class='form-control' id='prenoms2' name='prenoms' placeholder='Entrer le prenom' value='"+datas[1]+"' required>");
						$("#adresse2").replaceWith("<input type='text' class='form-control' name='adresse2' id='adresse2' value='"+datas[2]+"' required>");
						$("#tel2").replaceWith("<input type='number' class='form-control' name='tel2' id='tel2' value='"+datas[3]+"' required>");
						$("#specialite2").replaceWith("<input type='text' class='form-control' name='specialite2' id='specialite2' value='"+datas[4]+"' required>");
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
					url : '/GestEcole/requeteAjaxProf',
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
				var donnees="tel=";
				var i=0;
				
				$(".checkbox input").each(function(i) {
			  	    	if(($(this).is(':checked'))===true){
			  	    		nb_case_cochee++;
			  	    		donnees+=$(this).attr("id")+"--";
			  	    	}
				});
				
				donnees+="rien&btn=suppr_enseignant";
				
				//donnees+="&intitule="+$("#choix_intitule").val();
				//$("#tbody").replaceWith("<tbody id='tbody'><tr><td colspan='12' align='center'><img src='././ressources/loading-circle.gif'/></td></tr></tbody");
				
				$.ajax({
					url : '/GestEcole/requeteAjaxProf',
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