<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<jsp:useBean id="msg" class="com.ustglobal.empwebapp.dto.EmployeeInfo" scope="request"/>
<body>
	<a href="./home"> Home</a>
	<a style="float: right" href="./logout">Logout</a>

	<fieldset align="center">

		<legend>Change Password</legend>

		<form action="./changepassword" method="post">

			<table align="center">

				<tr>
					<td>New Password:</td>
					<td><input type="password" name="password"></td>
				</tr>

				<tr>
					<td>Confirm Password:</td>
					<td><input type="password" name="confirmpassword"></td>
				</tr>
				<tr>

					<td><input type="reset" value="Reset"></td>
					<td><input type="submit" name="changepassword">
				</tr>

			</table>
		</form>
	</fieldset>

</body>
</html>