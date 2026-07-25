<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN">
<HTML>

<!-- --------------------------------------------------------------------------------------
     Alentus Default Web Site

       Page.......: ASP Mail Test Script
       Domain.....: worldwideflood.com
       URL........: http://www.worldwideflood.com/scripts/testMailForm.asp

     Copyright 2001, Alentus Corporation
     -------------------------------------------------------------------------------------- -->

<!-- HTML Header -->
<HEAD>
  <TITLE>Welcome to www.worldwideflood.com</TITLE>
  <META name='keywords' content='worldwideflood.com,www.worldwideflood.com'>
</HEAD>

<STYLE>
	<!-- body	{ font-family:arial;                                    } -->
	<!-- td		{ font-family:arial; font-size:10pt; font-weight:normal } -->
	<!-- th		{ font-family:arial; font-size:10pt; font-weight:bold   } -->
	<!-- p		{ font-family:arial; font-size:10pt;                    } -->
</STYLE>

<!-- Page Body -->
<BODY bgcolor=FFFFFF>

<!-- Page Banner -->
<HR><CENTER>
<FONT size=4>Welcome to www.worldwideflood.com</FONT>
<FONT size=2>
<HR>

<!-- Page Title -->
ASP Mail Send Page.
<P>
<IMG src='/images/ASPMailLogo.gif' align=center border=0>
<P>

<!-- ASP Mail Send Page -->
Mail  To: <% = Request.QueryString("addressto") %><br>
<p>
<%
	Set Mailer = Server.CreateObject("SMTPsvg.Mailer")
	Mailer.RemoteHost  = "smtp.worldwideflood.com"
	Mailer.FromName    = "www.worldwideflood.com"
	Mailer.FromAddress = "postmaster@worldwideflood.com"
	Mailer.AddRecipient Request.QueryString("addressto"), Request.QueryString("addressto")
	Mailer.Subject     = "Mail is working!"
	Mailer.BodyText    = Request.QueryString("txtmsg")

	if not Mailer.SendMail then
		Response.Write " Mailing Failed... Error is: <br>"
		Response.Write Mailer.Response
	else
		Response.Write " sent successfully...<p>"
	end if
%>


<P>
<A href=/>Click here</A> to return to the home page.

<!-- Page Footer -->
<HR>
<P>www.worldwideflood.com is hosted by:
<BR>
<A href='http://www.alentus.com'><IMG src='/images/AlentusLogo.gif' align=center border=0></A>
</FONT>
</BODY>
</HTML>
