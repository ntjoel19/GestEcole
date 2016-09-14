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
 * Servlet implementation class enseignants
 */
@WebServlet(
	    name = "enseignants",
	    description = "gestion des enseignants",
	    urlPatterns = {"/enseignants"}
	)
public class enseignants extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Persistance p = new Persistance();
	java.sql.Connection c=null;
	ResultSet result=null;
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public enseignants() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession(true);
		p.encodage(request);
		String nom_prof, pren_prof, adr_prof, tel_prof,classe,matiere,fonction,id_prof,niveau_classe,num_classe,specialite;
		int age,i=1;
		String attrib_tableau = "";
		
		try {
			c = p.etablirConnexion("jdbc:postgresql://localhost:5432/GestEcole2","postgres","infoday");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//String requete="SELECT * FROM  prof,classe,matiere,prof_matiere_classe WHERE prof.id_prof=prof_matiere_classe.prof AND classe.id_cla=prof_matiere_classe.classe AND matiere.id_mat=prof_matiere_classe.matiere";
		String requete="SELECT * FROM  enseignant";
		try {
			result = p.execReqLecture(c, requete);
			while(result.next()){
				nom_prof = result.getString("nom");
				pren_prof = result.getString("prenom");
				tel_prof = result.getString("telephone");
				adr_prof = result.getString("adresse");
				specialite = result.getString("specialite");
				attrib_tableau += "<tr>"+
									      	"<td>"+
									      	   "<div class='checkbox'>"+
												  "<input id='"+tel_prof+"' type='checkbox' value=''>"+
									      	   "</div>"+
									      	"</td>"+
									        "<td>"+i+"</td>"+
									        "<td>"+nom_prof+"</td>"+
									        "<td>"+pren_prof+"</td>"+
									        "<td>"+adr_prof+"</td>"+
									        "<td>"+tel_prof+"</td>"+
									        "<td>"+specialite+"</td>"+
								   "</tr>";
				i++;
			}
			request.setAttribute("liste_prof", attrib_tableau);
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
		this.getServletContext().getRequestDispatcher("/WEB-INF/enseignants/enseignants.jsp").forward(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
