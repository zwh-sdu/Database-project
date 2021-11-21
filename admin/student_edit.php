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

//修改姓名、性别、专业、班级、年级
$sql = "UPDATE STUDENT SET StuName='$stuname',StuSex='$stusex',StuMajor='$stumajor',StuClass='$stuclass',StuGrade='$stugrade' 
WHERE StuID='$stuid'";
$result = $conn->query($sql);
//修改宿舍信息
$sql = "UPDATE student_dormitory SET DormID='$dorm',BedID='$bed',IsHeader='$isheader'
WHERE StuID='$stuid'";
$result = $conn->query($sql);

$conn->close();