<%@page contentType="application/xml" pageEncoding="UTF-8"%>
<%@page import="jeu.model.Utilisateur"%>
<%@page import="java.util.ArrayList"%>
<jsp:useBean class="jeu.model.GestionUtilisateurs" id="utilisateurs" scope="application"></jsp:useBean>
<%
ArrayList<Utilisateur> utilisateursLibres = utilisateurs.listeUtilisateursLibres();
%>
<liste>
    <% 
    for (Utilisateur utilisateur : utilisateursLibres) {
        if (!utilisateur.getPseudo().equals((String) session.getAttribute("pseudo"))) {
                   
    %>
    <joueur>
        <pseudo><%= utilisateur.getPseudo() %></pseudo>
        <couleur><%= utilisateur.getCouleur() %></couleur>
    </joueur>
    <%
        }
    }
    %>
</liste>