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
	var pipette_select = 0;
    var bistouri_select = 0;
    var ciseaux_select = 0;
    var seringue_select = 0;
    var blouse_select = 0;
    
    var couleur_lame = "rien";
    var couleur_pipette = "rien";
    var couleur_flacon = "rien";
    var couleur_tube = "rien";
    var lame_sur_microsc = "rien";
    
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
    var caryo;
    if(caryo_genere === 0) caryo=copieTableaux(caryo_garcon_sein);
    else if (caryo_genere === 1) caryo=copieTableaux(caryo_fille_seine);
    else if (caryo_genere === 2) caryo=copieTableaux(caryo_trisomie_21);
    else if (caryo_genere === 3) caryo=copieTableaux(caryo_kleinefelter);
    var caryotype_genere = tb_caryotype[caryo_genere];
    //alert(caryotype_genere);
    
    $("#btn_ranger").on('click',function(e){
    	//$(".no_border").remove();
    	var length = caryo.length;
    	var loop = 1;
    	var i=0;
    	for(j=1;j<=length/2+1;j++){
			if(caryo_genere === 2 && j===21){
				$("#case_chr"+j).append(caryo[i]);
				i++;
				$("#case_chr"+j).append(caryo[i]);
				i++;
				$("#case_chr"+j).append(caryo[i]);
				i++;
			}else if(caryo_genere === 3 && j===24){
				$("#case_chr"+j).append(caryo[i]);
				i++;
			}else{
				$("#case_chr"+j).append(caryo[i]);
				i++;
				$("#case_chr"+j).append(caryo[i]);
				i++;
			}
    		
		}
    });
    
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
    	$("#result").hide();
		if(caryotype_genere === $(this).attr('id') && lame_sur_microsc === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp"){
			$("#bravo").show();
		}else if(caryotype_genere != $(this).attr('id') && lame_sur_microsc === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp"){
			$("#echec").show();
		}else{
			alert("vous devez d'abord realiser l'experience");
		}
	});
    
	$("#cellule_sang").on('click',function(e){
		e.preventDefault();
		if(pipette_select===1){
			$("body").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			couleur_pipette = "sang"+tb_groupe_sanguin[groupe_sanguin];
			compteur_operation++;
			$("#consol").val($("#consol").val()+compteur_operation+"-Extraction de sang avec la pipette\n");
		}else{
			alert('tu dois selectionner prealablement la pipette ou la seringue');
		}
	});
	$("#anti-A").on('click',function(e){
		e.preventDefault();
		if(pipette_select===1){
			$("body").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			couleur_pipette = "anti-A";
			compteur_operation++;
			$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du serum anti A avec la pipette\n");
		}else{
			alert('tu dois selectionner prealablement la pipette ou la seringue');
		}
	});
	$("#anti-B").on('click',function(e){
		e.preventDefault();
		if(pipette_select===1){
			$("body").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			couleur_pipette = "anti-B";
			compteur_operation++;
			$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du serum anti B avec la pipette\n");
		}else{
			alert('tu dois selectionner prealablement la pipette ou la seringue');
		}
	});
	$("#anti-AB").on('click',function(e){
		e.preventDefault();
		if(pipette_select===1){
			$("body").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			couleur_pipette = "anti-AB";
			compteur_operation++;
			$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du serum anti AB avec la pipette\n");
		}else{
			alert('tu dois selectionner prealablement la pipette ou la seringue');
		}
	});
	$("#metyl-pp").on('click',function(e){
		e.preventDefault();
		if(pipette_select===1){
			$("body").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			couleur_pipette = "metyl-pp";
			compteur_operation++;
			$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du methyl de propylene avec la pipette\n");
		}else{
			alert('tu dois selectionner prealablement la pipette ou la seringue');
		}
	});
	$("#b-coomas").on('click',function(e){
		e.preventDefault();
		if(pipette_select===1){
			$("body").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			couleur_pipette = "b-coomas";
			compteur_operation++;
			$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du bleu de coomasie avec la pipette\n");
		}else{
			alert('tu dois selectionner prealablement la pipette ou la seringue');
		}
	});
	$("#colchicine").on('click',function(e){
		e.preventDefault();
		if(pipette_select===1){
			$("body").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			couleur_pipette = "colchicine";
			compteur_operation++;
			$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du la colchicine avec la pipette\n");
		}else{
			alert('tu dois selectionner prealablement la pipette ou la seringue');
		}
	});
	
	$("#cellule_peau").on('click',function(e){
		e.preventDefault();
		if(pince_select===1){
			$("body").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
			pipette_select=2;
			couleur_pipette = "sang"+tb_groupe_sanguin[groupe_sanguin];
			compteur_operation++;
			$("#consol").val($("#consol").val()+compteur_operation+"-Extraction de la peau avec la pince\n");
		}else{
			alert('tu dois selectionner prealablement la pipette ou la seringue');
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
    		$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
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
    		$("body").css("cursor","url('././bootstrap/curseur/bistouri.ico'),pointer");
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
    		$("body").css("cursor","url('././bootstrap/curseur/ciseaux.ico'),pointer");
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
    		$("body").css("cursor","url('././bootstrap/curseur/seringue.ico'),pointer");
    		$(".cellule").css("cursor","url('././bootstrap/curseur/seringue.ico'),pointer");
    		compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Seringue selectionnée\n");
    	}else{
			alert("Avant toute manipulation le port de la blouse et du gant est obligatoire!")
		}
	});    
    
    /* gestion des combinaisons dans les differents tubes */
    $(".flacon_conique").on('click',function(e){
    	$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
		$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
		compteur_operation++;
    	if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_flacon === "rien"){
    		couleur_flacon = "sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".flacon_conique").hide();
			$("#flc_rouge").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "metyl-pp" && couleur_flacon === "rien"){
    		couleur_flacon = "metyl-pp"
			$(".flacon_conique").hide();
			$("#flc_violet").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du methyle de propylene au flacon conique via la pipette\n");
    	}
    	if(couleur_pipette === "b-coomas" && couleur_flacon === "rien"){
    		couleur_flacon = "b-coomas"
    		$(".flacon_conique").hide();
			$("#flc_bleu").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du bleu de Coomasie au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "colchicine" && couleur_flacon === "rien"){
    		couleur_flacon = "colchicine"
    		$(".flacon_conique").hide();
			$("#flc_transp").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout de la colchicine au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-A" && couleur_flacon === "rien"){
    		couleur_flacon = "anti-A"
    		$(".flacon_conique").hide();
			$("#flc_transp").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-A au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-B" && couleur_flacon === "rien"){
    		couleur_flacon = "anti-B"
    		$(".flacon_conique").hide();
			$("#flc_transp").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-B au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-AB" && couleur_flacon === "rien"){
    		couleur_flacon = "anti-AB"
    		$(".flacon_conique").hide();
			$("#flc_transp").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-AB au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".flacon_conique").hide();
			$("#flc_rouge").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "metyl-pp" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".flacon_conique").hide();
			$("#flc_rouge").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au methyle de propylene dans flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "b-coomas" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
    		$(".flacon_conique").hide();
			$("#flc_violet").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au bleu de Coomasie dans le flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "colchicine" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
    		$(".flacon_conique").hide();
			$("#flc_rouge").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang à la colchicine dans flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-A" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
    		$(".flacon_conique").hide();
			$("#flc_rouge").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-A dans le flacon conique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-B" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
    		$(".flacon_conique").hide();
			$("#flc_rouge").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-B dans flacon conique via la pipette\n");
    	}else if(couleur_pipette === "anti-AB" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_flacon = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
    		$(".flacon_conique").hide();
			$("#flc_rouge").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-AB dans le flacon conique via la pipette\n");
    	}else if(couleur_flacon === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_pipette === "metyl-pp"){
    		couleur_flacon = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp";
    		$(".flacon_conique").hide();
			$("#flc_violet").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du bleu de coomasie au melange sang-colchicine dans le flacon conique via la pipette\n");
    	}else if(couleur_pipette === "rien"){
    		couleur_pipette = couleur_tube;
    		$(".body").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du sang au tube à essai via la pipette\n");
    		return;
    	}else{
    		$(".flacon_conique").hide();
			$("#flc_interdit").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Melange interdit\n");
    	}
    	couleur_pipette="rien";
		pipette_select = 1;
	});
    $(".flacon_spherique").on('mousedown',function(e){
    	$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
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
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du methyle de propylene au flacon spherique via la pipette\n");
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
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout de la colchicine au flacon spherique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-A" && couleur_flacon === "rien"){
    		couleur_flacon = "anti-A"
    		$(".flacon_spherique").hide();
			$("#fls_transp").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-A au flacon spherique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-B" && couleur_flacon === "rien"){
    		couleur_flacon = "anti-B"
    		$(".flacon_spherique").hide();
			$("#fls_transp").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-B au flacon spherique via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-AB" && couleur_flacon === "rien"){
    		couleur_flacon = "anti-AB"
    		$(".flacon_spherique").hide();
			$("#fls_transp").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-AB au flacon spherique via la pipette\n");
    	}else
    		if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_flacon = "sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".flacon_spherique").hide();
    			$("#fls_rouge").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au flacon spherique via la pipette\n");
        	}else
        	if(couleur_pipette === "metyl-pp" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_flacon = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".flacon_spherique").hide();
    			$("#fls_violet").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au methyle de propylene dans flacon spherique via la pipette\n");
        	}else
        	if(couleur_pipette === "b-coomas" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_flacon = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
        		$(".flacon_spherique").hide();
    			$("#fls_bleu").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au bleu de Coomasie dans le flacon spherique via la pipette\n");
        	}else
        	if(couleur_pipette === "colchicine" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_flacon = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
        		$(".flacon_spherique").hide();
    			$("#fls_rouge").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang à de la colchicine dans flacon spherique via la pipette\n");
        	}else
        	if(couleur_pipette === "anti-A" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_flacon = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
        		$(".flacon_spherique").hide();
    			$("#fls_transp").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-A dans le flacon spherique via la pipette\n");
        	}else
        	if(couleur_pipette === "anti-B" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_flacon = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
        		$(".flacon_spherique").hide();
    			$("#fls_transp").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout sang au serum anti-B dans le flacon spherique via la pipette\n");
        	}else
        	if(couleur_pipette === "anti-AB" && couleur_flacon === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_flacon = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
        		$(".flacon_spherique").hide();
    			$("#fls_transp").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-AB dans flacon spherique via la pipette\n");
        	}else if(couleur_flacon === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_pipette === "metyl-pp"){
        		couleur_flacon = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp";
        		$(".flacon_spherique").hide();
    			$("#fls_violet").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du bleu de coomasie au melange sang-colchicine dans le flacon conique via la pipette\n");
        	}else if(couleur_pipette === "rien"){
        		couleur_pipette = couleur_tube;
        		$(".body").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
        		$("#consol").val($("#consol").val()+compteur_operation+"-extraction du sang au tube à essai via la pipette\n");
        		return;
        	}else{
            	$(".flacon_spherique").hide();
        		$("#fls_interdit").fadeIn("slow");
            	$("#consol").val($("#consol").val()+compteur_operation+"-?elqnge interdit\n");
            }
    	pipette_select = 1;
    	couleur_pipette="rien";
	});
    $(".tube_essai").on('mousedown',function(e){
    	$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
		$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
		compteur_operation++;
    	if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_tube === "rien"){
    		couleur_tube = "sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".tube_essai").hide();
			$("#tb_rouge").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au tube à essai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    	if(couleur_pipette === "colchicine" && couleur_tube === "rien"){
    		couleur_tube = "colchicine";
			$(".tube_essai").hide();
			$("#tb_transp").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout de la colchicine au tube à essai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    	if(couleur_pipette === "metyl-pp" && couleur_tube === "rien"){
    		couleur_tube = "metyl-pp";
			$(".tube_essai").hide();
			$("#tb_violet").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du methyl de propylene au tube à essai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    	if(couleur_pipette === "b-coomas" && couleur_tube === "rien"){
    		couleur_tube = "b-coomas";
			$(".tube_essai").hide();
			$("#tb_bleu").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du bleu de coomasie au tube à essai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    	if(couleur_pipette === "anti-A" && couleur_tube === "rien"){
    		couleur_tube = "anti-A";
			$(".tube_essai").hide();
			$("#tb_transp").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-A au tube à essai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    	if(couleur_pipette === "anti-B" && couleur_tube === "rien"){
    		couleur_tube = "anti-B";
			$(".tube_essai").hide();
			$("#tb_transp").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-B au tube à essai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    	if(couleur_pipette === "anti-AB" && couleur_tube === "rien"){
    		couleur_tube = "anti-AB";
			$(".tube_essai").hide();
			$("#tb_transp").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du serum anti-AB au tube à essai via la pipette\n");
    		couleur_pipette="rien";
    	}else
    		if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".tube_essai").hide();
    			$("#tb_rouge").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au tube à essai via la pipette\n");
        	}else
        	if(couleur_pipette === "colchicine" && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".tube_essai").hide();
    			$("#tb_rouge").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang à de la colchicine dans tube à essai via la pipette\n");
        		couleur_pipette="rien";
        	}else
        	if(couleur_pipette === "metyl-pp" && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "metyl-pp_sang";
    			$(".tube_essai").hide();
    			$("#tb_violet").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout dus sang au methyl de propylene dans le tube à essai via la pipette\n");
        		couleur_pipette="rien";
        	}else
        	if(couleur_pipette === "b-coomas" && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".tube_essai").hide();
    			$("#tb_bleu").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au bleu de coomasie dans le tube à essai via la pipette\n");
        		couleur_pipette="rien";
        	}else
        	if(couleur_pipette === "anti-A" && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".tube_essai").hide();
    			$("#tb_transp").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-A dans le tube à essai via la pipette\n");
        		couleur_pipette="rien";
        	}else
        	if(couleur_pipette === "anti-B" && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".tube_essai").hide();
    			$("#tb_transp").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-B dans le tube à essai via la pipette\n");
        		couleur_pipette="rien";
        	}else
        	if(couleur_pipette === "anti-AB" && couleur_tube === "sang"+tb_groupe_sanguin[groupe_sanguin]){
        		couleur_tube = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
    			$(".tube_essai").hide();
    			$("#tb_transp").fadeIn();
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-AB dans le tube à essai via la pipette\n");
        		couleur_pipette="rien";
        	}else if(couleur_tube === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_pipette === "metyl-pp"){
        		couleur_tube = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp";
        		$(".tube_essai").hide();
    			$("#tb_violet").fadeIn("slow");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du bleu de coomasie au melange sang-colchicine dans le flacon conique via la pipette\n");
        		couleur_pipette="rien";
        	}else if(couleur_pipette === "rien"){
        		couleur_pipette = couleur_tube;
        		$(".body").css("cursor","url('././bootstrap/curseur/pipette_sang.ico'),pointer");
        		$("#consol").val($("#consol").val()+compteur_operation+"-Extraction du sang au tube à essai via la pipette\n");
        	}else{
            	$(".tube_essai").hide();
        		$("#tb_interdit").fadeIn("slow");
            	$("#consol").val($("#consol").val()+compteur_operation+"-Melange interdit\n");
            	couleur_pipette="rien";
            }
    	pipette_select = 1;
	});
    $(".lame_grand").on('mousedown',function(e){
    	$(".microscope").css("cursor","url('././bootstrap/curseur/lame.ico'),pointer");
		$(".lame_grand").css("cursor","url('././bootstrap/curseur/lame.ico'),pointer");
		$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
		compteur_operation++;
    	if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_lame === "rien"){
    		couleur_lame = "sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".lame_grand").hide();
			$("#lam_rouge").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du sang sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "metyl-pp" && couleur_lame === "rien"){
    		couleur_lame = "metyl-pp";
			$(".lame_grand").hide();
			$("#lam_violet").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du methyl de propylene sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "b-coomas" && couleur_lame === "rien"){
    		couleur_lame = "b-coomas";
			$(".lame_grand").hide();
			$("#lam_bleu").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du bleu de coomasi sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "colchicine" && couleur_lame === "rien"){
    		couleur_lame = "colchicine";
			$(".lame_grand").hide();
			$("#lam_transp").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la colchicine sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-A" && couleur_lame === "rien"){
    		couleur_lame = "anti-A";
			$(".lame_grand").hide();
			$("#lam_bleu").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-A sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-B" && couleur_lame === "rien"){
    		couleur_lame = "anti-B";
			$(".lame_grand").hide();
			$("#lam_jaune").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-B sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-AB" && couleur_lame === "rien"){
    		couleur_lame = "anti-AB";
			$(".lame_grand").hide();
			$("#lam_transp").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du serum anti-AB sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "sang"+tb_groupe_sanguin[groupe_sanguin] && couleur_lame === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_lame = "sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".lame_grand").hide();
			$("#lam_rouge").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos du sang sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "metyl-pp" && couleur_lame === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_lame = "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".lame_grand").hide();
			$("#lam_violet").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au methyl de propylene sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "b-coomas" && couleur_lame === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_lame = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".lame_grand").hide();
			$("#lam_bleu").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au bleu de coomasi sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "colchicine" && couleur_lame === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_lame = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".lame_grand").hide();
			$("#lam_rouge").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang à la colchicine sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-A" && couleur_lame === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_lame = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".lame_grand").hide();
			$("#lam_transp").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-A sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-B" && couleur_lame === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_lame = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".lame_grand").hide();
			$("#lam_transp").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-B sur lame via la pipette\n");
    	}else
    	if(couleur_pipette === "anti-AB" && couleur_lame === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		couleur_lame = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".lame_grand").hide();
			$("#lam_transp").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du sang au serum anti-AB sur lame via la pipette\n");
    	}else if(couleur_pipette === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp" && couleur_lame === "rien"){
    		couleur_lame = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]+"_metyl-pp";
    		$(".lame_grand").hide();
			$("#lam_violet").fadeIn("slow");
    		$("#consol").val($("#consol").val()+compteur_operation+"-Ajout du bleu de coomasie au melange sang-colchicine sur la lamme via la pipette\n");
    	}else{
			$(".lame_grand").hide();
			$("#lam_interdit").fadeIn();
    		$("#consol").val($("#consol").val()+compteur_operation+"-Melange interdit\n");
    	}
    	couleur_pipette="rien";
		pipette_select = 1;
	});
    $(".microscope").on('mousedown',function(e){
    	if(couleur_lame === "sang"+tb_groupe_sanguin[groupe_sanguin]){
    		lame_sur_microsc = "sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".microscope").hide();
			$("#microsc-ready").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de sang au microscope\n");
    	}else
    	if(couleur_lame === "metyl-pp"){
    		lame_sur_microsc = "metyl-pp";
			$(".microscope").hide();
			$("#microsc-ready").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de methyl de propylene au microscope\n");
    	}else
    	if(couleur_lame === "b-coomas"){
    		lame_sur_microsc = "b-coomas";
			$(".microscope").hide();
			$("#microsc-ready").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de bleu de coomasie au microscope\n");
    	}else
    	if(couleur_lame === "colchicine"){
    		lame_sur_microsc = "colchicine";
			$(".microscope").hide();
			$("#microsc-ready").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de colchicine au microscope\n");
    	}else
    	if(couleur_lame === "anti-A"){
    		lame_sur_microsc = "anti-A";
			$(".microscope").hide();
			$("#microsc-ready").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti A au microscope\n");
    	}else
    	if(couleur_lame === "anti-B"){
    		lame_sur_microsc = "anti-B";
			$(".microscope").hide();
			$("#microsc-ready").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti B au microscope\n");
    	}else
    	if(couleur_lame === "anti-AB"){
    		lame_sur_microsc = "anti-AB";
			$(".microscope").hide();
			$("#microsc-ready").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti AB au microscope\n");
    	}else
    	if(couleur_lame === "metyl-pp_sang"+tb_groupe_sanguin[groupe_sanguin]){
    		lame_sur_microsc = "metyl-pp_sang";
			$(".microscope").hide();
			$("#microsc-ready_violet").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de methyl de propylene au microscope\n");
    	}else
    	if(couleur_lame === "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin]){
    		lame_sur_microsc = "b-coomas_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".microscope").hide();
			$("#microsc-ready").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de bleu de coomasie au microscope\n");
    	}else
    	if(couleur_lame === "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin]){
    		lame_sur_microsc = "colchicine_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".microscope").hide();
			$("#microsc-ready").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de colchicine au microscope\n");
    	}else
    	if(couleur_lame === "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin]){
    		lame_sur_microsc = "anti-A_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".microscope").hide();
			$("#microsc-ready").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti A au microscope\n");
    	}else
    	if(couleur_lame === "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin]){
    		lame_sur_microsc = "anti-B_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".microscope").hide();
			$("#microsc-ready").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'),pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti B au microscope\n");
    	}else
    	if(couleur_lame === "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin]){
    		lame_sur_microsc = "anti-AB_sang"+tb_groupe_sanguin[groupe_sanguin];
			$(".microscope").hide();
			$("#microsc-ready").fadeIn();
			$("body").css("cursor","url('././bootstrap/curseur/pipette.ico'), pointer");
			$(".cellule-reactif").css("cursor","url('././bootstrap/curseur/pipette.ico'), pointer");
			$(".lame_grand").css("cursor","url('././bootstrap/curseur/pipette.ico'), pointer");
			compteur_operation++;
    		$("#consol").val($("#consol").val()+compteur_operation+"-Depos de la lame de serum anti AB au microscope\n");
    	}else
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
			if(btnSurvole === '.btn-tube-init') couleur_tube = "rien";
			if(btnSurvole === '.btn-flacon-init') couleur_flacon = "rien";
			if(btnSurvole === '.btn-lame-init') couleur_lame = "rien";
			$(msgACacher).hide();
			$(msgAAfficher).fadeIn('slow');
		});
	}
	reinitialiser('.btn-tube-init','#tb_vide','.tube_essai');
	reinitialiser('.btn-flacon-init','#flacon_tri_vide','.flacon');
	reinitialiser('.btn-lame-init','#lam_vide','.lame_grand');
	$("#zone_resultat").css("cursor","pointer");
});