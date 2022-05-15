<%@ page contentType="text/html"%>
<%@ page import="javax.xml.parsers.DocumentBuilderFactory,
javax.xml.parsers.DocumentBuilder,org.w3c.dom.*"
%>
<%
DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
DocumentBuilder db = dbf.newDocumentBuilder();
Document doc = db.parse("http://localhost:8091/ChessClub/test.xml");
 
NodeList nl= doc.getElementsByTagName("name");
NodeList n2= doc.getElementsByTagName("Rating");
%>
<html>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<body>
<center>
<h1 class='display-4' >PTU Players FIDE Rating as per Official record </h1>
 <table class='table table-bordered' width="800" border="0" cellspacing="0" cellpadding="0">
 <tr>
 <td style="background:#000033;color:#FFFFFF;font-weight:bold;">Name</td>
 <td style="background:#000033;color:#FFFFFF;font-weight:bold;">Rating</td>
 </tr>
 <tr>
 <%
 for(int i=0;i<13;i++)
 {
 %>
 	<td class='lead' ><%= nl.item(i).getFirstChild().getNodeValue() %></td>
 	<td><%= n2.item(i).getFirstChild().getNodeValue() %></td>
 </tr>
 <%
 }
 %>
 </table>
 </center>
</body>
</html>