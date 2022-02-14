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

$dorm=$_POST['dorm'];
$type=$_POST['type'];
$score_less=$_POST['score_less'];
$score_more=$_POST['score_more'];
if($score_less==0){
    $score_less=100;
}

$sql = "SELECT * FROM inspection WHERE DormID like '%$dorm%' and
    InspType like '%$type%' and InspScore<='$score_less' and InspScore>='$score_more' ";
$result = $conn->query($sql);
if($result->num_rows>0){
    while ($row = mysqli_fetch_array($result)){
        $res[]=$row;
    }
    echo json_encode($res);
}

$conn->close();