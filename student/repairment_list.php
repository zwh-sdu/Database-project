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
$stuid=$_GET['stuid'];
$choose=$_GET['choose'];
if($choose==='0'){//全部
    $sql="SELECT * FROM student_dormitory natural join repairment WHERE StuID='$stuid'";
}else if($choose==='1'){
    $sql="SELECT * FROM student_dormitory natural join repairment WHERE (StuID='$stuid' and IsSolved='否')";
}else if($choose==='2'){
    $sql="SELECT * FROM student_dormitory natural join repairment WHERE (StuID='$stuid' and IsSolved='是')";
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