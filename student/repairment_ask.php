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
$dorm=$_GET['dormid'];
$time=$_GET['time'];
$submitissue=$_GET['submitissue'];

$sql = "INSERT INTO repairment (DormID, SubmitTime, SubmitIssue,IsSolved)
VALUES ('$dorm','$time','$submitissue','否')
";
$res = $conn->query($sql);
$conn->close();