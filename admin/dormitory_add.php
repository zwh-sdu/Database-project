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

$dormid=$_POST['dormid'];
$dormcap=$_POST['dormcap'];

$sql = "INSERT INTO dormitory (dormid, dormcap) 
VALUES ('$dormid','$dormcap')";

$result = $conn->query($sql);

$conn->close();