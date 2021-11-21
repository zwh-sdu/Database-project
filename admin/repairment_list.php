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
$choose=$_GET['choose'];
if($choose==='0'){//全部
    $sql="SELECT * FROM repairment ORDER BY SubmitTime desc";
}else if($choose==='1'){
    $sql="SELECT * FROM repairment WHERE IsSolved='否' ORDER BY SubmitTime desc";
}else if($choose==='2'){
    $sql="SELECT * FROM repairment WHERE IsSolved='是' ORDER BY SubmitTime desc";
}
$result = $conn->query($sql);
if($result->num_rows>0){
    while ($row = mysqli_fetch_array($result)){
        $res[]=$row;
    }
    echo json_encode($res);
}else{
    echo json_encode(null);
}
$conn->close();