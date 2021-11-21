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
$sql = "SELECT AVG(InspScore) avg FROM inspection WHERE DormID='$dormid'";
$result = $conn->query($sql);
$res=[];
if($result->num_rows>0){
    while ($row = mysqli_fetch_array($result)){
        $res[]=$row;
    }
}
$sql = "SELECT COUNT(InspScore) good FROM inspection WHERE DormID='$dormid' and InspScore>=95";
$result = $conn->query($sql);
if($result->num_rows>0){
    while ($row = mysqli_fetch_array($result)){
        $res[]=$row;
    }
}
$sql = "SELECT COUNT(InspScore) bad FROM inspection WHERE DormID='$dormid' and InspScore<60";
$result = $conn->query($sql);
if($result->num_rows>0){
    while ($row = mysqli_fetch_array($result)){
        $res[]=$row;
    }
    echo json_encode($res);
}

$conn->close();