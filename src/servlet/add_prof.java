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
 * Servlet implementation class add_prof
 */
@WebServlet(
	    name = "add_prof",
	    description = "ajout prof",
	    urlPatterns = {"/add_prof"}
	)
public class add_prof extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Persistance p = new Persistance();
	java.sql.Connection c=null;
	ResultSet result=null;  
    /**
     * @see HttpServlet#HttpServlet()
     */
    public add_prof() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String nom_prof, pren_prof, adr_prof, tel_prof,classe,matiere,fonction,id_prof,niveau_classe,num_classe;
		int age,i=1;
		String attrib_tableau = "";
		String tel2edit=(String) request.getParameter("hidden");
		String nom=(String) request.getParameter("noms");
		String prenom=(String) request.getParameter("prenoms");
		String adr=(String) request.getParameter("adresse");
		String tel=(String) request.getParameter("tel");
		String specialite=(String) request.getParameter("specialites");
		//String fonction=(String) request.getParameter("fonction");
		
		try {
			c = p.etablirConnexion("jdbc:postgresql://localhost:5432/GestEcole2","postgres","infoday");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		String queryInsert="UPDATE eleve SET " +
				"nom = '"+nom+"', " +
				"prenom='"+prenom+"', " +
				"adresse='"+adr+"', " +
				"telephone='"+tel+"', " +
				"specialite='"+specialite+"' "+
				" WHERE telephone='"+tel2edit+"';";
		
		try {
			p.execReqEcriture(c, queryInsert);
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
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String nom_prof, pren_prof, adr_prof, tel_prof,classe,matiere,fonction,id_prof,niveau_classe,num_classe;
		int age,i=1;
		String attrib_tableau = "";
		String nom=(String) request.getParameter("noms");
		String prenom=(String) request.getParameter("prenoms");
		String adr=(String) request.getParameter("adresse");
		String tel=(String) request.getParameter("tel");
		String specialite=(String) request.getParameter("specialites");
		//String fonction=(String) request.getParameter("fonction");
		
		try {
			c = p.etablirConnexion("jdbc:postgresql://localhost:5432/GestEcole2","postgres","infoday");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String queryInsert="INSERT INTO enseignant (nom, prenom, adresse, telephone,specialite) " +
				"VALUES (" +
				"'"+nom+"', " +
				"'"+prenom+"', " +
				"'"+adr+"', " +
				"'"+tel+"', " +
				"'"+specialite+"' )";
		try {
			p.execReqEcriture(c, queryInsert);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
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
												  "<input id='"+nom_prof+pren_prof+adr_prof+"' type='checkbox' value='"+nom_prof+pren_prof+adr_prof+"'>"+
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
			request.setAttribute("liste_prof", attrib_tableau);/*
				result = p.execReqLecture(c, requete2);
				while(result.next()){
					attrib_liste_classes += "<option value='"+result.getString("lib_cla")+"'>"+result.getString("lib_cla")+"</option>"; 
				}
				request.setAttribute("liste_classe", attrib_liste_classes);*/
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

}
