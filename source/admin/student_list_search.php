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
$stusex=$_POST['stusex'];
$stumajor=$_POST['stumajor'];
$stugrade=$_POST['stugrade'];
$stuclass=$_POST['stuclass'];
$dorm=$_POST['dorm'];
$isheader=$_POST['isheader'];

$sql = "SELECT * FROM student natural join student_dormitory WHERE
    StuID like '%$stuid%' and StuName like '%$stuname%' and StuSex like '%$stusex%' and
    StuMajor like '%$stumajor%' and StuGrade like '%$stugrade%' and
    StuClass like '%$stuclass%' and DormID like '%$dorm%' and IsHeader like '%$isheader%'
    ORDER BY DormID";
$result = $conn->query($sql);
if($result->num_rows>0){
    while ($row = mysqli_fetch_array($result)){
        $res[]=$row;
    }
    echo json_encode($res);
}

$conn->close();