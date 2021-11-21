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
$sql = "DELETE FROM student WHERE StuID='$stuid'";
$result = $conn->query($sql);
$sql = "DELETE FROM account_info WHERE UserId='$stuid'";
$result = $conn->query($sql);
$sql = "DELETE FROM student_dormitory WHERE StuID='$stuid'";
$result = $conn->query($sql);
$conn->close();