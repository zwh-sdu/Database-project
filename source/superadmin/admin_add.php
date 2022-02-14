<?php
$servername = "localhost";
$username = "root";
$password = "lionelmessi";
$dbname = "DB_of_Course_Design";
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

$userid=$_POST['userid'];
$password=$_POST['password'];

$sql = "INSERT INTO account_info (UserId, UserType, UserPwd) 
VALUES ('$userid','admin','$password')";
$result = $conn->query($sql);
$conn->close();