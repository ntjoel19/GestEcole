package util;

import java.io.FileOutputStream;
import java.io.IOException;

import com.itextpdf.text.BadElementException;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Image;
import com.itextpdf.text.List;
import com.itextpdf.text.ListItem;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.Section;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

public class generationPdf {
	public generationPdf(){
		
	}
	public String genererListeEleve(String[] champs, String pDestinationFolder,String pTargetFileNamePrefix,String destination){
		FileOutputStream fos = null;
		FontFactory.registerDirectories();
		//System.out.println("promoteur = "+champs[27]);
		String[] promoteur = champs[27].split("/");
		String[] justification = champs[12].split("/");
		String[] objectif = champs[11].split("/");
		String[] ancrage = champs[13].split("/");
		
		Font fuente = FontFactory.getFont("Times New Roman");
		/** Times Roman 18 Bold */
		Font CATFONT = new Font(Font.getFamily("Times New Roman"), 18, Font.BOLD);
		 
		/** Times Roman 12 Normal */
		Font REDFONT = new Font(Font.getFamily("Times New Roman"), 12, Font.NORMAL);
		 
		/** Times Roman 16 Bold */
		Font SUBFONT = new Font(Font.getFamily("Times New Roman"), 16, Font.BOLD);
		 
		/** Times Roman 12 Bold */
		Font SMALLBOLD = new Font(Font.getFamily("Times New Roman"), 12, Font.BOLD);
		
		/** Times Roman 10 Bold */
		Font SMALL_10 = new Font(Font.getFamily("Times New Roman"), 10, Font.NORMAL);
		String chemin="";
		try {
			//System.out.println(System.getProperties());
			//System.setProperty("user.dir", "C:/eclipse-jee-mars-1-win32/eclipse/workspace/suite_project/WebContent/ressources/projet");
			System.out.println("le chemin relatif est"+"/"+champs[1]);
			
			Document fiche_projet = creerDocument("/GestEcole/projet/"+champs[1]+"/"+champs[31]+champs[0]+".pdf");
			
			addMetaData(fiche_projet);
			Paragraph paragraphe = new Paragraph();
			Paragraph paragraphe1 = new Paragraph();
			Image image = Image.getInstance("/suite_project/entete_fiche_projet.PNG");
			image.scaleToFit(fiche_projet.getPageSize().getWidth(), fiche_projet.getPageSize().getHeight());
			image.setAlignment(Image.ALIGN_CENTER);
			fiche_projet.add(image);
			
			// Creation d'une PdfPTable avec 2 colonnes
			float[] columnWidths = {2f,5f};
		    final PdfPTable table = new PdfPTable(columnWidths);
		    table.setWidthPercentage(100f);
		    
		    
		    // Creation d'une PdfPCell avec un paragraphe
		    final PdfPCell cell = new PdfPCell(new Paragraph("A. INFORMATIONS GENERALES",SMALLBOLD));
		    
		    // Changement du colspan de la PdfCell
		    cell.setColspan(2);
		 
		    // Ajout de la PdfCell custom à la PdfPTable
		    table.addCell(cell);
		 
		    //insert column headings 1 (intitule)
		    insertCell(table, "A.1 Intitulé du Projet :", Element.ALIGN_RIGHT, 1, SMALLBOLD);
		    insertCell(table, champs[2], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "A.2 Description : ", Element.ALIGN_RIGHT, 1, SMALLBOLD);
		    insertCell(table, champs[10], Element.ALIGN_CENTER, 1, SMALL_10);
		    
		    //insert an empty row
		    insertCell(table, "A.2 Promoteur du Projet", Element.ALIGN_LEFT, 4, SMALLBOLD);
		    insertCell(table, "Ministère :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, promoteur[0], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Secteur :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, promoteur[1], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Sous-secteur :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, promoteur[2], Element.ALIGN_CENTER, 1, SMALL_10);
		    
		    //insert an empty row
		    insertCell(table, "A.3 Justification du Projet ", Element.ALIGN_LEFT, 4, SMALLBOLD);
		    insertCell(table, "Justificatifs par rapport aux besoins identifiés ", Element.ALIGN_LEFT, 4, SMALLBOLD);
		    insertCell(table, "Besoins identifiés et à satisfaire par le projet :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, justification[0], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Situation actuelle :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, justification[1], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Situation desiree :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, justification[2], Element.ALIGN_CENTER, 1, SMALL_10);
		    
		    //insert an empty row
		    insertCell(table, "Objectifs du projet ", Element.ALIGN_LEFT, 4, SMALLBOLD);
		    insertCell(table, "Objectif global du projet :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, objectif[0], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Situation actuelle :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, objectif[1], Element.ALIGN_CENTER, 1, SMALL_10);
		    
		    //insert an empty row
		    insertCell(table, "Ancrage du projet à la stratégie nationale, sectorielle, ministérielle ou thématique ", Element.ALIGN_LEFT, 4, SMALLBOLD);
		    insertCell(table, "Objectif Stratégique Global :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, ancrage[0], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Objectif Stratégique Spécifique :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, ancrage[1], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Programme Concerné  :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, champs[4], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Variable d’action :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "", Element.ALIGN_CENTER, 1, SMALL_10);
		    
		    //insert an empty row
		    insertCell(table, "A.4 Population cible du projet : "+champs[28], Element.ALIGN_LEFT, 4, SMALLBOLD);
		    
		    //insert an empty row
		    insertCell(table, "A.5 Extrant escompté/Produit attendu : \n"+champs[17], Element.ALIGN_LEFT, 4, SMALLBOLD);
		    
		    //insert an empty row
		    insertCell(table, "A.6 Typologie du projet : \n"+champs[19], Element.ALIGN_LEFT, 4, SMALLBOLD);
		    
		    //insert an empty row
		    insertCell(table, "A.7 Montage institutionnel : \n", Element.ALIGN_LEFT, 4, SMALLBOLD);
		    insertCell(table, "Maitre d'ouvrage :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, champs[6], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Maitre d'oeuvre :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, champs[5], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Partenaires  :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, champs[7], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Service responsable :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, champs[8], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Agence d'execution :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, champs[9], Element.ALIGN_CENTER, 1, SMALL_10);
		    
		    //insert an empty row
		    insertCell(table, "A.7 Montage financier : \n", Element.ALIGN_LEFT, 4, SMALLBOLD);
		    insertCell(table, "Cout :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, champs[14], Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, "Nature du financement :", Element.ALIGN_CENTER, 1, SMALL_10);
		    insertCell(table, champs[15], Element.ALIGN_CENTER, 1, SMALL_10);
		    
		    paragraphe.add(table);
		    fiche_projet.add(paragraphe);
		 //for(int i=0;i<25;i++){
			 //doc.add(new Paragraph(champs[i]));
			 //doc.newPage();
		 //}
		 ////doc.add(new Paragraph(new Date().toString()));
		 fiche_projet.close();
		}catch (Exception ex) {
			ex.printStackTrace();
		}
		finally {
		 
		 if (fos != null) {
		 try {
		  fos.close();
		 }
		 catch (Exception ex) {
			  ex.printStackTrace();
			 }
		 }
		}
		//System.load("C:/eclipse/workspace/suite_project/WebContent/ressources/pdf");
		/*String copierVers=destination+"/"+champs[31]+champs[0]+".pdf";
		File source=new File("/pdf/suite_project/"+champs[1]+"/"+champs[31]+champs[0]+".pdf");
		if(pDestinationFolder.charAt(pDestinationFolder.length()-1) != '/')
			pDestinationFolder+="/";
		File dest=new File(pDestinationFolder+"/"+champs[1]+champs[31]+champs[0]+".pdf");
		boolean test = CopierFichier(source, source);
		if(!test) return "erreur";*/
		return pDestinationFolder+champs[31]+champs[0]+".pdf";
	}
	
	/**
	 * Crée un Document vide.
	 *
	 * @param file Chemin du fichier à créer.
	 * @return Document s'il n'y a pas eu d'erreur.
	 * @throws IOException s'il y a eu une erreur avec le nom de fichier fourni.
	 * @throws DocumentException s'il y a eu une erreur côté iText.
	 */
	private Document creerDocument(String file) throws DocumentException, IOException {
	    Document document = new Document();
	 
	    PdfWriter pdfWriter = PdfWriter.getInstance(document, new FileOutputStream(file));
	    //pdfWriter.setPageEvent((PdfPageEvent) this);
	    // Préférence de lecture : 2 pages en colonne.
	    pdfWriter.setViewerPreferences(PdfWriter.PageLayoutTwoColumnLeft);
	    document.open();
	 
	    return document;
	}
	
	/**
	 * Ajout de données de type Metadata au document.
	 *
	 * @param document Document auquel il faut rajouter les metadatas.
	 */
	private void addMetaData(Document document) {
	    document.addTitle("Fiche projet autogénérée (MINT)");
	    document.addSubject("Gestion des numerique projets");
	    //document.addKeywords("Java, PDF, iText");
	    document.addAuthor("Ministere des Transport (SuiteProject)");
	    document.addCreator("Ministere des Transport (SuiteProject)");
	}
	
	/**
	 * Ajoute une ligne vide number fois dans le Paragraph passé en paramètre.
	 *
	 * @param paragraph A remplir avec les lignes vides.
	 * @param number Nombre de lignes vides à ajouter.
	 */
	private void ajouterLigneVide(Paragraph paragraph, int number) {
	    for (int i = 0; i < number; i++) {
	        paragraph.add(new Paragraph(" "));
	    }
	}
	
	/**
	 * Crée un tableau de 3 colonnes et l'ajoute à la Section passée en
	 * paramètre.
	 * 
	 * @param subCatPart Section à remplir avec le tableau.
	 * @param nbCols nombre de colonnes du tableau
	 * @throws BadElementException Si une erreur survient lors de l'ajout d'un
	 *             élément dans la PdfPTable.
	 */
	private void createTable(Section subCatPart,int nbCols) throws BadElementException {
	    // Creation d'une PdfPTable avec 3 colonnes
	    final PdfPTable table = new PdfPTable(nbCols);
	 
	    // Creation d'une PdfPCell avec un paragraphe
	    final PdfPCell cell = new PdfPCell(new Paragraph("header with colspan "+nbCols));
	 
	    // Changement du colspan de la PdfCell
	    cell.setColspan(nbCols);
	 
	    // Ajout de la PdfCell custom à la PdfPTable
	    table.addCell(cell);
	 
	    // Ajout d'objets String à la PdfPTable
	    table.addCell("1.1");
	    table.addCell("2.1");
	    table.addCell("3.1");
	    table.addCell("1.2");
	    table.addCell("2.2");
	    table.addCell("3.2");
	 
	    // Ajout d'un espace entre la PdfPTable et l'élément précédent.
	    //table.setSpacingBefore(15f);
	 
	    subCatPart.add(table);
	}
	
	/**
	 * Crée une liste et l'ajoute dans la Section passée en paramètre.
	 * 
	 * @param subCatPart Section à remplir avec la liste.
	 */
	private void createList(Section subCatPart) {
	    final List list = new List(true, false, 10);
	    list.add(new ListItem("Premier point"));
	    list.add(new ListItem("Deuxième point"));
	    list.add(new ListItem("Troisième point"));
	    subCatPart.add(list);
	}

	private void insertCell(PdfPTable table, String text, int align, int colspan, Font font){
		   
		  //create a new cell with the specified Text and Font
		  PdfPCell cell = new PdfPCell(new Phrase(text.trim(), font));
		  //set the cell alignment
		  cell.setHorizontalAlignment(align);
		  //set the cell column span in case you want to merge two or more cells
		  cell.setColspan(colspan);
		  //in case there is no text and you wan to create an empty row
		  if(text.trim().equalsIgnoreCase("")){
		   cell.setMinimumHeight(10f);
		  }
		  //add the call to the table
		  table.addCell(cell);	   
	}
}
