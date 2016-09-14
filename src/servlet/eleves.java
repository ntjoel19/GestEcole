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
 * Servlet implementation class eleves
 */
@WebServlet(
	    name = "eleve",
	    description = "gestion des eleves",
	    urlPatterns = {"/eleves"}
	)
public class eleves extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Persistance p = new Persistance();
	java.sql.Connection c=null;
	ResultSet result=null;   
    /**
     * @see HttpServlet#HttpServlet()
     */
    public eleves() {
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
		String nom_elv, pren_elv, sexe, classe,num_classe,option,matricule,date_nais,adresse;
		int age,i=1;
		String attrib_tableau = "";
		
		try {
			c = p.etablirConnexion("jdbc:postgresql://localhost:5432/GestEcole2","postgres","infoday");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		String requete="SELECT * FROM eleve";
		String requete2="select * from classe";
		String attrib_liste_classes=null;
		try {
			result = p.execReqLecture(c, requete);
			while(result.next()){
				nom_elv = result.getString("nom");
				pren_elv = result.getString("prenom");
				sexe = result.getString("sexe");
				classe = result.getString("niveau");
				num_classe = result.getString("numero_classe");
				option = result.getString("intitule_serie");
				matricule = result.getString("matricule_eleve");
				date_nais = result.getString("date_nais");
				adresse = result.getString("adresse");
				
				attrib_tableau += "<tr>"+
									      	"<td>"+
									      		"<div class='checkbox'>"+
												  "<input id='"+matricule+"' type='checkbox' value=''>"+
												"</div>"+
									      	"</td>"+
									        "<td>"+i+"</td>"+
									        "<td>"+matricule+"</td>"+
									        "<td>"+nom_elv+"</td>"+
									        "<td>"+pren_elv+"</td>"+
									        "<td>"+date_nais+"</td>"+
									        "<td>"+sexe+"</td>"+
									        "<td>"+classe+" "+option+"</td>"+
									        "<td>"+num_classe+"</td>"+
								   "</tr>";
				i++;
			}
			request.setAttribute("liste_elv", attrib_tableau);
			
			result = p.execReqLecture(c, requete2);
			while(result.next()){
				attrib_liste_classes += "<option value='"+result.getString("niveau_classe")+"-"+result.getString("numero_classe")+"'>"+result.getString("niveau_classe")+"-"+result.getString("numero_classe")+"</option>"; 
			}
			request.setAttribute("liste_classe", attrib_liste_classes);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			p.fermerConnexion(c);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		this.getServletContext().getRequestDispatcher("/WEB-INF/eleves/eleves.jsp").forward(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
