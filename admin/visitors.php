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

$name=$_POST['name'];
$phone=$_POST['phone'];
$stuid=$_POST['stuid'];
$arrive=$_POST['arrive'];
$leave=$_POST['leave'];
$admin=$_POST['admin'];
$dorm=$_POST['dorm'];
$purpose=$_POST['purpose'];

$sql = "INSERT INTO visitor (VisitorName, Phone, Purpose, ArriveTime, LeaveTime, AdminID, VisStuID)
VALUES ('$name','$phone','$purpose','$arrive','$leave','$admin','$stuid')";
$result = $conn->query($sql);
$conn->close();