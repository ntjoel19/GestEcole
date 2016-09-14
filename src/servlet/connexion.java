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
 * Servlet implementation class connexion
 */
@WebServlet(
	    name = "connexion",
	    description = "gestion des connexion",
	    urlPatterns = {"/connexion","/home"}
	)
public class connexion extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Persistance p = new Persistance();
	java.sql.Connection c=null;
	ResultSet result=null;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public connexion() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		this.getServletContext().getRequestDispatcher("/WEB-INF/home.jsp").forward(request,response);
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		HttpSession session = request.getSession(true);
		p.encodage(request);
		try {
			c = p.etablirConnexion("jdbc:postgresql://localhost:5432/GestEcole","postgres","infoday");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		String nom=request.getParameter("form-username");
		String password=request.getParameter("form-password");
		
		String testPseudo="SELECT * FROM comptes";
		String requete="SELECT * FROM  comptes WHERE " +
			" pseudo = '"+nom+"' AND password = '"+password+"'";
		//String requete="SELECT * FROM  personne WHERE " +
				//" pseudo = '"+nom+"' AND password = MD5('"+password+nom+"')";
		try {
			result = p.execReqLecture(c, requete);
			if(result.next() && result.getString("pseudo").equals(nom)){
				System.out.println("Je fais un test");
				this.getServletContext().getRequestDispatcher("/WEB-INF/home.jsp").forward(request,response);
			}else{
				String erreur="<p style='color:red;'>Erreur de pseudo ou mot de passe</p>";
				request.setAttribute("erreurPassw", erreur);
				this.getServletContext().getRequestDispatcher("/index.jsp").forward(request,response);
			}
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
	}
}
