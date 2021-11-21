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
$sql = "SELECT StuName,DormID FROM student natural join student_dormitory WHERE StuID='$stuid'";
$result = $conn->query($sql);
if($result->num_rows>0){
    $row = mysqli_fetch_array($result);
    echo json_encode($row);
}

$conn->close();