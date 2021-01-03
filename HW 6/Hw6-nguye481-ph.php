<!-- Victor Nguyen CIS 444 [nguye481]
    HOMEWORK 6 PHP
    This file is meant to display the entries of football teams in the user's MYSQL database.
-->
<!DOCTYPE html>
<html lang="en">
<head>
<title> CIS Homework 6 NFL Teams - PHP Script </title>
<meta charset="utf-8"/>
<link rel="stylesheet" type="text/css" href="Hw6-nguye481-stylesheet.css">
</head>
<body>
<?php
$db = mysqli_connect("localhost", "nguye481", "PASSWORD"); //REPLACED MY PASSWORD WITH "PASSWORD" FOR SECURITY REASONS
if(!$db)
{
print "Error: Unable to connect to MySql Server!";
exit();
}
$my_database = mysqli_select_db($db, "nguye481");
if(!$my_database)
{
print "Error: Unable to acccess nguye481 database";
exit();
}
$teamIDQuery = htmlspecialchars(stripcslashes($_POST['teamIDInput']));
$query = "SELECT * FROM teams WHERE teamID = '$teamIDQuery'";
$result = mysqli_query($db, $query);
if(!$result)
{
print "Error: The query could not be executed correctly!";
$error = mysqli_error($db);
print "<p> $error </p>";
exit();
}
$rowsNum = mysqli_num_rows($result);
if($rowsNum > 0)
{
print "<table> <caption> <h3> NFL Team Information </h3>";
print "<h3> Team ID Entered: $teamIDQuery </h3> </caption>";
print "<tr>";
$firstRow = mysqli_fetch_assoc($result);
$fieldsNum = mysqli_num_fields($result);
$colNames = array_keys($firstRow);
for($index = 0; $index < $fieldsNum; $index++)
{
    print "<th> $colNames[$index] </th>";
}
print "</tr>";

for($row_num = 0; $row_num < $rowsNum; $row_num++)
{
    print "<tr>";
    $values = array_values($firstRow);

    for($i = 0; $i < $fieldsNum; $i++){
        $value = htmlspecialchars($values[$i]);
        print "<td> $value </td>";
    }
    print "</tr>";
    $firstRow = mysqli_fetch_assoc($result);
}
}
else
{
print "Invalid row in the teams table. <br/>";
}
print "</table>";
?>
</body>
</html>
