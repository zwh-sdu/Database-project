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
$stuname=$_POST['stuname'];
$leave=$_POST['leave_t'];
$back=$_POST['back_t'];
$reason=$_POST['reason'];

$sql = "INSERT INTO leave_back (StuID, LeaveTime, BackTime, Reason) 
VALUES ('$stuid','$leave','$back','$reason')";
$result = $conn->query($sql);
$conn->close();