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
$stuclass=$_POST['stuclass'];
$stugrade=$_POST['stugrade'];
$dorm=$_POST['dorm'];
$bed=$_POST['bed'];
$isheader=$_POST['isheader'];
if($isheader===""){
    $isheader="否";
}

$sql = "INSERT INTO student (StuID, StuName, StuSex, StuMajor,StuClass,StuGrade) 
VALUES ('$stuid','$stuname','$stusex','$stumajor','$stuclass','$stugrade')";
$result = $conn->query($sql);
$sql = "INSERT INTO account_info (UserId, UserType, UserPwd)
VALUE ('$stuid','student','88888888')";
$result = $conn->query($sql);
$sql = "INSERT INTO student_dormitory (StuID, DormID, BedID, IsHeader)
VALUE ('$stuid','$dorm','$bed','$isheader')";
$result = $conn->query($sql);
$conn->close();