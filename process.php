<?php
// Get values pass from the form in login.php
$username = $_POST['user'];
$password = $_POST['pass'];

// To prevent mysql injection
$username = stripcslashes($username);
$password = stripcslashes($password);
$username = mysql_real_escape_string($username);
$password = mysql_real_escape_string($password);

// Connect to the server and select database
mysql_connect("localhost", "root", "");
mysql_select_db("login");

// Query the database for the user
$result = mysql_query("Select * from users where username = '$username' and '$password' = '$password'")
    or die("Failed to query database " . mysql_error());
$row = mysql_fetch_array($result);
if ($row['username'] == $username && $row['password'] == $password) {
    echo "Login success!!! Welcome " . $row['username'];
} else {
    echo "Failed to login.";
}
?>