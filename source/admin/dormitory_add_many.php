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

$data=$_POST['data'];
$len=count($data);
$num=0;
for($i=0;$i<$len;$i++){
    $dormid=$data[$i]['宿舍号'];
    $dormcap=$data[$i]['容量'];
    $sql = "INSERT INTO dormitory (DormID, DormCap)
    VALUES ('$dormid','$dormcap')";
    $result = $conn->query($sql);
    if($result==true){
        $num++;
    }
}

echo json_encode($num);

$conn->close();