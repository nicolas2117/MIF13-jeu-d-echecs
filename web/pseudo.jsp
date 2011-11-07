<%@page import="jeu.model.Utilisateur"%>
<%@page contentType="application/xml" pageEncoding="UTF-8"%>
<jsp:useBean class="jeu.model.GestionUtilisateurs" id="utilisateurs" scope="application"></jsp:useBean>
<%
String pseudo = (String) request.getParameter("pseudo");
if (pseudo == null || pseudo.isEmpty() || !utilisateurs.lePseudoEstLibre(pseudo)) {
%>
<statut>ERREUR</statut>
<%
} else {
utilisateurs.ajouterUtilisateur(new Utilisateur(pseudo));
session.setAttribute("pseudo", pseudo);
%>
<statut>OK</statut>
<%
}
%>