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

$stuid=$_POST['stuid'];

//修改密码
$sql = "UPDATE ACCOUNT_INFO SET UserPwd='88888888' WHERE UserId='$stuid'";
$result = $conn->query($sql);

$conn->close();