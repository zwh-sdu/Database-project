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
$olddorm=$_POST['olddorm'];
$newdorm=$_POST['newdorm'];
$date=$_POST['date'];
$reason=$_POST['reason'];

$sql = "INSERT INTO changedorm (StuID, OldDorm, NewDorm, Date, Reason) 
VALUES ('$stuid','$olddorm','$newdorm','$date','$reason')";
$result = $conn->query($sql);
$sql = "UPDATE student_dormitory SET DormID='$newdorm' WHERE StuID='$stuid'";
$result = $conn->query($sql);

$conn->close();