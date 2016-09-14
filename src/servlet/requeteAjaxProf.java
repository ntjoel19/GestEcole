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
 * Servlet implementation class requeteAjaxProf
 */
@WebServlet(
		name = "requeteAjaxProf",
	    description = "gestion des requetes ajax",
	    urlPatterns = {"/requeteAjaxProf"}
		)
public class requeteAjaxProf extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Persistance p = new Persistance();
	java.sql.Connection c=null;
	ResultSet result=null;
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public requeteAjaxProf() {
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
		
		if(operation.equals("modifier_enseignant")){
			String attrib_tableau="",nom="",prenom="",adresse="",tel="",specialite="",hidden="";
			int age,i=1;
			String param=request.getParameter("param");
			
			try {
				String requete="";
				String requete2="SELECT * FROM  enseignant WHERE telephone="+param;
				result = p.execReqLecture(c, requete2);
				while(result.next()){
					nom = result.getString("nom");
					prenom = result.getString("prenom");
					adresse = result.getString("adresse");
					tel = result.getString("telephone");
					specialite = result.getString("specialite");
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			response.setContentType("text/html"); 
			response.setCharacterEncoding("UTF-8");
			response.setHeader("Access-Control-Allow-Origin", "*");
	        response.getWriter().write(nom+"--"+prenom+"--"+adresse+"--"+tel+"--"+specialite);
	        
	        try {
				p.fermerConnexion(c);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	        //System.out.println(nom+"--"+prenom+"--"+adresse+"--"+tel+"--"+specialite);
			return;
			
		}else if(operation.equals("modifier_enseignant")){
			String[] tel=request.getParameter("tel").split("--");
			String criteria = "telephone=";
			String criteria2 = "tel_prof=";
			
			String nom, pren, adresse,telephone,specialite;
			int i;
			String attrib_tableau = "";
			
			if(tel.length==2){
				criteria += "'"+tel[0]+"'";
				criteria2 += "'"+tel[0]+"'";
			}else{
				for(i=0;i<tel.length-2;i++){
					criteria += "'"+tel[i]+"' OR telephone = ";
					criteria2 += "'"+tel[i]+"' OR telephone = ";
				}
				criteria += "'"+tel[tel.length-2]+"'";
				criteria2 += "'"+tel[tel.length-2]+"'";
			}
			
			i=1;
			System.out.println(criteria);
			
			try {
				p.execReqEcriture(c, "Delete from enseignant where "+criteria);
				p.execReqEcriture(c, "Delete from dispenser where "+criteria2);
				String requete2="select * from enseignant";
				
				
				result = p.execReqLecture(c, requete2);
				while(result.next()){
					nom = result.getString("nom");
					pren = result.getString("prenom");
					telephone = result.getString("telephone");
					adresse = result.getString("adresse");
					specialite = result.getString("specialite");
					attrib_tableau += "<tr>"+
										      	"<td>"+
										      	   "<div class='checkbox'>"+
													  "<input id='"+telephone+"' type='checkbox' value=''>"+
										      	   "</div>"+
										      	"</td>"+
										        "<td>"+i+"</td>"+
										        "<td>"+nom+"</td>"+
										        "<td>"+pren+"</td>"+
										        "<td>"+adresse+"</td>"+
										        "<td>"+telephone+"</td>"+
										        "<td>"+specialite+"</td>"+
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
		}
		
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
