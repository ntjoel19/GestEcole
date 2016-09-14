package servlet;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.Persistance;

/**
 * Servlet implementation class add_eleve
 */
@WebServlet(
	    name = "add_eleve",
	    description = "ajout eleves",
	    urlPatterns = {"/add_eleve"}
	)
public class add_eleve extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Persistance p = new Persistance();
	java.sql.Connection c=null;
	ResultSet result=null; 
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public add_eleve() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// TODO Auto-generated method stub
				HttpSession session = request.getSession(true);
				p.encodage(request);
				
				String nom=(String) request.getParameter("noms");
				String prenom=(String) request.getParameter("prenoms");
				String adr=(String) request.getParameter("adr");
				//String redouble=(String) request.getParameter("redouble");
				String classe=(String) request.getParameter("classe");
				String matricule=(String) request.getParameter("matricule");
				String option=(String) request.getParameter("option2");
				String sexe=(String) request.getParameter("sexe");
				String date_nais=(String) request.getParameter("date_nais");
				String matricule2edit=(String) request.getParameter("matricule_hidden");
				int id_cla=0;
				
				int anneenais = Integer.parseInt(date_nais.split("-")[0]);
				Calendar dateActuelle=Calendar.getInstance();
				String dateToday = dateActuelle.get(Calendar.YEAR)+"-"+(dateActuelle.get(Calendar.MONTH)+1)+"-"+dateActuelle.get(Calendar.DAY_OF_MONTH);
				int age = dateActuelle.get(Calendar.YEAR) - anneenais;
				
				String requete2="SELECT lib_cla FROM  classe";
				String attrib_liste_classes=null;
				
				try {
					c = p.etablirConnexion("jdbc:postgresql://localhost:5432/GestEcole2","postgres","infoday");
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				/*
				System.out.println("classe="+classe+" option="+option);
				String query = "SELECT id_cla FROM classe WHERE lib_cla='"+classe+"' AND option='"+option+"'";
				try {
					result = p.execReqLecture(c, query);
					if(result.next())
						id_cla = result.getInt("id_cla");
				} catch (SQLException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}*/
				System.out.println(option);
				String queryInsert="UPDATE eleve SET " +
						"nom = '"+nom+"', " +
						"prenom='"+prenom+"', " +
						"adresse='"+adr+"', " +
						"matricule_eleve='"+matricule+"', " +
						"niveau='"+classe.split("-")[0]+"', " +
						"numero_classe='"+classe.split("-")[1]+"', " +
						"intitule_serie='"+option+"', " +
						"sexe='"+sexe+"', " +
						"date_nais='"+date_nais+"' " +
						" WHERE matricule_eleve='"+matricule2edit+"';";
				
				//System.out.print(queryInsert);
				try {
					p.execReqEcriture(c, queryInsert);
					//p.execReqEcriture(c, queryInsert2);
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				String attrib_tableau=null;
				String nom_elv, pren_elv,datenais,num_classe,adresse;
				int i=1;
						
				String requete="SELECT * FROM  eleve";
				requete2="select * from classe";
				attrib_liste_classes="";
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
					//System.out.println(attrib_tableau);
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
				this.getServletContext().getRequestDispatcher("/WEB-INF/eleves/eleves.jsp").forward(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession(true);
		p.encodage(request);
		
		String nom=(String) request.getParameter("noms");
		String prenom=(String) request.getParameter("prenoms");
		String adr=(String) request.getParameter("adr");
		//String redouble=(String) request.getParameter("redouble");
		String classe=(String) request.getParameter("classe");
		String matricule=(String) request.getParameter("matricule");
		String option=(String) request.getParameter("option");
		String sexe=(String) request.getParameter("sexe");
		String date_nais=(String) request.getParameter("date_nais");
		int id_cla=0;
		
		int anneenais = Integer.parseInt(date_nais.split("-")[0]);
		Calendar dateActuelle=Calendar.getInstance();
		String dateToday = dateActuelle.get(Calendar.YEAR)+"-"+(dateActuelle.get(Calendar.MONTH)+1)+"-"+dateActuelle.get(Calendar.DAY_OF_MONTH);
		int age = dateActuelle.get(Calendar.YEAR) - anneenais;
		
		String requete2="SELECT lib_cla FROM  classe";
		String attrib_liste_classes=null;
		
		try {
			c = p.etablirConnexion("jdbc:postgresql://localhost:5432/GestEcole2","postgres","infoday");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		String queryInsert="INSERT INTO eleve (nom, prenom, adresse, matricule_eleve, niveau, numero_classe,intitule_serie,sexe, date_nais)" +
				" VALUES (" +
				"'"+nom+"', " +
				"'"+prenom+"', " +
				"'"+adr+"', " +
				"'"+matricule+"', " +
				"'"+classe.split("-")[0]+"', " +
				"'"+classe.split("-")[1]+"', " +
				"'"+option+"', " +
				"'"+sexe+"', " +
				"'"+date_nais+"' )";
		
		
		try {
			//System.out.println(queryInsert);
			p.execReqEcriture(c, queryInsert);
			//p.execReqEcriture(c, queryInsert2);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		String attrib_tableau="";
		String nom_elv, pren_elv,datenais,num_classe,adresse;
		int i=1;
		
		String requete="SELECT * FROM  eleve";
		requete2="select * from classe";
		attrib_liste_classes="";
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
			//System.out.println(attrib_tableau);
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
		this.getServletContext().getRequestDispatcher("/WEB-INF/eleves/eleves.jsp").forward(request,response);
	}

}
