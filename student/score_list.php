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
//先查询student和student_dormitory的自然连接获得结果。
$stuid = $_GET['stuid'];
//$stuid = '201900161140';
$sql = "SELECT * FROM student natural join student_dormitory natural join inspection WHERE (StuID='$stuid') ORDER BY InspTime desc";
$result = $conn->query($sql);
if($result->num_rows>0){
    while ($row = mysqli_fetch_array($result)){
        $res[]=$row;
    }
    echo json_encode($res);
}

$conn->close();