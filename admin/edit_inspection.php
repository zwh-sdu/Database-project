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

$date=$_POST['date'];
$type=$_POST['type'];
$dorm=$_POST['dorm'];
$score=$_POST['score'];
$admin=$_POST['admin'];
$note=$_POST['note'];

$sql = "INSERT INTO inspection(DormID, Inspector, InspTime, InspType, InspScore, Note)
VALUES ('$dorm','$admin','$date','$type','$score','$note')";
$result = $conn->query($sql);
$conn->close();