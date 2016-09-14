jQuery(document).ready(function() {
	var compteur_operation = 0;
	var tb_groupe_sanguin = ["A","B","AB","O"];
	var tb_caryotype = ["masc_normal","fem_normal","masc_trisomi_21","masc_fem_kleinfelter"];
	var caryo_garcon_sein = ["<img id='chr1' title='1' src='././bootstrap/img/experience/caryo_garcon_sein/1.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr1p' title='1' src='././bootstrap/img/experience/caryo_garcon_sein/1p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr2' title='2' src='././bootstrap/img/experience/caryo_garcon_sein/2.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr2p' title='2' src='././bootstrap/img/experience/caryo_garcon_sein/2p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr3' title='3' src='././bootstrap/img/experience/caryo_garcon_sein/3.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr3p' title='3' src='././bootstrap/img/experience/caryo_garcon_sein/3p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr4' title='4' src='././bootstrap/img/experience/caryo_garcon_sein/4.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr4p' title='4' src='././bootstrap/img/experience/caryo_garcon_sein/4p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr5' title='5' src='././bootstrap/img/experience/caryo_garcon_sein/5.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr5p' title='5' src='././bootstrap/img/experience/caryo_garcon_sein/5p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr6' title='6' src='././bootstrap/img/experience/caryo_garcon_sein/6.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr6p' title='6' src='././bootstrap/img/experience/caryo_garcon_sein/6p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr7' title='7' src='././bootstrap/img/experience/caryo_garcon_sein/7.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr7p' title='7' src='././bootstrap/img/experience/caryo_garcon_sein/7p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr8' title='8' src='././bootstrap/img/experience/caryo_garcon_sein/8.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr8p' title='8' src='././bootstrap/img/experience/caryo_garcon_sein/8p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr9' title='9' src='././bootstrap/img/experience/caryo_garcon_sein/9.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr9p' title='9' src='././bootstrap/img/experience/caryo_garcon_sein/9p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr10' title='10' src='././bootstrap/img/experience/caryo_garcon_sein/10.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr10p' title='10' src='././bootstrap/img/experience/caryo_garcon_sein/10p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr11' title='11' src='././bootstrap/img/experience/caryo_garcon_sein/11.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr11p' title='11' src='././bootstrap/img/experience/caryo_garcon_sein/11p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr12' title='12' src='././bootstrap/img/experience/caryo_garcon_sein/12.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr12p' title='12' src='././bootstrap/img/experience/caryo_garcon_sein/12p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr13' title='13' src='././bootstrap/img/experience/caryo_garcon_sein/13.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr13p' title='13' src='././bootstrap/img/experience/caryo_garcon_sein/13p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr14' title='14' src='././bootstrap/img/experience/caryo_garcon_sein/14.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr14p' title='14' src='././bootstrap/img/experience/caryo_garcon_sein/14p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr15' title='15' src='././bootstrap/img/experience/caryo_garcon_sein/15.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr15p' title='15' src='././bootstrap/img/experience/caryo_garcon_sein/15p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr16' title='16' src='././bootstrap/img/experience/caryo_garcon_sein/16.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr16p' title='16' src='././bootstrap/img/experience/caryo_garcon_sein/16p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr17' title='17' src='././bootstrap/img/experience/caryo_garcon_sein/17.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr17p' title='17' src='././bootstrap/img/experience/caryo_garcon_sein/17p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr18' title='18' src='././bootstrap/img/experience/caryo_garcon_sein/18.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr18p' title='18' src='././bootstrap/img/experience/caryo_garcon_sein/18p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr19' title='19' src='././bootstrap/img/experience/caryo_garcon_sein/19.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr19p' title='19' src='././bootstrap/img/experience/caryo_garcon_sein/19p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr20' title='20' src='././bootstrap/img/experience/caryo_garcon_sein/20.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr20p' title='20' src='././bootstrap/img/experience/caryo_garcon_sein/20p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr21' title='21' src='././bootstrap/img/experience/caryo_garcon_sein/21.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr21p' title='21' src='././bootstrap/img/experience/caryo_garcon_sein/21p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr22' title='22' src='././bootstrap/img/experience/caryo_garcon_sein/22.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr22p' title='22' src='././bootstrap/img/experience/caryo_garcon_sein/22p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chrx' title='x' src='././bootstrap/img/experience/caryo_garcon_sein/x.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chry' title='y' src='././bootstrap/img/experience/caryo_garcon_sein/y.png' draggable='true' ondragstart='drag(event)'>"
	                         ];
	var caryo_fille_seine = ["<img id='chr1' title='1' src='././bootstrap/img/experience/caryo_fille_seine/1.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr1p' title='1' src='././bootstrap/img/experience/caryo_fille_seine/1p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr2' title='2' src='././bootstrap/img/experience/caryo_fille_seine/2.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr2p' title='2' src='././bootstrap/img/experience/caryo_fille_seine/2p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr3' title='3' src='././bootstrap/img/experience/caryo_fille_seine/3.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr3p' title='3' src='././bootstrap/img/experience/caryo_fille_seine/3p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr4' title='4' src='././bootstrap/img/experience/caryo_fille_seine/4.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr4p' title='4' src='././bootstrap/img/experience/caryo_fille_seine/4p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr5' title='5' src='././bootstrap/img/experience/caryo_fille_seine/5.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr5p' title='5' src='././bootstrap/img/experience/caryo_fille_seine/5p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr6' title='6' src='././bootstrap/img/experience/caryo_fille_seine/6.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr6p' title='6' src='././bootstrap/img/experience/caryo_fille_seine/6p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr7' title='7' src='././bootstrap/img/experience/caryo_fille_seine/7.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr7p' title='7' src='././bootstrap/img/experience/caryo_fille_seine/7p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr8' title='8' src='././bootstrap/img/experience/caryo_fille_seine/8.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr8p' title='8' src='././bootstrap/img/experience/caryo_fille_seine/8p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr9' title='9' src='././bootstrap/img/experience/caryo_fille_seine/9.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr9p' title='9' src='././bootstrap/img/experience/caryo_fille_seine/9p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr10' title='10' src='././bootstrap/img/experience/caryo_fille_seine/10.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr10p' title='10' src='././bootstrap/img/experience/caryo_fille_seine/10p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr11' title='11' src='././bootstrap/img/experience/caryo_fille_seine/11.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr11p' title='11' src='././bootstrap/img/experience/caryo_fille_seine/11p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr12' title='12' src='././bootstrap/img/experience/caryo_fille_seine/12.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr12p' title='12' src='././bootstrap/img/experience/caryo_fille_seine/12p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr13' title='13' src='././bootstrap/img/experience/caryo_fille_seine/13.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr13p' title='13' src='././bootstrap/img/experience/caryo_fille_seine/13p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr14' title='14' src='././bootstrap/img/experience/caryo_fille_seine/14.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr14p' title='14' src='././bootstrap/img/experience/caryo_fille_seine/14p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr15' title='15' src='././bootstrap/img/experience/caryo_fille_seine/15.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr15p' title='15' src='././bootstrap/img/experience/caryo_fille_seine/15p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr16' title='16' src='././bootstrap/img/experience/caryo_fille_seine/16.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr16p' title='16' src='././bootstrap/img/experience/caryo_fille_seine/16p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr17' title='17' src='././bootstrap/img/experience/caryo_fille_seine/17.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr17p' title='17' src='././bootstrap/img/experience/caryo_fille_seine/17p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr18' title='18' src='././bootstrap/img/experience/caryo_fille_seine/18.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr18p' title='18' src='././bootstrap/img/experience/caryo_fille_seine/18p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr19' title='19' src='././bootstrap/img/experience/caryo_fille_seine/19.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr19p' title='19' src='././bootstrap/img/experience/caryo_fille_seine/19p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr20' title='20' src='././bootstrap/img/experience/caryo_fille_seine/20.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr20p' title='20' src='././bootstrap/img/experience/caryo_fille_seine/20p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr21' title='21' src='././bootstrap/img/experience/caryo_fille_seine/21.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr21p' title='21' src='././bootstrap/img/experience/caryo_fille_seine/21p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr22' title='22' src='././bootstrap/img/experience/caryo_fille_seine/22.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chr22p' title='22' src='././bootstrap/img/experience/caryo_fille_seine/22p.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chrx' title='x' src='././bootstrap/img/experience/caryo_fille_seine/x.png' draggable='true' ondragstart='drag(event)'>",
						    "<img id='chrxp' title='x' src='././bootstrap/img/experience/caryo_fille_seine/xp.png' draggable='true' ondragstart='drag(event)'>"
	                         ];
	var caryo_trisomie_21 = ["<img id='chr1' title='1' src='././bootstrap/img/experience/caryo_trisomie21/1.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr1p' title='1' src='././bootstrap/img/experience/caryo_trisomie21/1p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr2' title='2' src='././bootstrap/img/experience/caryo_trisomie21/2.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr2p' title='2' src='././bootstrap/img/experience/caryo_trisomie21/2p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr3' title='3' src='././bootstrap/img/experience/caryo_trisomie21/3.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr3p' title='3' src='././bootstrap/img/experience/caryo_trisomie21/3p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr4' title='4' src='././bootstrap/img/experience/caryo_trisomie21/4.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr4p' title='4' src='././bootstrap/img/experience/caryo_trisomie21/4p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr5' title='5' src='././bootstrap/img/experience/caryo_trisomie21/5.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr5p' title='5' src='././bootstrap/img/experience/caryo_trisomie21/5p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr6' title='6' src='././bootstrap/img/experience/caryo_trisomie21/6.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr6p' title='6' src='././bootstrap/img/experience/caryo_trisomie21/6p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr7' title='7' src='././bootstrap/img/experience/caryo_trisomie21/7.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr7p' title='7' src='././bootstrap/img/experience/caryo_trisomie21/7p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr8' title='8' src='././bootstrap/img/experience/caryo_trisomie21/8.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr8p' title='8' src='././bootstrap/img/experience/caryo_trisomie21/8p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr9' title='9' src='././bootstrap/img/experience/caryo_trisomie21/9.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr9p' title='9' src='././bootstrap/img/experience/caryo_trisomie21/9p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr10' title='10' src='././bootstrap/img/experience/caryo_trisomie21/10.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr10p' title='10' src='././bootstrap/img/experience/caryo_trisomie21/10p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr11' title='11' src='././bootstrap/img/experience/caryo_trisomie21/11.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr11p' title='11' src='././bootstrap/img/experience/caryo_trisomie21/11p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr12' title='12' src='././bootstrap/img/experience/caryo_trisomie21/12.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr12p' title='12' src='././bootstrap/img/experience/caryo_trisomie21/12p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr13' title='13' src='././bootstrap/img/experience/caryo_trisomie21/13.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr13p' title='13' src='././bootstrap/img/experience/caryo_trisomie21/13p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr14' title='14' src='././bootstrap/img/experience/caryo_trisomie21/14.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr14p' title='14' src='././bootstrap/img/experience/caryo_trisomie21/14p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr15' title='15' src='././bootstrap/img/experience/caryo_trisomie21/15.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr15p' title='15' src='././bootstrap/img/experience/caryo_trisomie21/15p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr16' title='16' src='././bootstrap/img/experience/caryo_trisomie21/16.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr16p' title='16' src='././bootstrap/img/experience/caryo_trisomie21/16p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr17' title='17' src='././bootstrap/img/experience/caryo_trisomie21/17.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr17p' title='17' src='././bootstrap/img/experience/caryo_trisomie21/17p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr18' title='18' src='././bootstrap/img/experience/caryo_trisomie21/18.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr18p' title='18' src='././bootstrap/img/experience/caryo_trisomie21/18p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr19' title='19' src='././bootstrap/img/experience/caryo_trisomie21/19.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr19p' title='19' src='././bootstrap/img/experience/caryo_trisomie21/19p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr20' title='20' src='././bootstrap/img/experience/caryo_trisomie21/20.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr20p' title='20' src='././bootstrap/img/experience/caryo_trisomie21/20p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr21' title='21' src='././bootstrap/img/experience/caryo_trisomie21/21.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr21p' title='21' src='././bootstrap/img/experience/caryo_trisomie21/21p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr21pp' title='21' src='././bootstrap/img/experience/caryo_trisomie21/21p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr22' title='22' src='././bootstrap/img/experience/caryo_trisomie21/22.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chr22p' title='22' src='././bootstrap/img/experience/caryo_trisomie21/22p.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chrx' title='x' src='././bootstrap/img/experience/caryo_trisomie21/x.png' draggable='true' ondragstart='drag(event)'>",
	                         "<img id='chrxp' title='y' src='././bootstrap/img/experience/caryo_trisomie21/xp.png' draggable='true' ondragstart='drag(event)'>"
	                    ];
	var caryo_kleinefelter = ["<img id='chr1' title='1' src='././bootstrap/img/experience/caryo_kleinefelter/1.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr1p' title='1' src='././bootstrap/img/experience/caryo_kleinefelter/1p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr2' title='2' src='././bootstrap/img/experience/caryo_kleinefelter/2.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr2p' title='2' src='././bootstrap/img/experience/caryo_kleinefelter/2p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr3' title='3' src='././bootstrap/img/experience/caryo_kleinefelter/3.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr3p' title='3' src='././bootstrap/img/experience/caryo_kleinefelter/3p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr4' title='4' src='././bootstrap/img/experience/caryo_kleinefelter/4.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr4p' title='4' src='././bootstrap/img/experience/caryo_kleinefelter/4p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr5' title='5' src='././bootstrap/img/experience/caryo_kleinefelter/5.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr5p' title='5' src='././bootstrap/img/experience/caryo_kleinefelter/5p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr6' title='6' src='././bootstrap/img/experience/caryo_kleinefelter/6.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr6p' title='6' src='././bootstrap/img/experience/caryo_kleinefelter/6p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr7' title='7' src='././bootstrap/img/experience/caryo_kleinefelter/7.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr7p' title='7' src='././bootstrap/img/experience/caryo_kleinefelter/7p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr8' title='8' src='././bootstrap/img/experience/caryo_kleinefelter/8.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr8p' title='8' src='././bootstrap/img/experience/caryo_kleinefelter/8p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr9' title='9' src='././bootstrap/img/experience/caryo_kleinefelter/9.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr9p' title='9' src='././bootstrap/img/experience/caryo_kleinefelter/9p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr10' title='10' src='././bootstrap/img/experience/caryo_kleinefelter/10.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr10p' title='10' src='././bootstrap/img/experience/caryo_kleinefelter/10p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr11' title='11' src='././bootstrap/img/experience/caryo_kleinefelter/11.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr11p' title='11' src='././bootstrap/img/experience/caryo_kleinefelter/11p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr12' title='12' src='././bootstrap/img/experience/caryo_kleinefelter/12.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr12p' title='12' src='././bootstrap/img/experience/caryo_kleinefelter/12p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr13' title='13' src='././bootstrap/img/experience/caryo_kleinefelter/13.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr13p' title='13' src='././bootstrap/img/experience/caryo_kleinefelter/13p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr14' title='14' src='././bootstrap/img/experience/caryo_kleinefelter/14.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr14p' title='14' src='././bootstrap/img/experience/caryo_kleinefelter/14p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr15' title='15' src='././bootstrap/img/experience/caryo_kleinefelter/15.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr15p' title='15' src='././bootstrap/img/experience/caryo_kleinefelter/15p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr16' title='16' src='././bootstrap/img/experience/caryo_kleinefelter/16.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr16p' title='16' src='././bootstrap/img/experience/caryo_kleinefelter/16p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr17' title='17' src='././bootstrap/img/experience/caryo_kleinefelter/17.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr17p' title='17' src='././bootstrap/img/experience/caryo_kleinefelter/17p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr18' title='18' src='././bootstrap/img/experience/caryo_kleinefelter/18.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr18p' title='18' src='././bootstrap/img/experience/caryo_kleinefelter/18p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr19' title='19' src='././bootstrap/img/experience/caryo_kleinefelter/19.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr19p' title='19' src='././bootstrap/img/experience/caryo_kleinefelter/19p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr20' title='20' src='././bootstrap/img/experience/caryo_kleinefelter/20.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr20p' title='20' src='././bootstrap/img/experience/caryo_kleinefelter/20p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr21' title='21' src='././bootstrap/img/experience/caryo_kleinefelter/21.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr21p' title='21' src='././bootstrap/img/experience/caryo_kleinefelter/21p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr22' title='22' src='././bootstrap/img/experience/caryo_kleinefelter/22.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chr22p' title='22' src='././bootstrap/img/experience/caryo_kleinefelter/22p.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chrx' title='x' src='././bootstrap/img/experience/caryo_kleinefelter/x.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chrxp' title='x' src='././bootstrap/img/experience/caryo_kleinefelter/xp.png' draggable='true' ondragstart='drag(event)'>",
							    "<img id='chry' title='y' src='././bootstrap/img/experience/caryo_kleinefelter/y.png' draggable='true' ondragstart='drag(event)'>"
			    ];
	
	$("div input").attr("disabled","disabled");
	
	var pipette_select = 0;
    var bistouri_select = 0;
    var ciseaux_select = 0;
    var seringue_select = 0;
    var blouse_select = 0;
    var compt_lame = 1;
    
    var couleur_lame = "rien";
    var couleur_lame1 = "rien";
    var couleur_lame2 = "rien";
    var couleur_lame3 = "rien";
    var couleur_lame4 = "rien";
    var couleur_pipette = "rien";
    var couleur_flacon = "rien";
    var couleur_tube = "rien";
    var lame_sur_microsc = "rien";
    var testA = false;
    var testB = false;
    var testAB = false;
    var dejaAgglutine = false;
    var fini = false;
    
    exp_complete = "rien";
    function rand(min, max, integer) {
    	if (!integer) {
    		return Math.random() * (max - min) + min;
    	} else {
    		return Math.floor(Math.random() * (max - min + 1) + min);
    	}
    }
    
    var groupe_sanguin = rand(0,3,true);
    var caryo_genere = rand(0,3,true);
    var rhesus = rand(0,1,true);
    var rh;
    if(rhesus === 0) rh='-';
    else rh='+';
    
    var caryo;
    if(caryo_genere === 0) caryo=copieTableaux(caryo_garcon_sein);
    else if (caryo_genere === 1) caryo=copieTableaux(caryo_fille_seine);
    else if (caryo_genere === 2) caryo=copieTableaux(caryo_trisomie_21);
    else if (caryo_genere === 3) caryo=copieTableaux(caryo_kleinefelter);
    var caryotype_genere = tb_caryotype[caryo_genere];
    var gp_sanguin = tb_groupe_sanguin[groupe_sanguin];
    //alert('Rhesus = '+rhesus+' et le groupe sanguin généré est : '+gp_sanguin+rh);
    
    function copieTableaux(tab1){
    	var copie = ['rien'];
    	for(i=0;i<tab1.length;i++){
    		copie.push(tab1[i]);
    	}
    	copie.shift();
    	return copie;
    }
    
    //gestion des sons au survol
    $("#sidenav01 a").each(function(i) {
  	      if (i != 0) {
  	        $("#beep-two").clone().attr("id", "beep-two" + i).appendTo($(this).parent());
  	      }
  	      $(this).data("beeper", i);
	    }).mouseenter(function() {
	      	$("#beep-two" + $(this).data("beeper"))[0].play();
	});
    $("#beep-two").attr("id", "beep-two0");
    
    $("#camera").on('click',function(e){
		e.preventDefault();
		$("#result").css("background","#f8f8f8 url('././bootstrap/img/experience/bg_result_caryo.png')");
		$("#result").css("background-size","100%");
		if(lame_sur_microsc === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp"){
			$(".resulta_cam").hide();
			$("#ranger").show();
			if(caryo_genere === 0){
				var copie_caryo_garcon_sein = caryo_garcon_sein;
				var i=0;
				$("#caryo_garcon_sein").fadeIn("slow");
				var position;
					do{
						position = rand(0,45,true);
						if(copie_caryo_garcon_sein[position]!="rien"){
							$("#caryo_garc_sein").append(copie_caryo_garcon_sein[position]);
							$("#caryo_garc_sein").show();
							copie_caryo_garcon_sein[position]="rien";
							i++;
						}
					}while(i!=46);
			}else if(caryo_genere === 1){
				var copie_caryo_fille_seine = caryo_fille_seine;
				$("#caryo_fil_seine").fadeIn("slow");
				var position;
				var i=0;
					do{
						position = rand(0,45,true);
						if(copie_caryo_fille_seine[position]!="rien"){
							$("#caryo_fille_seine").append(copie_caryo_fille_seine[position]);
							$("#caryo_fille_seine").show();
							copie_caryo_fille_seine[position]="rien";
							i++;
						}
					}while(i!=46);
			}else if(caryo_genere === 2){
				//alert("trisomie 21");
				var copie_caryo_trisomie_21 = caryo_trisomie_21;
				$("#caryo_trisomie21").fadeIn("slow");
				var position;
				var i=0;
					do{
						position = rand(0,46,true);
						if(copie_caryo_trisomie_21[position]!="rien"){
							$("#caryo_trisomi_21").append(copie_caryo_trisomie_21[position]);
							$("#caryo_trisomi_21").show();
							copie_caryo_trisomie_21[position]="rien";
							i++;
						}
					}while(i!=47);
			}else if(caryo_genere === 3){
				var copie_caryo_kleinefelter = caryo_kleinefelter;
				$("#caryo_kleinefelter").fadeIn("slow");
				var position;
				var i=0;
				do{
					position = rand(0,46,true);
					if(copie_caryo_kleinefelter[position]!="rien"){
						$("#caryo_kleinefelt").append(copie_caryo_kleinefelter[position]);
						$("#caryo_kleinefelt").show();
						copie_caryo_kleinefelter[position]="rien";
						i++;
					}
				}while(i!=47);
			}
			
		}else{
			$(".resulta_cam").hide();
			$("#caryo_vierge").fadeIn("slow");
		}
	});
    
    $(".radio input").on('click',function(e){	
		if(fini){
			if(gp_sanguin+rh === $(this).attr('id')){
				$(".result").hide();
				$("#bravo").show();
				$(this).attr("disabled","disabled");
			}else if(gp_sanguin+rh != $(this).attr('id')){
				$(".result").hide();
				$("#echec").show();
				$("div input").attr("disabled","disabled");
			}else{
				alert("vous devez d'abord realiser l'experience");
			}
		}
	});
    
	$("#cellule_sang").on('click',function(e){
		e.preventDefault();
		if(blouse_select === 1){
			if(pipette_select===1){
				$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				couleur_pipette = "sang"+tb_groupe_sanguin[groupe_sanguin];
				compteur_operation++;
				$("#consol").val($("#consol").val()+compteur_operation+"-Extraction de sang avec la pipette\n");
			}else{
				alert('tu dois selectionner prealablement la pipette ou la seringue');
			}
		}else{
			alert('tu dois prealeblement porter la blouse!');
		}
	});
	$("#anti-A").on('click',function(e){
		e.preventDefault();
		if(blouse_select === 1){
			if(pipette_select===1){
				$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				couleur_pipette = "anti-A";
				compteur_operation++;
				$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du serum anti A avec la pipette\n");
			}else{
				alert('tu dois selectionner prealablement la pipette ou la seringue');
			}
		}else{
			alert('tu dois prealablement porter la blouse!');
		}
	});
	$("#anti-B").on('click',function(e){
		e.preventDefault();
		if(blouse_select === 1){
			if(pipette_select===1){
				$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				couleur_pipette = "anti-B";
				compteur_operation++;
				$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du serum anti B avec la pipette\n");
			}else{
				alert('tu dois selectionner prealablement la pipette ou la seringue');
			}
		}else{
			alert('tu dois prealablement porter la blouse!');
		}
	});
	$("#anti-AB").on('click',function(e){
		e.preventDefault();
		if(blouse_select === 1){
			if(pipette_select===1){
				$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				couleur_pipette = "anti-AB";
				compteur_operation++;
				$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du serum anti AB avec la pipette\n");
			}else{
				alert('tu dois selectionner prealablement la pipette ou la seringue');
			}
		}else{
			alert('tu dois prealablement porter la blouse!');
		}
	});
	$("#anti-RH").on('click',function(e){
		e.preventDefault();
		if(blouse_select === 1){
			if(pipette_select===1){
				$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				couleur_pipette = "anti-RH";
				compteur_operation++;
				$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du serum anti Rhesus avec la pipette\n");
			}else{
				alert('tu dois selectionner prealablement la pipette ou la seringue');
			}
		}else{
			alert('tu dois prealablement porter la blouse!');
		}
	});
	$("#metyl-pp").on('click',function(e){
		e.preventDefault();
		if(blouse_select === 1){
			if(pipette_select===1){
				$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				couleur_pipette = "metyl-pp";
				compteur_operation++;
				$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du methyl de propylene avec la pipette\n");
			}else{
				alert('tu dois selectionner prealablement la pipette ou la seringue');
			}
		}else{
			alert('tu dois prealablement porter la blouse!');
		}
	});
	$("#b-coomas").on('click',function(e){
		e.preventDefault();
		if(blouse_select === 1){
			if(pipette_select===1){
				$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				couleur_pipette = "b-coomas";
				compteur_operation++;
				$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du bleu de coomasie avec la pipette\n");
			}else{
				alert('tu dois selectionner prealablement la pipette ou la seringue');
			}
		}else{
			alert('tu dois prealablement porter la blouse!');
		}
	});
	$("#colchicine").on('click',function(e){
		e.preventDefault();
		if(blouse_select === 1){
			if(pipette_select===1){
				$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				couleur_pipette = "colchicine";
				compteur_operation++;
				$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du la colchicine avec la pipette\n");
			}else{
				alert('tu dois selectionner prealablement la pipette ou la seringue');
			}
		}else{
			alert('tu dois prealablement porter la blouse!');
		}
	});
	
	$("#cellule_peau").on('click',function(e){
		e.preventDefault();
		if(blouse_select === 1){
			if(pince_select===1){
				$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
				pipette_select=2;
				couleur_pipette = "sang"+tb_groupe_sanguin[groupe_sanguin];
				compteur_operation++;
				$("#consol").val($("#consol").val()+compteur_operation+"-Extraction de la peau avec la pince\n");
			}else{
				alert('tu dois selectionner prealablement la pipette ou la seringue');
			}
		}else{
			alert('tu dois prealablement porter la blouse!');
		}
	});
	
	$("#blouse").on('click',function(e){
		e.preventDefault();
		blouse_select = 1;
		$("#bloc_blouse").fadeOut("slow");
		alert("Vous pouvez manitenant démarrer votre expérience");
		$("#consol").val($("#consol").val()+"0-Blouse et gant harborés\n");
	});
    $("#pipette").on('click',function(e){
		e.preventDefault();
		if(blouse_select === 1){
    		pipette_select = 1;
    		bistouri_select = 0;
    		ciseaux_select = 0;
    		seringue_select = 0;
    		$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
    		compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Pipette selectionnée\n");
		}else{
			alert("Avant toute manipulation le port de la blouse et du gant est obligatoire!")
		}
	});
    $("#bistouri").on('click',function(e){
    	if(blouse_select === 1){
    		e.preventDefault();
    		bistouri_select = 1;
    		pipette_select = 0;
    		ciseaux_select = 0;
    		seringue_select = 0;
    		$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/bistouri.ico'),pointer");
    		$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/bistouri.ico'),pointer");
    		compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Bistouri selectionné\n");
    	}else{
			alert("Avant toute manipulation le port de la blouse et du gant est obligatoire!")
		}
	});
    $("#ciseaux").on('click',function(e){
    	if(blouse_select === 1){
    		e.preventDefault();
    		ciseaux_select = 1;
    		bistouri_select = 0;
    		pipette_select = 0;
    		seringue_select = 0;
    		$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/ciseaux.ico'),pointer");
    		$(".cellule").css("cursor","url('././bootstrap/curseur/ciseaux.ico'),pointer");
    		compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ciseaux selectionnés\n");
	    }else{
			alert("Avant toute manipulation le port de la blouse et du gant est obligatoire!")
		}
	});
    $("#seringue").on('click',function(e){
    	if(blouse_select === 1){
    		e.preventDefault();
    		seringue_select = 1;
    		bistouri_select = 0;
    		ciseaux_select = 0;
    		pipette_select = 0;
    		$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/seringue.ico'),pointer");
    		$(".cellule").css("cursor","url('././bootstrap/curseur/seringue.ico'),pointer");
    		compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Seringue selectionnée\n");
    	}else{
			alert("Avant toute manipulation le port de la blouse et du gant est obligatoire!")
		}
	});    
    
    /* gestion des combinaisons dans les differents tubes */
    $(".flacon_conique").on('click',function(e){
    	$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
		$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
		compteur_operation++;
    	if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_flacon === "rien"){
    		couleur_flacon = "sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".flacon_conique").hide();
			$("#flc_rouge0").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "metyl-pp" && couleur_flacon === "rien"){
    		couleur_flacon = "metyl-pp"
			$(".flacon_conique").hide();
			$("#flc_violet0").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du cristal violet au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "b-coomas" && couleur_flacon === "rien"){
    		couleur_flacon = "b-coomas"
    		$(".flacon_conique").hide();
			$("#flc_bleu0").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du bleu de Coomasie au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "colchicine" && couleur_flacon === "rien"){
    		couleur_flacon = "colchicine"
    		$(".flacon_conique").hide();
			$("#flc_transp0").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout de la colchicine au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-A" && couleur_flacon === "rien"){
    		couleur_flacon = "anti-A"
    		$(".flacon_conique").hide();
			$("#flc_bleu0").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-A au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-B" && couleur_flacon === "rien"){
    		couleur_flacon = "anti-B"
    		$(".flacon_conique").hide();
			$("#flc_jaune0").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-B au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-AB" && couleur_flacon === "rien"){
    		couleur_flacon = "anti-AB"
    		$(".flacon_conique").hide();
			$("#flc_transp0").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-AB au flacon conique via la pipette\n");
    	}else if(couleur_pipette === "anti-RH" && couleur_flacon === "rien"){
        		couleur_flacon = "anti-RH"
        		$(".flacon_conique").hide();
    			$("#flc_transp0").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-RH au flacon conique via la pipette\n");
        }else
    	if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "sang"+tb_groupe_sanguin[groupe_sanguin]+"_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".flacon_conique").hide();
			$("#flc_rouge1").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]+"_sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_flacon ="sang"+tb_groupe_sanguin[groupe_sanguin]+"_sang"+tb_groupe_sanguin[groupe_sanguin]+"_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".flacon_conique").hide();
    			$("#flc_rouge2").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au flacon conique via la pipette\n");
        }else
    	if(couleur_pipette === "metyl-pp" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".flacon_conique").hide();
			$("#flc_violet1").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du méthyle propylène au sang dans flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "b-coomas" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
    		$(".flacon_conique").hide();
			$("#flc_violet1").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du bleu de Coomasie au sang dans le flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "colchicine" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
    		$(".flacon_conique").hide();
			$("#flc_rouge_clair1").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout de la colchicine au sang dans flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-A" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
    		$(".flacon_conique").hide();
			$("#flc_violet1").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-A au sang dans le flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-B" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
    		$(".flacon_conique").hide();
			$("#flc_rouge_jaune1").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-B au sang dans flacon conique via la pipette\n");
    	}else if(couleur_pipette === "anti-AB" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
    		$(".flacon_conique").hide();
			$("#flc_rouge_clair1").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-AB au sang  dans le flacon conique via la pipette\n");
    	}else if(couleur_flacon === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_pipette === "metyl-pp"){
    		couleur_flacon = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp";
    		$(".flacon_conique").hide();
			$("#flc_violet1").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du cristal violet au mélange sang-colchicine dans le flacon conique via la pipette\n");
    	}else if(couleur_pipette === "rien"){
    		couleur_pipette = couleur_tube;
    		$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
    		$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du contenu du flacon conique via la pipette\n");
    		return;
    	}else{
    		//alert("la couleur de la pipette est "+couleur_pipette+" et couleur du flacon est "+couleur_flacon);
    		$(".flacon_conique").hide();
			$("#flc_interdit").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Mélange interdit\n");
    	}
    	couleur_pipette="rien";
		pipette_select = 1;
	});
    
    $(".flacon_spherique").on('mousedown',function(e){
    	$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
		$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
		compteur_operation++;
    	if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_flacon === "rien"){
    		couleur_flacon = "sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".flacon_spherique").hide();
			$("#fls_rouge").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au flacon spherique via la pipette\n");
    	}else
    	if(couleur_pipette === "metyl-pp" && couleur_flacon === "rien"){
    		couleur_flacon = "metyl-pp"
			$(".flacon_spherique").hide();
			$("#fls_violet").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du cristal violet au flacon sphérique via la pipette\n");
    	}else
    	if(couleur_pipette === "b-coomas" && couleur_flacon === "rien"){
    		couleur_flacon = "b-coomas"
    		$(".flacon_spherique").hide();
			$("#fls_bleu").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du bleu de Coomasie au flacon spherique via la pipette\n");
    	}else
    	if(couleur_pipette === "colchicine" && couleur_flacon === "rien"){
    		couleur_flacon = "colchicine"
    		$(".flacon_spherique").hide();
			$("#fls_transp").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout de la colchicine au flacon sphérique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-A" && couleur_flacon === "rien"){
    		couleur_flacon = "anti-A"
    		$(".flacon_spherique").hide();
			$("#fls_transp").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sérum anti-A au flacon sphérique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-B" && couleur_flacon === "rien"){
    		couleur_flacon = "anti-B"
    		$(".flacon_spherique").hide();
			$("#fls_transp").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sérum anti-B au flacon sphérique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-AB" && couleur_flacon === "rien"){
    		couleur_flacon = "anti-AB"
    		$(".flacon_spherique").hide();
			$("#fls_transp").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sérum anti-AB au flacon sphérique via la pipette\n");
    	}else if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        	couleur_flacon = "sang"+tb_groupe_sanguin[groupe_sanguin];
    		$(".flacon_spherique").hide();
    		$("#fls_rouge").fadeIn("slow");
        	$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au flacon sphérique via la pipette\n");
        }else if(couleur_pipette === "metyl-pp" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        	couleur_flacon = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
    		$(".flacon_spherique").hide();
    		$("#fls_violet").fadeIn("slow");
        	$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du cristal violet au sang dans flacon sphérique via la pipette\n");
        }else if(couleur_pipette === "b-coomas" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        	couleur_flacon = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
        	$(".flacon_spherique").hide();
    		$("#fls_bleu").fadeIn("slow");
        	$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du bleu de Coomassie au sang dans le flacon spherique via la pipette\n");
        }else if(couleur_pipette === "colchicine" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        	couleur_flacon = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
        	$(".flacon_spherique").hide();
    		$("#fls_rouge").fadeIn("slow");
        	$("#consol").val($("#consol").val()+compteur_operation+"-Ajout de la colchicine au sang à  dans flacon spherique via la pipette\n");
        }else if(couleur_pipette === "anti-A" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_flacon = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
        		$(".flacon_spherique").hide();
    			$("#fls_transp").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sérum anti-A au sang dans le flacon sphérique via la pipette\n");
        }else if(couleur_pipette === "anti-B" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_flacon = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
        		$(".flacon_spherique").hide();
    			$("#fls_transp").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sérum anti-B au sang dans le flacon spherique via la pipette\n");
        }else if(couleur_pipette === "anti-AB" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        	couleur_flacon = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
        	$(".flacon_spherique").hide();
    		$("#fls_transp").fadeIn("slow");
        	$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sérum anti-AB au sang dans flacon spherique via la pipette\n");
        }else if(couleur_flacon === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_pipette === "metyl-pp"){
        	couleur_flacon = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp";
        	$(".flacon_spherique").hide();
    		$("#fls_violet").fadeIn("slow");
        	$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du cristal violet au mélange sang-colchicine dans le flacon conique via la pipette\n");
        }else if(couleur_pipette === "rien"){
        	couleur_pipette = couleur_tube;
        	$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
        	$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
        	$("#consol").val($("#consol").val()+compteur_operation+"-extraction du contenu du flacon csphérique via la pipette\n");
        	return;
        }else{
           	$(".flacon_spherique").hide();
        	$("#fls_interdit").fadeIn("slow");
           	$("#consol").val($("#consol").val()+compteur_operation+"-Mélange interdit\n");
        }
    	pipette_select = 1;
    	couleur_pipette="rien";
	});
    
    $(".tube_essai").on('mousedown',function(e){
    	//$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
    	$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
		$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
		compteur_operation++;
    	if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_tube === "rien"){
    		couleur_tube = "sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".tube_essai").hide();
			$("#tb_rouge0").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au tube à éssai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    	if(couleur_pipette === "colchicine" && couleur_tube === "rien"){
    		couleur_tube = "colchicine";
			$(".tube_essai").hide();
			$("#tb_transp0").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout de la colchicine au tube à essai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    	if(couleur_pipette === "metyl-pp" && couleur_tube === "rien"){
    		couleur_tube = "metyl-pp";
			$(".tube_essai").hide();
			$("#tb_violet0").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du cristal violet au tube à éssai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    	if(couleur_pipette === "b-coomas" && couleur_tube === "rien"){
    		couleur_tube = "b-coomas";
			$(".tube_essai").hide();
			$("#tb_bleu0").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du bleu de coomassie au tube à essai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    	if(couleur_pipette === "anti-A" && couleur_tube === "rien"){
    		couleur_tube = "anti-A";
			$(".tube_essai").hide();
			$("#tb_bleu0").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sérum anti-A au tube à éssai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    	if(couleur_pipette === "anti-B" && couleur_tube === "rien"){
    		couleur_tube = "anti-B";
			$(".tube_essai").hide();
			$("#tb_jaune0").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sérum anti-B au tube à éssai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    	if(couleur_pipette === "anti-AB" && couleur_tube === "rien"){
    		couleur_tube = "anti-AB";
			$(".tube_essai").hide();
			$("#tb_transp0").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sérum anti-AB au tube à éssai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    		if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "sang"+tb_groupe_sanguin[groupe_sanguin]+"_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".tube_essai").hide();
    			$("#tb_rouge1").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au tube à éssai via la pipette\n");
        }else if(couleur_pipette === "colchicine" && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".tube_essai").hide();
    			$("#tb_rouge_clair1").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout de la colchicine au sang dans tube à essai via la pipette\n");
        		couleur_pipette="rien";
        	}else
        	if(couleur_pipette === "metyl-pp" && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "metyl-pp_sang";
    			$(".tube_essai").hide();
    			$("#tb_violet1").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du cristal violet au sang dans le tube à essai via la pipette\n");
        		couleur_pipette="rien";
        	}else
        	if(couleur_pipette === "b-coomas" && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".tube_essai").hide();
    			$("#tb_violet1").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du bleu de coomassie au sang dans le tube à essai via la pipette\n");
        		couleur_pipette="rien";
        	}else
        	if(couleur_pipette === "anti-A" && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".tube_essai").hide();
    			$("#tb_violet1").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sérum anti-A au sang dans le tube à essai via la pipette\n");
        		couleur_pipette="rien";
        	}else if(couleur_pipette === "anti-B" && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".tube_essai").hide();
    			$("#tb_rouge_jaune1").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sérum anti-B au sang dans le tube à essai via la pipette\n");
        		couleur_pipette="rien";
        	}else if(couleur_pipette === "anti-AB" && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".tube_essai").hide();
    			$("#tb_transp1").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sérum anti-AB au sang dans le tube à essai via la pipette\n");
        		couleur_pipette="rien";
        	}else if(couleur_tube === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_pipette === "metyl-pp"){
        		couleur_tube = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp";
        		$(".tube_essai").hide();
    			$("#tb_violet2").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du cristal violet au mélange sang-colchicine dans le flacon conique via la pipette\n");
        		couleur_pipette="rien";
        	}else if(couleur_pipette === "rien"){
        		couleur_pipette = couleur_tube;
        		$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
        		$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
        		//$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du contenu du tube tube à essai via la pipette\n");
        	}else{
            	$(".tube_essai").hide();
        		$("#tb_interdit").fadeIn("slow");
            	$("#consol").val($("#consol").val()+compteur_operation+"-Mélange interdit\n");
            	couleur_pipette="rien";
            }
    	pipette_select = 1;
	});
    
    $(".lame_grand").live('mousedown',function(e){
    	if(blouse_select === 1){
	    	//$(".microscope").css("cursor","url('././bootstrap/curseur/lame.ico'),pointer");
			//$(".lame_grand").css("cursor","url('././bootstrap/curseur/lame.ico'),pointer");
    		$(".ligne-carreau").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
    		$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			var id = $(this).attr('id');
			$("#"+id).hide();
			compteur_operation++;
			if(id === "lame_1"){
		    	if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_lame1 === "rien"){
		    		couleur_lame = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "sang"+tb_groupe_sanguin[groupe_sanguin];
					$("#consol").val($("#consol").val()+compteur_operation+"-Depos du sang sur lame via la pipette\n");
					$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    	}else if(couleur_pipette === "metyl-pp" && couleur_lame1 === "rien"){
		    		couleur_lame = "metyl-pp";
		    		if(id==="lame_1") couleur_lame1 = "metyl-pp";
		    		else if(id==="lame_2") couleur_lame2 = "metyl-pp";
		    		else if(id==="lame_3") couleur_lame3 = "metyl-pp";
		    		else if(id==="lame_4") couleur_lame4 = "metyl-pp";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_violet.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du methyl de propylene sur lame via la pipette\n");
		    	}else if(couleur_pipette === "b-coomas" && couleur_lame1 === "rien"){
		    		couleur_lame = "b-coomas";
		    		if(id==="lame_1") couleur_lame1 = "b-coomas";
		    		else if(id==="lame_2") couleur_lame2 = "b-coomas";
		    		else if(id==="lame_3") couleur_lame3 = "b-coomas";
		    		else if(id==="lame_4") couleur_lame4 = "b-coomas";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_bleu.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du bleu de coomasi sur lame via la pipette\n");
		    	}else if(couleur_pipette === "colchicine" && couleur_lame1 === "rien"){
		    		couleur_lame = "colchicine";
		    		if(id==="lame_1") couleur_lame1 = "colchicine";
		    		else if(id==="lame_2") couleur_lame2 = "colchicine";
		    		else if(id==="lame_3") couleur_lame3 = "colchicine";
		    		else if(id==="lame_4") couleur_lame4 = "colchicine";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_vert.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la colchicine sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-A" && couleur_lame1 === "rien"){
		    		couleur_lame = "anti-A";
		    		if(id==="lame_1") couleur_lame1 = "anti-A";
		    		else if(id==="lame_2") couleur_lame2 = "anti-A";
		    		else if(id==="lame_3") couleur_lame3 = "anti-A";
		    		else if(id==="lame_4") couleur_lame4 = "anti-A";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_bleu.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-A sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-B" && couleur_lame1 === "rien"){
		    		couleur_lame = "anti-B";
		    		if(id==="lame_1") couleur_lame1 = "anti-B";
		    		else if(id==="lame_2") couleur_lame2 = "anti-B";
		    		else if(id==="lame_3") couleur_lame3 = "anti-B";
		    		else if(id==="lame_4") couleur_lame4 = "anti-B";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_jaune.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-B sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-AB" && couleur_lame1 === "rien"){
		    		couleur_lame = "anti-AB";
		    		if(id==="lame_1") couleur_lame1 = "anti-B";
		    		else if(id==="lame_2") couleur_lame2 = "anti-B";
		    		else if(id==="lame_3") couleur_lame3 = "anti-B";
		    		else if(id==="lame_4") couleur_lame4 = "anti-B";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-AB sur lame via la pipette\n");
		    	}else if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_lame1 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "sang"+tb_groupe_sanguin[groupe_sanguin];
					$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du sang sur lame via la pipette\n");
		    		compt_lame++;
		    	}else if(couleur_pipette === "metyl-pp" && couleur_lame1 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_violet.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testA = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au methyl de propylene sur lame via la pipette\n");
		    	}else if(couleur_pipette === "b-coomas" && couleur_lame1 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_violet.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testA = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au bleu de coomasi sur lame via la pipette\n");
		    	}else if(couleur_pipette === "colchicine" && couleur_lame1 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testA = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang à la colchicine sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-A" && couleur_lame1 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_dark.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testA = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-A sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-B" && couleur_lame1 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_clair.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testA = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-B sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-AB" && couleur_lame1 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_AB.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testA = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-AB sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-RH" && couleur_lame1 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_RH.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testA = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-AB sur lame via la pipette\n");
		    	}else{
		    		if(couleur_pipette != "rien"){
						$(".lame_grand").hide();
						$("#lam_interdit").fadeIn();
						$("#consol").val($("#consol").val()+compteur_operation+"-Melange interdit\n");
		    		}
		    		$("#"+id).fadeIn(2500);
		    	}
	    	}else if(id === "lame_2"){
	    		if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_lame2 === "rien"){
		    		couleur_lame = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "sang"+tb_groupe_sanguin[groupe_sanguin];
					$("#consol").val($("#consol").val()+compteur_operation+"-Depos du sang sur lame via la pipette\n");
					$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    	}else if(couleur_pipette === "metyl-pp" && couleur_lame2 === "rien"){
		    		couleur_lame = "metyl-pp";
		    		if(id==="lame_1") couleur_lame1 = "metyl-pp";
		    		else if(id==="lame_2") couleur_lame2 = "metyl-pp";
		    		else if(id==="lame_3") couleur_lame3 = "metyl-pp";
		    		else if(id==="lame_4") couleur_lame4 = "metyl-pp";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_violet.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du methyl de propylene sur lame via la pipette\n");
		    	}else if(couleur_pipette === "b-coomas" && couleur_lame2 === "rien"){
		    		couleur_lame = "b-coomas";
		    		if(id==="lame_1") couleur_lame1 = "b-coomas";
		    		else if(id==="lame_2") couleur_lame2 = "b-coomas";
		    		else if(id==="lame_3") couleur_lame3 = "b-coomas";
		    		else if(id==="lame_4") couleur_lame4 = "b-coomas";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_bleu.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du bleu de coomasi sur lame via la pipette\n");
		    	}else if(couleur_pipette === "colchicine" && couleur_lame2 === "rien"){
		    		couleur_lame = "colchicine";
		    		if(id==="lame_1") couleur_lame1 = "colchicine";
		    		else if(id==="lame_2") couleur_lame2 = "colchicine";
		    		else if(id==="lame_3") couleur_lame3 = "colchicine";
		    		else if(id==="lame_4") couleur_lame4 = "colchicine";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_vert.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la colchicine sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-A" && couleur_lame2 === "rien"){
		    		couleur_lame = "anti-A";
		    		if(id==="lame_1") couleur_lame1 = "anti-A";
		    		else if(id==="lame_2") couleur_lame2 = "anti-A";
		    		else if(id==="lame_3") couleur_lame3 = "anti-A";
		    		else if(id==="lame_4") couleur_lame4 = "anti-A";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_bleu.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-A sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-B" && couleur_lame2 === "rien"){
		    		couleur_lame = "anti-B";
		    		if(id==="lame_1") couleur_lame1 = "anti-B";
		    		else if(id==="lame_2") couleur_lame2 = "anti-B";
		    		else if(id==="lame_3") couleur_lame3 = "anti-B";
		    		else if(id==="lame_4") couleur_lame4 = "anti-B";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_jaune.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-B sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-AB" && couleur_lame2 === "rien"){
		    		couleur_lame = "anti-AB";
		    		if(id==="lame_1") couleur_lame1 = "anti-B";
		    		else if(id==="lame_2") couleur_lame2 = "anti-B";
		    		else if(id==="lame_3") couleur_lame3 = "anti-B";
		    		else if(id==="lame_4") couleur_lame4 = "anti-B";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-AB sur lame via la pipette\n");
		    	}else if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_lame2 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "sang"+tb_groupe_sanguin[groupe_sanguin];
					$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du sang sur lame via la pipette\n");
		    		compt_lame++;
		    	}else if(couleur_pipette === "metyl-pp" && couleur_lame2 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_violet.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au methyl de propylene sur lame via la pipette\n");
		    	}else if(couleur_pipette === "b-coomas" && couleur_lame2 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_violet.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au bleu de coomasi sur lame via la pipette\n");
		    	}else if(couleur_pipette === "colchicine" && couleur_lame2 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang à la colchicine sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-A" && couleur_lame2 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_dark.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-A sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-B" && couleur_lame2 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_clair.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-B sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-AB" && couleur_lame2 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_AB.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-AB sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-RH" && couleur_lame2 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_RH.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-AB sur lame via la pipette\n");
		    	}else{
		    		if(couleur_pipette != "rien"){
						$(".lame_grand").hide();
						$("#lam_interdit").fadeIn();
						$("#consol").val($("#consol").val()+compteur_operation+"-Melange interdit\n");
		    		}
		    	}
	    	}else if(id==="lame_3"){
	    		if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_lame3 === "rien"){
		    		couleur_lame = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "sang"+tb_groupe_sanguin[groupe_sanguin];
					$("#consol").val($("#consol").val()+compteur_operation+"-Depos du sang sur lame via la pipette\n");
					$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    	}else if(couleur_pipette === "metyl-pp" && couleur_lame3 === "rien"){
		    		couleur_lame = "metyl-pp";
		    		if(id==="lame_1") couleur_lame1 = "metyl-pp";
		    		else if(id==="lame_2") couleur_lame2 = "metyl-pp";
		    		else if(id==="lame_3") couleur_lame3 = "metyl-pp";
		    		else if(id==="lame_4") couleur_lame4 = "metyl-pp";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_violet.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du methyl de propylene sur lame via la pipette\n");
		    	}else if(couleur_pipette === "b-coomas" && couleur_lame3 === "rien"){
		    		couleur_lame = "b-coomas";
		    		if(id==="lame_1") couleur_lame1 = "b-coomas";
		    		else if(id==="lame_2") couleur_lame2 = "b-coomas";
		    		else if(id==="lame_3") couleur_lame3 = "b-coomas";
		    		else if(id==="lame_4") couleur_lame4 = "b-coomas";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_bleu.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du bleu de coomasi sur lame via la pipette\n");
		    	}else if(couleur_pipette === "colchicine" && couleur_lame3 === "rien"){
		    		couleur_lame = "colchicine";
		    		if(id==="lame_1") couleur_lame1 = "colchicine";
		    		else if(id==="lame_2") couleur_lame2 = "colchicine";
		    		else if(id==="lame_3") couleur_lame3 = "colchicine";
		    		else if(id==="lame_4") couleur_lame4 = "colchicine";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_vert.png' class='lame_grand' id='"+id+"' />");
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la colchicine sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-A" && couleur_lame3 === "rien"){
		    		couleur_lame = "anti-A";
		    		if(id==="lame_1") couleur_lame1 = "anti-A";
		    		else if(id==="lame_2") couleur_lame2 = "anti-A";
		    		else if(id==="lame_3") couleur_lame3 = "anti-A";
		    		else if(id==="lame_4") couleur_lame4 = "anti-A";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_bleu.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-A sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-B" && couleur_lame3 === "rien"){
		    		couleur_lame = "anti-B";
		    		if(id==="lame_1") couleur_lame1 = "anti-B";
		    		else if(id==="lame_2") couleur_lame2 = "anti-B";
		    		else if(id==="lame_3") couleur_lame3 = "anti-B";
		    		else if(id==="lame_4") couleur_lame4 = "anti-B";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_jaune.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-B sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-AB" && couleur_lame3 === "rien"){
		    		couleur_lame = "anti-AB";
		    		if(id==="lame_1") couleur_lame1 = "anti-AB";
		    		else if(id==="lame_2") couleur_lame2 = "anti-AB";
		    		else if(id==="lame_3") couleur_lame3 = "anti-AB";
		    		else if(id==="lame_4") couleur_lame4 = "anti-AB";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2.png' class='lame_grand' id='"+id+"' />");
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-AB sur lame via la pipette\n");
		    	}else if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_lame3 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "sang"+tb_groupe_sanguin[groupe_sanguin];
					$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du sang sur lame via la pipette\n");
		    		compt_lame++;
		    	}else if(couleur_pipette === "metyl-pp" && couleur_lame3 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_violet.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testAB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au methyl de propylene sur lame via la pipette\n");
		    	}else if(couleur_pipette === "b-coomas" && couleur_lame3 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_violet.png' class='lame_grand' id='"+id+"' />");
		    		compt_lame++;
		    		testAB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au bleu de coomasi sur lame via la pipette\n");
		    	}else if(couleur_pipette === "colchicine" && couleur_lame3 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testAB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang à la colchicine sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-A" && couleur_lame3 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame3 = "anti-4_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_dark.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testAB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-A sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-B" && couleur_lame3 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_clair.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testAB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-B sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-AB" && couleur_lame3 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_AB.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testAB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-AB sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-RH" && couleur_lame3 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_RH.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testAB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-RH sur lame via la pipette\n");
		    	}else{
		    		if(couleur_pipette != "rien"){
						$(".lame_grand").hide();
						$("#lam_interdit").fadeIn();
						$("#consol").val($("#consol").val()+compteur_operation+"-Melange interdit\n");
		    		}
		    	}
	    	}else if(id === "lame_4"){
	    		if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_lame4 === "rien"){
		    		couleur_lame = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "sang"+tb_groupe_sanguin[groupe_sanguin];
					$("#consol").val($("#consol").val()+compteur_operation+"-Depos du sang sur lame via la pipette\n");
					$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    	}else if(couleur_pipette === "metyl-pp" && couleur_lame4 === "rien"){
		    		couleur_lame = "metyl-pp";
		    		if(id==="lame_1") couleur_lame1 = "metyl-pp";
		    		else if(id==="lame_2") couleur_lame2 = "metyl-pp";
		    		else if(id==="lame_3") couleur_lame3 = "metyl-pp";
		    		else if(id==="lame_4") couleur_lame4 = "metyl-pp";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_violet.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du methyl de propylene sur lame via la pipette\n");
		    	}else if(couleur_pipette === "b-coomas" && couleur_lame4 === "rien"){
		    		couleur_lame = "b-coomas";
		    		if(id==="lame_1") couleur_lame1 = "b-coomas";
		    		else if(id==="lame_2") couleur_lame2 = "b-coomas";
		    		else if(id==="lame_3") couleur_lame3 = "b-coomas";
		    		else if(id==="lame_4") couleur_lame4 = "b-coomas";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_bleu.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du bleu de coomasi sur lame via la pipette\n");
		    	}else if(couleur_pipette === "colchicine" && couleur_lame4 === "rien"){
		    		couleur_lame = "colchicine";
		    		if(id==="lame_1") couleur_lame1 = "colchicine";
		    		else if(id==="lame_2") couleur_lame2 = "colchicine";
		    		else if(id==="lame_3") couleur_lame3 = "colchicine";
		    		else if(id==="lame_4") couleur_lame4 = "colchicine";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la colchicine sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-A" && couleur_lame4 === "rien"){
		    		couleur_lame = "anti-A";
		    		if(id==="lame_1") couleur_lame1 = "anti-A";
		    		else if(id==="lame_2") couleur_lame2 = "anti-A";
		    		else if(id==="lame_3") couleur_lame3 = "anti-A";
		    		else if(id==="lame_4") couleur_lame4 = "anti-A";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_bleu.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-A sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-B" && couleur_lame4 === "rien"){
		    		couleur_lame = "anti-B";
		    		if(id==="lame_1") couleur_lame1 = "anti-B";
		    		else if(id==="lame_2") couleur_lame2 = "anti-B";
		    		else if(id==="lame_3") couleur_lame3 = "anti-B";
		    		else if(id==="lame_4") couleur_lame4 = "anti-B";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_jaune.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-B sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-AB" && couleur_lame4 === "rien"){
		    		couleur_lame = "anti-AB";
		    		if(id==="lame_1") couleur_lame1 = "anti-AB";
		    		else if(id==="lame_2") couleur_lame2 = "anti-AB";
		    		else if(id==="lame_3") couleur_lame3 = "anti-AB";
		    		else if(id==="lame_4") couleur_lame4 = "anti-AB";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-AB sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-RH" && couleur_lame4 === "rien"){
		    		couleur_lame = "anti-RH";
		    		if(id==="lame_1") couleur_lame1 = "anti-RH";
		    		else if(id==="lame_2") couleur_lame2 = "anti-RH";
		    		else if(id==="lame_3") couleur_lame3 = "anti-RH";
		    		else if(id==="lame_4") couleur_lame4 = "anti-RH";
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-AB sur lame via la pipette\n");
		    	}else if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_lame4 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "sang"+tb_groupe_sanguin[groupe_sanguin];
					$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du sang sur lame via la pipette\n");
		    		compt_lame++;
		    	}else if(couleur_pipette === "metyl-pp" && couleur_lame4 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_violet.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au methyl de propylene sur lame via la pipette\n");
		    	}else if(couleur_pipette === "b-coomas" && couleur_lame4 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_violet.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au bleu de coomasi sur lame via la pipette\n");
		    	}else if(couleur_pipette === "colchicine" && couleur_lame4 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang à la colchicine sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-A" && couleur_lame4 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_dark.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-A sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-B" && couleur_lame4 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_clair.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-B sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-AB" && couleur_lame4 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_AB.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-AB sur lame via la pipette\n");
		    	}else if(couleur_pipette === "anti-RH" && couleur_lame4 === "sang"+tb_groupe_sanguin[groupe_sanguin]){
		    		couleur_lame = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		if(id==="lame_1") couleur_lame1 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_2") couleur_lame2 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_3") couleur_lame3 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		else if(id==="lame_4") couleur_lame4 = "anti-RH_sang"+tb_groupe_sanguin[groupe_sanguin];
		    		$("#"+id).replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_RH.png' class='lame_grand' id='"+id+"' style='display:none;'/>");
		    		$("#"+id).fadeIn(2500);
		    		compt_lame++;
		    		testB = true;
		    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-RH sur lame via la pipette\n");
		    	}else{
		    		if(couleur_pipette != "rien"){
						$(".lame_grand").hide();
						$("#lam_interdit").fadeIn();
						$("#consol").val($("#consol").val()+compteur_operation+"-Melange interdit\n");
		    		}
		    	}
	    	}
	    	couleur_pipette="rien";
			pipette_select = 1;
    	}else{
			alert("Avant toute manipulation le port de la blouse et du gant est obligatoire!")
		}
	});
    $(".microscope").on('mousedown',function(e){
    	if(blouse_select === 1){
	    	if(couleur_lame === "sang"+tb_groupe_sanguin[groupe_sanguin]){
	    		lame_sur_microsc = "sang"+tb_groupe_sanguin[groupe_sanguin];
				$(".microscope").hide();
				$("#microsc-ready").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de sang au microscope\n");
	    	}
	    	if(couleur_lame === "metyl-pp"){
	    		lame_sur_microsc = "metyl-pp";
				$(".microscope").hide();
				$("#microsc-ready").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de methyl de propylene au microscope\n");
	    	}
	    	if(couleur_lame === "b-coomas"){
	    		lame_sur_microsc = "b-coomas";
				$(".microscope").hide();
				$("#microsc-ready").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de bleu de coomasie au microscope\n");
	    	}
	    	if(couleur_lame === "colchicine"){
	    		lame_sur_microsc = "colchicine";
				$(".microscope").hide();
				$("#microsc-ready").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de colchicine au microscope\n");
	    	}
	    	if(couleur_lame === "anti-A"){
	    		lame_sur_microsc = "anti-A";
				$(".microscope").hide();
				$("#microsc-ready").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti A au microscope\n");
	    	}
	    	if(couleur_lame === "anti-B"){
	    		lame_sur_microsc = "anti-B";
				$(".microscope").hide();
				$("#microsc-ready").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti B au microscope\n");
	    	}
	    	if(couleur_lame === "anti-AB"){
	    		lame_sur_microsc = "anti-AB";
				$(".microscope").hide();
				$("#microsc-ready").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti AB au microscope\n");
	    	}
	    	
	    	if(couleur_lame === "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin]){
	    		lame_sur_microsc = "metyl-pp_sang";
				$(".microscope").hide();
				$("#microsc-ready_violet").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de methyl de propylene au microscope\n");
	    	}
	    	if(couleur_lame === "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin]){
	    		lame_sur_microsc = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
				$(".microscope").hide();
				$("#microsc-ready").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de bleu de coomasie au microscope\n");
	    	}
	    	if(couleur_lame === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]){
	    		lame_sur_microsc = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
				$(".microscope").hide();
				$("#microsc-ready").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de colchicine au microscope\n");
	    	}
	    	if(couleur_lame === "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin]){
	    		lame_sur_microsc = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
				$(".microscope").hide();
				$("#microsc-ready").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti A au microscope\n");
	    	}
	    	if(couleur_lame === "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin]){
	    		lame_sur_microsc = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
				$(".microscope").hide();
				$("#microsc-ready").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti B au microscope\n");
	    	}
	    	if(couleur_lame === "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin]){
	    		lame_sur_microsc = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
				$(".microscope").hide();
				$("#microsc-ready").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'), pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'), pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'), pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti AB au microscope\n");
	    	}
	    	if(couleur_lame === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp"){
	    		lame_sur_microsc = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp";
				$(".microscope").hide();
				$("#microsc-ready_violet").fadeIn();
				$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
				compteur_operation++;
	    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti AB au microscope\n");
	    	}
    	}else{
			alert("Avant toute manipulation le port de la blouse et du gant est obligatoire!")
		}
	});
    
    function switchfct(btnSurvole,msgContextuel){
		$(btnSurvole).mousedown(function(){
			$('.icone').hide();
			$(msgContextuel).fadeIn("slow");
		});
	}
	switchfct('#blouse','.blouse');
	switchfct('#seringue','seringue');
	switchfct('#bistouri','.bistouri');
	switchfct('#ciseaux','.ciseaux');
	switchfct('#pipette','.pipette');
    
    function infoContext(btnSurvole,msgAAfficher,msgACacher){
		$(btnSurvole).mousedown(function(){
			$(msgACacher).hide();
			$(msgAAfficher).fadeIn('slow');
		});
	}
	infoContext('.btn-flacon-tri','#flacon-tri','#flacon-ballon');
	infoContext('.btn-flacon-ballon','#flacon-ballon','#flacon-tri');
	
	function reinitialiser(btnSurvole,msgAAfficher,msgACacher){
		$(btnSurvole).mousedown(function(){
			if(btnSurvole === '.btn-tube-init'){
				couleur_tube = "rien";
				$(msgACacher).hide();
				$(msgAAfficher).fadeIn('slow');
			}
			if(btnSurvole === '.btn-flacon-init'){
				couleur_flacon = "rien";
				$(msgACacher).hide();
				$(msgAAfficher).fadeIn('slow');
			}
			if(btnSurvole === '.btn-lame-init'){
				couleur_lame1 = "rien";
				couleur_lame2 = "rien";
				couleur_lame3 = "rien";
				$("#lame_1").replaceWith("<img src='./bootstrap/img/icones/lame_grand2.png' class='lame_grand' id='lame_1' style='display:none;'/> ");
				$("#lame_1").fadeIn('slow');
				$("#lame_2").replaceWith("<img src='./bootstrap/img/icones/lame_grand2.png' class='lame_grand' id='lame_2' style='display:none;' />");
				$("#lame_2").fadeIn('slow');
				$("#lame_3").replaceWith("<img src='./bootstrap/img/icones/lame_grand2.png' class='lame_grand' id='lame_3'style='display:none;' />");
				$("#lame_3").fadeIn('slow');
				testAB = false;
				testB = false;
				testA = false;
			}
			
		});
	}
	
	function agglutinationSanguine(gp_sanguin){
		if(gp_sanguin === 'A'){
			if(couleur_lame1 === "anti-A_sangA" || couleur_lame1 === "anti-AB_sangA"){
				if(couleur_lame1 === "anti-A_sangA"){
					$("#lame_1").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_A.png' class='lame_grand' id='lame_1' style='display:none;'/> ");
				}else{
					$("#lame_1").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_AB.png' class='lame_grand' id='lame_1' style='display:none;'/> ");
				}
				$("#lame_1").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}else if(couleur_lame1 === "anti-RH_sangA"){
				if(rhesus === 1)
					$("#lame_1").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_1' style='display:none;'/> ");
				$("#lame_1").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
			if(couleur_lame2 === "anti-A_sangA" || couleur_lame2 === "anti-AB_sangA"){
				if(couleur_lame2 === "anti-A_sangA"){
					$("#lame_2").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_A.png' class='lame_grand' id='lame_2' style='display:none;'/> ");
				}else{
					$("#lame_2").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_AB.png' class='lame_grand' id='lame_2' style='display:none;'/> ");
				}
				$("#lame_2").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}else if(couleur_lame2 === "anti-RH_sangA"){
				if(rhesus === 1)
					$("#lame_2").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_2' style='display:none;'/> ");
				$("#lame_2").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
			if(couleur_lame3 === "anti-A_sangA" || couleur_lame3 === "anti-AB_sangA"){
				if(couleur_lame3 === "anti-A_sangA"){
					$("#lame_3").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_A.png' class='lame_grand' id='lame_3' style='display:none;'/> ");
				}else{
					$("#lame_3").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_AB.png' class='lame_grand' id='lame_3' style='display:none;'/> ");
				}
				$("#lame_3").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}else if(couleur_lame3 === "anti-RH_sangA"){
				if(rhesus === 1)
					$("#lame_3").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_3' style='display:none;'/> ");
				$("#lame_3").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
			if(couleur_lame4 === "anti-A_sangA" || couleur_lame4 === "anti-AB_sangA"){
				if(couleur_lame4 === "anti-A_sangA"){
					$("#lame_4").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_A.png' class='lame_grand' id='lame_4' style='display:none;'/> ");
				}else{
					$("#lame_4").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_AB.png' class='lame_grand' id='lame_4' style='display:none;'/> ");
				}
				$("#lame_4").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}else if(couleur_lame4 === "anti-RH_sangA"){
				if(rhesus === 1)
					$("#lame_4").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_4' style='display:none;'/> ");
				$("#lame_4").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
		}else if(gp_sanguin === 'B'){
			if(couleur_lame1 === "anti-B_sangB" || couleur_lame1 === "anti-AB_sangB"){
				if(couleur_lame1 === "anti-B_sangB"){
					$("#lame_1").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_B.png' class='lame_grand' id='lame_1' style='display:none;'/> ");
				}else{
					$("#lame_1").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_AB.png' class='lame_grand' id='lame_1' style='display:none;'/> ");
				}
				$("#lame_1").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}else if(couleur_lame1 === "anti-RH_sangB"){
				if(rhesus === 1)
					$("#lame_1").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_1' style='display:none;'/> ");
				$("#lame_1").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
			if(couleur_lame2 === "anti-B_sangB" || couleur_lame2 === "anti-AB_sangB"){
				if(couleur_lame2 === "anti-B_sangB"){
					$("#lame_2").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_B.png' class='lame_grand' id='lame_2' style='display:none;'/> ");
				}else{
					$("#lame_2").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_AB.png' class='lame_grand' id='lame_2' style='display:none;'/> ");
				}
				$("#lame_2").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}else if(couleur_lame2 === "anti-RH_sangB"){
				if(rhesus === 1)
					$("#lame_2").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_2' style='display:none;'/> ");
				$("#lame_2").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
			}
			if(couleur_lame3 === "anti-B_sangB" || couleur_lame3 === "anti-AB_sangB"){
				if(couleur_lame3 === "anti-B_sangB"){
					$("#lame_3").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_B.png' class='lame_grand' id='lame_3' style='display:none;'/> ");
				}else{
					$("#lame_3").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_AB.png' class='lame_grand' id='lame_3' style='display:none;'/> ");
				}
				$("#lame_3").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}else if(couleur_lame3 === "anti-RH_sangB"){
				if(rhesus === 1)
					$("#lame_3").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_3' style='display:none;'/> ");
				$("#lame_3").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
			if(couleur_lame4 === "anti-B_sangB" || couleur_lame4 === "anti-AB_sangB"){
				if(couleur_lame4 === "anti-B_sangB"){
					$("#lame_4").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_B.png' class='lame_grand' id='lame_4' style='display:none;'/> ");
				}else{
					$("#lame_4").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_AB.png' class='lame_grand' id='lame_4' style='display:none;'/> ");
				}
				$("#lame_4").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
			}else if(couleur_lame4 === "anti-RH_sangB"){
				$("#lame_4").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_4' style='display:none;'/> ");
				$("#lame_4").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
		}else if(gp_sanguin === 'AB'){
			if(couleur_lame1 === "anti-A_sangAB" || couleur_lame1 === "anti-B_sangAB" || couleur_lame1 === "anti-AB_sangAB"){
				if(couleur_lame1 === "anti-A_sangAB"){
					$("#lame_1").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_A.png' class='lame_grand' id='lame_1' style='display:none;'/> ");
				}else if(couleur_lame1 === "anti-B_sangAB"){
					$("#lame_1").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_B.png' class='lame_grand' id='lame_1' style='display:none;'/> ");
				}else if(couleur_lame1 === "anti-AB_sangAB"){
					$("#lame_1").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_AB.png' class='lame_grand' id='lame_1' style='display:none;'/> ");
				}
				$("#lame_1").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}else if(couleur_lame1 === "anti-RH_sangAB"){
				if(rhesus === 1)
					$("#lame_1").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_1' style='display:none;'/> ");
				$("#lame_1").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
			if(couleur_lame2 === "anti-B_sangAB" || couleur_lame2 === "anti-AB_sangAB" || couleur_lame2 === "anti-A_sangAB"){
				if(couleur_lame2 === "anti-A_sangAB"){
					$("#lame_2").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_A.png' class='lame_grand' id='lame_2' style='display:none;'/> ");
				}else if(couleur_lame2 === "anti-B_sangAB"){
					$("#lame_2").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_B.png' class='lame_grand' id='lame_2' style='display:none;'/> ");
				}else if(couleur_lame2 === "anti-AB_sangAB"){
					$("#lame_2").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_AB.png' class='lame_grand' id='lame_2' style='display:none;'/> ");
				}
				$("#lame_2").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}else if(couleur_lame2 === "anti-RH_sangAB"){
				if(rhesus === 1)
					$("#lame_2").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_2' style='display:none;'/> ");
				$("#lame_2").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
			if(couleur_lame3 === "anti-B_sangAB" || couleur_lame3 === "anti-AB_sangAB" || couleur_lame3 === "anti-A_sangAB"){
				if(couleur_lame3 === "anti-A_sangAB"){
					$("#lame_3").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_A.png' class='lame_grand' id='lame_3' style='display:none;'/> ");
				}else if(couleur_lame3 === "anti-B_sangAB"){
					$("#lame_3").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_B.png' class='lame_grand' id='lame_3' style='display:none;'/> ");
				}else if(couleur_lame3 === "anti-AB_sangAB"){
					$("#lame_3").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_AB.png' class='lame_grand' id='lame_3' style='display:none;'/> ");
				}
				$("#lame_3").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}else if(couleur_lame3 === "anti-RH_sangAB"){
				if(rhesus === 1)
					$("#lame_3").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_3' style='display:none;'/> ");
				$("#lame_3").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
			if(couleur_lame4 === "anti-B_sangAB" || couleur_lame4 === "anti-AB_sangAB" || couleur_lame4 === "anti-A_sangAB"){
				if(couleur_lame4 === "anti-A_sangAB"){
					$("#lame_4").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_A.png' class='lame_grand' id='lame_4' style='display:none;'/> ");
				}else if(couleur_lame4 === "anti-B_sangAB"){
					$("#lame_4").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_B.png' class='lame_grand' id='lame_4' style='display:none;'/> ");
				}else if(couleur_lame4 === "anti-AB_sangAB"){
					$("#lame_4").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_AB.png' class='lame_grand' id='lame_4' style='display:none;'/> ");
				}
				$("#lame_4").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}else if(couleur_lame4 === "anti-RH_sangAB"){
				if(rhesus === 1)
					$("#lame_4").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_4' style='display:none;'/> ");
				$("#lame_4").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
		}else if(gp_sanguin === 'O'){
			if(couleur_lame1 === "anti-RH_sangO"){
				if(rhesus === 1)
					$("#lame_1").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_1' style='display:none;'/> ");
				$("#lame_1").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
			if(couleur_lame2 === "anti-RH_sangO"){
				if(rhesus === 1)
					$("#lame_2").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_2' style='display:none;'/> ");
				$("#lame_2").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
			if(couleur_lame3 === "anti-RH_sangO"){
				if(rhesus === 1)
					$("#lame_3").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_3' style='display:none;'/> ");
				$("#lame_3").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
			if(couleur_lame4 === "anti-RH_sangO"){
				if(rhesus === 1)
					$("#lame_4").replaceWith("<img src='./bootstrap/img/icones/lame_grand2_rouge_aglutinat_RH.png' class='lame_grand' id='lame_4' style='display:none;'/> ");
				$("#lame_4").fadeIn('slow');
				dejaAgglutine = true;
				fini = true;
				$("div input").removeAttr("disabled");
			}
		}
	}
	
	setInterval(agglutinationSanguine,10000,gp_sanguin);
	
	reinitialiser('.btn-tube-init','#tb_vide','.tube_essai');
	reinitialiser('.btn-flacon-init','#flacon_tri_vide','.flacon');
	reinitialiser('.btn-lame-init','#lam_vide','.lame_grand');
	$("#zone_resultat").css("cursor","pointer");
});