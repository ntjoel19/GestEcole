package dao;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class Persistance {
	private final String driver = "org.postgresql.Driver";
	private String url ;
	private String user ;
	private String password ;
	
	HttpSession session;
	
	public Persistance(){
		try {
			Class.forName(driver);
			System.out.println("Pilote chargé");
		} catch (ClassNotFoundException e) {
			System.out.println("Echec de chargement du pilote postgres");
			e.printStackTrace();
		}
	}
	
	public Connection etablirConnexion(String url,String user,String password) throws SQLException{
		Connection connection = DriverManager.getConnection(url,user,password);
		if(connection == null) System.out.println("erreur de connection");
		else System.out.println("connection reussie");
		return connection ;
	}
	
	public void fermerConnexion(Connection c) throws SQLException{
		System.out.println("Fermeture de la connection a la BD");
		c.close();
	}

	public ResultSet execReqLecture(Connection connection ,String query) throws SQLException {
		ResultSet resultSet ;
		PreparedStatement preparedStatement = connection.prepareStatement(query);
		resultSet = preparedStatement.executeQuery();
		return resultSet ;
	}
	
	public void execReqEcriture(Connection connection, String query) throws SQLException{
		PreparedStatement preparedStatement = connection.prepareStatement(query);
		preparedStatement.executeUpdate();
	}	
	
	public void encodage(HttpServletRequest request){
		String encoding = request.getCharacterEncoding();
		if (encoding == null || !encoding.equals("UTF-8"))
		{
			try
			{
				request.setCharacterEncoding("UTF-8");
			}
			catch (UnsupportedEncodingException e)
			{
				System.err.println("HttpMultipartRequest - : " + e);
			}
		}
	}
	
}
