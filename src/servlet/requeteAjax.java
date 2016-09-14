package servlet;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.Persistance;

/**
 * Servlet implementation class requeteAjax
 */
@WebServlet(
		name = "requeteAjax",
	    description = "gestion des requetes ajax",
	    urlPatterns = {"/requeteAjax"}
		)
public class requeteAjax extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Persistance p = new Persistance();
	java.sql.Connection c=null;
	ResultSet result=null;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public requeteAjax() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession(true);
		p.encodage(request);
		String attrib_liste_option="";
		try {
			c = p.etablirConnexion("jdbc:postgresql://localhost:5432/GestEcole2","postgres","infoday");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		String operation=request.getParameter("btn");
		
		if(operation.equals("maj_option_classe")){
			String param=request.getParameter("param");
			try {
				ResultSet result=p.execReqLecture(c, "select intitule_serie from classe,appartenir where classe.niveau_classe=appartenir.niveau_classe AND classe.numero_classe=appartenir.numero_classe AND classe.niveau_classe='"+param.split("-")[0]+"'");
				
				while(result.next()){
					attrib_liste_option += "<option value='"+result.getString("intitule_serie")+"'>"+result.getString("intitule_serie")+"</option>"; 
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			//System.out.println("j'affiche : "+list);
			response.setContentType("text/html"); 
			response.setCharacterEncoding("UTF-8");
			response.setHeader("Access-Control-Allow-Origin", "*");
	        response.getWriter().write(attrib_liste_option);
			
			try {
				p.fermerConnexion(c);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return;
		}else if(operation.equals("suppr_eleve")){
			String[] matricule=request.getParameter("matricule").split("--");
			String criteria = "matricule_eleve=";
			
			String nom_elv, pren_elv, sexe, classe,option,matr,num_classe,date_nais,adresse;
			int age,i;
			String attrib_tableau = "";
			
			if(matricule.length==2){
				criteria += "'"+matricule[0]+"'";
			}else{
				for(i=0;i<matricule.length-2;i++){
					criteria += "'"+matricule[i]+"' OR matricule_eleve = ";
				}
				criteria += "'"+matricule[matricule.length-2]+"'";
			}
			
			i=1;
			System.out.println(criteria);
			try {
				//p.execReqEcriture(c, "Delete from inscrire where "+criteria);
				p.execReqEcriture(c, "Delete from eleve where "+criteria);
				String requete="SELECT * FROM  eleve";
				String requete2="select * from classe";
				
				result = p.execReqLecture(c, requete);
				while(result.next()){
					nom_elv = result.getString("nom");
					pren_elv = result.getString("prenom");
					sexe = result.getString("sexe");
					classe = result.getString("niveau");
					num_classe = result.getString("numero_classe");
					option = result.getString("intitule_serie");
					matr = result.getString("matricule_eleve");
					date_nais = result.getString("date_nais");
					adresse = result.getString("adresse");
					
					attrib_tableau += "<tr>"+
										      	"<td>"+
										      		"<div class='checkbox'>"+
													  "<input id='"+matr+"' type='checkbox' value=''>"+
													"</div>"+
										      	"</td>"+
										        "<td>"+i+"</td>"+
										        "<td>"+matr+"</td>"+
										        "<td>"+nom_elv+"</td>"+
										        "<td>"+pren_elv+"</td>"+
										        "<td>"+date_nais+"</td>"+
										        "<td>"+sexe+"</td>"+
										        "<td>"+classe+" "+option+"</td>"+
										        "<td>"+num_classe+"</td>"+
									   "</tr>";
					i++;
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			//System.out.println("j'affiche : "+list);
			response.setContentType("text/html"); 
			response.setCharacterEncoding("UTF-8");
			response.setHeader("Access-Control-Allow-Origin", "*");
	        response.getWriter().write(attrib_tableau);
			
			try {
				p.fermerConnexion(c);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return;
			
		}else if(operation.equals("filtrer_eleves")){
			String nom_elv, pren_elv, sexe, classe,option,matr,num_classe,date_nais,adresse;
			String attrib_tableau="";
			int age,i=1;
			String param=request.getParameter("param");
			System.out.println(param);
			try {
				String requete="";
				//String requete2="SELECT * FROM  classe";
				
				if(param.equals("--classe--")){
					requete="SELECT * FROM  eleve";
				}else{
					requete="SELECT * FROM  eleve WHERE niveau='"+param.split("-")[0]+"' AND numero_classe='"+param.split("-")[1]+"'";
				}
				
				result = p.execReqLecture(c, requete);
				while(result.next()){
					nom_elv = result.getString("nom");
					pren_elv = result.getString("prenom");
					sexe = result.getString("sexe");
					classe = result.getString("niveau");
					num_classe = result.getString("numero_classe");
					option = result.getString("intitule_serie");
					matr = result.getString("matricule_eleve");
					date_nais = result.getString("date_nais");
					adresse = result.getString("adresse");
					
					attrib_tableau += "<tr>"+
										      	"<td>"+
										      		"<div class='checkbox'>"+
													  "<input id='"+matr+"' type='checkbox' value=''>"+
													"</div>"+
										      	"</td>"+
										        "<td>"+i+"</td>"+
										        "<td>"+matr+"</td>"+
										        "<td>"+nom_elv+"</td>"+
										        "<td>"+pren_elv+"</td>"+
										        "<td>"+date_nais+"</td>"+
										        "<td>"+sexe+"</td>"+
										        "<td>"+classe+" "+option+"</td>"+
										        "<td>"+num_classe+"</td>"+
									   "</tr>";
					i++;
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			//System.out.println("j'affiche : "+list);
			response.setContentType("text/html"); 
			response.setCharacterEncoding("UTF-8");
			response.setHeader("Access-Control-Allow-Origin", "*");
	        response.getWriter().write(attrib_tableau);
			
			try {
				p.fermerConnexion(c);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return;
		}else if(operation.equals("modifier_eleve")){
			//System.out.println("j'affiche : "+list);
			String nom_elv="", pren_elv="", sexe="", classe="",option="",matr="",date_nais="",num_classe="";
			String attrib_tableau="";
			int age,i=1;
			String param=request.getParameter("param");
			try {
				String requete="";
				String requete2="SELECT niveau_classe FROM  classe";
				requete="SELECT * FROM  eleve WHERE matricule_eleve='"+param+"'";
				result = p.execReqLecture(c, requete);
				while(result.next()){
					nom_elv = result.getString("nom");
					pren_elv = result.getString("prenom");
					sexe = result.getString("sexe");
					classe = result.getString("niveau");
					num_classe = result.getString("numero_classe");
					option = result.getString("intitule_serie");
					date_nais = result.getString("date_nais");
					matr = result.getString("matricule_eleve");
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println(classe+" et "+option);
			response.setContentType("text/html"); 
			response.setCharacterEncoding("UTF-8");
			response.setHeader("Access-Control-Allow-Origin", "*");
	        response.getWriter().write(nom_elv+"--"+pren_elv+"--"+date_nais+"--"+matr+"--"+classe+"--"+option+"--"+num_classe+"--"+sexe);
			
			try {
				p.fermerConnexion(c);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return;
		}
			
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		
		
		try {
			p.fermerConnexion(c);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
