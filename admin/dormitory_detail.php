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
$sql = "SELECT * FROM (student,dormitory,student_dormitory)
WHERE student.StuID=student_dormitory.StuID and student_dormitory.DormID='$dormid' and dormitory.DormID='$dormid'";
$result = $conn->query($sql);
if($result->num_rows>0){
    while ($row = mysqli_fetch_array($result)){
        $res[]=$row;
    }
    echo json_encode($res);
}

$conn->close();