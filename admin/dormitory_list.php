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

$sql = "SELECT dormitory.DormID,DormCap,COUNT(distinct StuID) as count,
       AVG(InspScore) as avg,
       (SELECT StuName FROM student natural join student_dormitory WHERE DormID=dormitory.DormID and IsHeader='是') as header
    FROM inspection right join (dormitory left join student_dormitory on dormitory.DormID=student_dormitory.DormID) on dormitory.DormID=inspection.DormID GROUP BY dormitory.DormID ORDER BY dormitory.DormID";


//$sql = "SELECT dormitory.DormID,DormCap FROM (dormitory left join student_dormitory on dormitory.DormID=student_dormitory.DormID)";

$result = $conn->query($sql);
if($result->num_rows>0){
    while ($row = mysqli_fetch_array($result)){
        $res[]=$row;
    }
    echo json_encode($res);
}

$conn->close();