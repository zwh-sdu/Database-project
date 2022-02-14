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
$repid=$_GET['repid'];
$is=$_GET['is'];
$reptime=$_GET['reptime'];
$reply=$_GET['reply'];

$sql = "UPDATE repairment SET IsSolved='$is',RepTime='$reptime',RepIssue='$reply' WHERE RepID='$repid'";
$res = $conn->query($sql);
$conn->close();