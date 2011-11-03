<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
String pseudo = (String) session.getAttribute("pseudo");
if (pseudo != null && !pseudo.isEmpty()) {
    response.sendRedirect("salon.jsp");
}
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Jeu d'echecs</title>
    </head>
    <body>
        <form method="post" action="Init">
            <label>Pseudo<input type="text" name="pseudo" /></label>
            <input type="submit" value="Se connecter" />
        </form>
    </body>
</html>
