<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN">
<HTML>

<!-- --------------------------------------------------------------------------------------
     Alentus Default Web Site

       Page.......: ASP Script Test Page
       Domain.....: worldwideflood.com
       URL........: http://www.worldwideflood.com/scripts/testASP.asp

     Copyright 2001, Alentus Corporation
     -------------------------------------------------------------------------------------- -->

<!-- HTML Header -->
<HEAD>
  <TITLE>Welcome to www.worldwideflood.com</TITLE>
  <META name='keywords' content='worldwideflood.com,www.worldwideflood.com'>
  <STYLE>
	<!-- body	{ font-family:arial;                                    } -->
	<!-- td		{ font-family:arial; font-size:10pt; font-weight:normal } -->
	<!-- th		{ font-family:arial; font-size:10pt; font-weight:bold   } -->
	<!-- p		{ font-family:arial; font-size:10pt;                    } -->
</STYLE>

<!-- Page Body -->
</HEAD>

<BODY bgcolor=FFFFFF>

<!-- Page Banner -->
<HR><CENTER>
<FONT size=4>Welcome to www.worldwideflood.com</FONT>
<FONT size=2>
<HR>

<!-- Page Title -->
ASP Scripting Test Page.
<P>
<IMG src='/images/ASPLogo.gif' align=center border=0>
<P>

The time is <% =time %>. That means it's <% =minute(now) %> 
minutes past <% =hour(now) %> o'clock.




<!-- Call the ASP Script Routine -->
<% Call TestASP() %>

<P>
<A href=/>Click here</A> to return to the home page.

<!-- Page Footer -->
<HR>
<P>www.worldwideflood.com is hosted by:
<BR>
<A href='http://www.alentus.com'><IMG src='/images/AlentusLogo.gif' align=center border=0></A>
</FONT>
</HTML>

<!-- ASP Subroutines and Functions are embedded here          -->
<!--                                                          -->
<!--   They do not show up in the browser because they are    -->
<!--   filtered out at the server and executed as required    -->
<!--                                                          -->
<SCRIPT LANGUAGE=VBScript RUNAT=Server>

'---------------------------------------------------------------------------
' Subroutine   : SendLn
' Description  : Sends a line of text to the response object
'---------------------------------------------------------------------------
Sub SendLn(pMsg)
  Response.Write pMsg & chr(10)
End Sub

'---------------------------------------------------------------------------
' Subroutine   : TestASP
' Description  : Tests for some ASP variables
'---------------------------------------------------------------------------
Sub TestASP()

  Dim intCount

  SendLn "<table border=1>"
  SendLn "<tr><th colspan=2>Server Variables</td></tr>" 
  SendLn "<tr><th>Variable  		<th>Value"
  SendLn "<tr><td>SCRIPT_NAME  		<td>" & Request.ServerVariables("SCRIPT_NAME")
  SendLn "<tr><td>SERVER_PROTOCOL 	<td>" & Request.ServerVariables("SERVER_PROTOCOL")
  SendLn "<tr><td>SERVER_SOFTWARE 	<td>" & Request.ServerVariables("SERVER_SOFTWARE")
  SendLn "<tr><td>REMOTE_ADDR 		<td>" & Request.ServerVariables("REMOTE_ADDR")
  SendLn "<tr><td>HTTP_REFERER		<td>" & Request.ServerVariables("HTTP_REFERER")
  SendLn "</table>" 

End Sub

</SCRIPT>
<!-- End of ASP Script Subroutines and Functions              -->
