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
$accountid=$_GET['accountid'];
$password_new=$_GET['password_new'];

$sql = "UPDATE ACCOUNT_INFO SET UserPwd='$password_new' WHERE UserId='$accountid'";
$res = $conn->query($sql);

$conn->close();